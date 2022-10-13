import React from 'react'
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input id="email" type="email" name="email" placeholder="Email Address" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button id="submit" type="submit" disabled={state.submitting}>
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
