'use client';

import { cn } from '@/lib/utils';
import { useForm, ValidationError } from '@formspree/react';
import { LoaderIcon, SendIcon, XIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface ContactFormProps {
  messagePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  submitButtonLabel: string;
  submitButtonSendingLabel: string;
  successMessage: string;
  errorMessage: string;
}

export const ContactFormComponent = ({
  messagePlaceholder,
  emailPlaceholder,
  phonePlaceholder,
  submitButtonLabel,
  submitButtonSendingLabel,
  successMessage,
  errorMessage,
}: ContactFormProps) => {
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
      className="flex w-full flex-col gap-3 lg:mx-auto lg:max-w-lg"
    >
      <div className="flex flex-col gap-1">
        <textarea
          name="message"
          rows={5}
          required
          className={cn(
            'w-full resize-none rounded-lg border border-white/50 p-4 text-lg font-medium focus:bg-white/5 focus:outline-2 focus:outline-offset-3 focus:outline-white',
            (state.errors?.getFieldErrors('message').length || 0 > 0) &&
              'outline-2 outline-offset-2 outline-rose-300',
          )}
          placeholder={messagePlaceholder}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="w-fit rounded-lg bg-rose-100 px-2 py-1 text-sm text-rose-500"
        />
      </div>
      <div className="flex flex-col gap-2">
        <input
          name="email"
          type="email"
          required
          className={cn(
            'w-full rounded-lg border border-white/50 p-4 text-lg font-medium outline-white focus:bg-white/5 focus:outline-2 focus:outline-offset-3',
            (state.errors?.getFieldErrors('email').length || 0 > 0) &&
              'outline-2 outline-offset-2 outline-rose-300',
          )}
          placeholder={emailPlaceholder}
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="w-fit rounded-lg bg-rose-100 px-2 py-1 text-sm text-rose-500"
        />
      </div>
      <div className="flex flex-col gap-1">
        <input
          name="phone"
          type="tel"
          className={cn(
            'w-full rounded-lg border border-white/50 p-4 text-lg font-medium outline-white focus:bg-white/5 focus:outline-2 focus:outline-offset-3',
            (state.errors?.getFieldErrors('phone').length || 0 > 0) &&
              'outline-2 outline-offset-2 outline-rose-300',
          )}
          placeholder={phonePlaceholder}
        />
        <ValidationError
          prefix="Phone"
          field="phone"
          errors={state.errors}
          className="w-fit rounded-lg bg-rose-100 px-2 py-1 text-sm text-rose-500"
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="group text-tk-vviolet-600 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 font-bold uppercase transition-colors focus:outline-2 focus:outline-offset-3 focus:outline-white active:bg-white/75 active:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-white"
      >
        {state.submitting && <LoaderIcon className="animate-spin" />}
        <span>
          {state.submitting ? submitButtonSendingLabel : submitButtonLabel}
        </span>
        {!state.submitting && (
          <SendIcon className="transition-transform group-hover:rotate-45 group-focus:rotate-45 group-active:translate-x-2" />
        )}
      </button>
      {state.succeeded && (
        <div className="flex items-center justify-between rounded-lg border border-lime-600 bg-lime-100 px-2 py-1 font-medium text-lime-700 select-none">
          <span>{successMessage}</span>
          <button
            type="button"
            className="rounded-full p-1 transition-colors hover:bg-lime-200"
            onClick={reset}
          >
            <XIcon />
          </button>
        </div>
      )}
      {state.errors != null && (
        <div className="flex items-center justify-between rounded-lg border border-rose-300 bg-rose-100 px-2 py-1 font-medium text-rose-700 select-none">
          <span>{errorMessage}</span>
          <button
            type="button"
            className="rounded-full p-1 transition-colors hover:bg-rose-200"
            onClick={reset}
          >
            <XIcon />
          </button>
        </div>
      )}
    </form>
  );
};
