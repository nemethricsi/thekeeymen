'use client';

import { cn } from '@/lib/utils';
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
      <div className="flex flex-col gap-1">
        <textarea
          name="message"
          rows={5}
          required
          className={cn(
            'w-full resize-none border border-[#fefefe]/50 p-4 text-base font-medium focus:bg-[#fefefe]/5 focus:outline-2 focus:outline-offset-3 focus:outline-[#fefefe]',
            (state.errors?.getFieldErrors('message').length || 0 > 0) &&
              'outline-2 outline-offset-2 outline-rose-300',
          )}
          placeholder="Type your message here..."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="w-fit bg-rose-100 px-2 py-1 text-sm text-rose-500"
        />
      </div>
      <div className="flex flex-col gap-2">
        <input
          name="email"
          type="email"
          required
          className={cn(
            'w-full border border-[#fefefe]/50 p-4 text-base font-medium outline-[#fefefe] focus:bg-[#fefefe]/5 focus:outline-2 focus:outline-offset-3',
            (state.errors?.getFieldErrors('email').length || 0 > 0) &&
              'outline-2 outline-offset-2 outline-rose-300',
          )}
          placeholder="Email"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="w-fit bg-rose-100 px-2 py-1 text-sm text-rose-500"
        />
      </div>
      <div className="flex flex-col gap-1">
        <input
          name="phone"
          type="tel"
          className={cn(
            'w-full border border-[#fefefe]/50 p-4 text-base font-medium outline-[#fefefe] focus:bg-[#fefefe]/5 focus:outline-2 focus:outline-offset-3',
            (state.errors?.getFieldErrors('phone').length || 0 > 0) &&
              'outline-2 outline-offset-2 outline-rose-300',
          )}
          placeholder="Phone number (optional)"
        />
        <ValidationError
          prefix="Phone"
          field="phone"
          errors={state.errors}
          className="w-fit bg-rose-100 px-2 py-1 text-sm text-rose-500"
        />
      </div>
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
            type="button"
            className="cursor-pointer rounded-full p-1 transition-colors hover:bg-lime-200"
            onClick={reset}
          >
            <XIcon />
          </button>
        </div>
      )}
      {state.errors != null && (
        <div className="flex items-center justify-between border border-rose-300 bg-rose-100 px-2 py-1 font-medium text-rose-700 select-none">
          <span>Something went wrong. Please try again.</span>
          <button
            type="button"
            className="cursor-pointer rounded-full p-1 transition-colors hover:bg-rose-200"
            onClick={reset}
          >
            <XIcon />
          </button>
        </div>
      )}
    </form>
  );
};
