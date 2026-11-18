import type { ProjectCaseStudy } from '@/lib/project-case-studies';
import {
  getRelatedProjectCaseStudies,
  resolveCaseStudyImages,
  resolveCaseStudyScope,
  resolveCaseStudyStats,
} from '@/lib/project-case-studies';
import { ApproachSection } from '@/components/projects/approach-section';
import { CaseHero } from '@/components/projects/case-hero';
import { ChallengeList } from '@/components/projects/challenge-list';
import { ConclusionCard } from '@/components/projects/conclusion-card';
import { CtaBanner } from '@/components/projects/cta-banner';
import { Gallery } from '@/components/projects/gallery';
import { OutcomesBento } from '@/components/projects/outcomes-bento';
import { ReadingProgress } from '@/components/projects/reading-progress';
import { RelatedProjects } from '@/components/projects/related-projects';
import { ScopeGrid } from '@/components/projects/scope-grid';
import { SplitSection } from '@/components/projects/split-section';

export function ProjectCaseStudyView({ study }: { study: ProjectCaseStudy }) {
  const images = resolveCaseStudyImages(study);
  const heroImage = images[0] ?? {
    src: study.heroImage,
    alt: `${study.title} — project hero`,
  };
  const backgroundImage = images[1];
  const challengeImage = images[2];
  const outcomesImage = images[3];
  const galleryImages = images.slice(4);

  const stats = resolveCaseStudyStats(study);
  const scopeItems = resolveCaseStudyScope(study);
  const related = getRelatedProjectCaseStudies(study.slug, 3);

  const backgroundParagraphs = [...study.background, ...study.objective];
  const challengeMode =
    study.transportModes.find((mode) => mode.challenges.length > 0) ??
    study.transportModes[0];
  const approachModes = study.transportModes.filter((mode) => {
    if (mode === challengeMode && mode.challenges.length > 0) {
      // Keep approach/execution content for the same mode if present
      return mode.activities.length > 0 || mode.execution.length > 0;
    }
    return (
      mode.activities.length > 0 ||
      mode.execution.length > 0 ||
      (!mode.challenges.length && Boolean(mode.summary))
    );
  });

  const locationBadge =
    study.locationBadge ||
    study.location.split(/[→,]/)[0]?.trim() ||
    study.location;

  return (
    <main className="min-h-screen bg-[#0A0F1C] text-[#E8ECF4]">
      <ReadingProgress />

      <CaseHero study={study} heroImage={heroImage} stats={stats} />

      <SplitSection
        id="project-background"
        eyebrow="Overview"
        heading="PROJECT BACKGROUND"
        paragraphs={backgroundParagraphs}
        image={backgroundImage}
        badge={locationBadge}
      />

      <ScopeGrid items={scopeItems} />

      {challengeMode && challengeMode.challenges.length > 0 && (
        <ChallengeList
          phaseLabel="Phase 01"
          title={
            /challenge/i.test(challengeMode.title)
              ? challengeMode.title
              : 'The Challenge'
          }
          summary={challengeMode.summary}
          challenges={challengeMode.challenges}
          image={challengeImage}
        />
      )}

      {approachModes.map((mode, index) => (
        <ApproachSection
          key={`${mode.title}-${index}`}
          mode={{
            ...mode,
            // Avoid repeating challenge checklist in approach cards
            challenges: [],
          }}
          phaseIndex={challengeMode?.challenges.length ? index + 1 : index}
        />
      ))}

      <OutcomesBento
        heading={study.outcomesHeading ?? 'KEY OUTCOMES'}
        outcomes={study.keyOutcomes}
        image={outcomesImage}
      />

      <Gallery images={galleryImages} />

      <ConclusionCard paragraphs={study.conclusion} />

      <CtaBanner />

      <RelatedProjects studies={related} />

      {/* Spacer so floating phone CTA doesn't cover related/footer on mobile */}
      <div className="h-8 md:h-0" aria-hidden />
    </main>
  );
}
