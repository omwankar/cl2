// Example: Tracking a button click event
// Copy this pattern into your components where you want to track events

'use client';

import { event } from '@/lib/gtag';

export default function ExampleButton() {
  const handleButtonClick = () => {
    // Track the button click event
    event({
      action: 'click',
      category: 'button',
      label: 'contact_cta',
      value: 1,
    });

    // Your button logic here
    console.log('Button clicked!');
  };

  return (
    <button onClick={handleButtonClick}>
      Contact Us
    </button>
  );
}

// Example: Tracking form submission
export function ContactForm() {
  const handleSubmit = () => {
    event({
      action: 'submit',
      category: 'form',
      label: 'contact_form',
    });

    // Your form submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit">Submit</button>
    </form>
  );
}

// Example: Tracking outbound link clicks
export function OutboundLink({ href, children }: { href: string; children: React.ReactNode }) {
  const handleClick = () => {
    event({
      action: 'click',
      category: 'outbound_link',
      label: href,
    });
  };

  return (
    <a href={href} onClick={handleClick} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
