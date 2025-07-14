'use client';

import { useForm, ValidationError } from '@formspree/react';
import { LoaderIcon, SendIcon, XIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, handleSubmit, reset] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID!,
    {
      data: {
        subject: '🙀 Someone messaged The Keeymen!',
      },
    },
  );

  useEffect(() => {
    if (state.succeeded && !state.submitting && state.errors == null) {
      formRef.current?.reset();
    }
  }, [state.submitting, state.succeeded, state.errors]);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    reset();
    handleSubmit(event);
  };

  return (
    <form
      ref={formRef}
      onSubmit={submitForm}
      className="flex w-full flex-col gap-3 sm:mx-auto sm:max-w-lg"
    >
      <textarea
        name="message"
        rows={5}
        required
        className="w-full resize-none border border-[#fefefe]/50 p-4 text-base font-medium focus:bg-[#fefefe]/5 focus:outline-2 focus:outline-offset-3 focus:outline-[#fefefe]"
        placeholder="Type your message here..."
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <input
        name="email"
        type="email"
        required
        className="w-full border border-[#fefefe]/50 p-4 text-base font-medium outline-[#fefefe] focus:bg-[#fefefe]/5 focus:outline-2 focus:outline-offset-3"
        placeholder="Email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <input
        name="phone"
        type="tel"
        className="w-full border border-[#fefefe]/50 p-4 text-base font-medium outline-[#fefefe] focus:bg-[#fefefe]/5 focus:outline-2 focus:outline-offset-3"
        placeholder="Phone number (optional)"
      />
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="group flex w-full items-center justify-center gap-2 bg-[#fefefe] px-4 py-2 font-bold text-[#8e43a5] uppercase transition-colors hover:cursor-pointer focus:outline-2 focus:outline-offset-3 focus:outline-[#fefefe] active:bg-[#fefefe]/75 active:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[#fefefe]"
      >
        {state.submitting && <LoaderIcon className="animate-spin" />}
        <span>{state.submitting ? 'Sending...' : 'Send message'}</span>
        {!state.submitting && (
          <SendIcon className="transition-transform group-hover:rotate-45 group-focus:rotate-45 group-active:translate-x-2" />
        )}
      </button>
      {state.succeeded && (
        <div className="flex items-center justify-between border border-lime-600 bg-lime-100 px-2 py-1 font-medium text-lime-700 select-none">
          <span>Message sent successfully!</span>
          <button
            className="cursor-pointer rounded-full p-1 hover:bg-lime-200"
            onClick={reset}
          >
            <XIcon />
          </button>
        </div>
      )}
      {state.errors != null && (
        <p className="border border-rose-300 bg-rose-100 px-2 py-1 font-medium text-rose-700 select-none">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
};
