"use client";

import { FormEvent, useState } from "react";

import { SERVICES } from "@/lib/content";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fieldClassName =
  "h-10 rounded-md border-slate-700 bg-slate-950/80 text-white placeholder:text-slate-400 focus-visible:border-slate-500 focus-visible:ring-white/20";

type ContactFormProps = {
  defaultIntent?: string;
  defaultService?: string;
};

export function ContactForm({ defaultIntent, defaultService }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitted");
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-200" htmlFor="name">
            Name
          </label>
          <Input id="name" name="name" placeholder="Your full name" required className={fieldClassName} />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-200" htmlFor="phone">
            Phone
          </label>
          <Input id="phone" name="phone" placeholder="(###) ###-####" required className={fieldClassName} />
        </div>
      </div>

      <div className="grid gap-2 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-200" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@email.com"
            required
            className={fieldClassName}
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-200" htmlFor="intent">
            I&apos;d like to...
          </label>
          <select
            id="intent"
            name="intent"
            required
            className="h-10 rounded-md border border-slate-700 bg-slate-950/80 px-3 text-sm text-white outline-none focus:border-slate-500 focus:ring-2 focus:ring-white/20"
            defaultValue={defaultIntent ?? ""}
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="book-consultation">Book Consultation</option>
            <option value="learn-more-about">Learn More About</option>
          </select>
        </div>
      </div>

      <div className="grid gap-2 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-200" htmlFor="service">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            required
            className="h-10 rounded-md border border-slate-700 bg-slate-950/80 px-3 text-sm text-white outline-none focus:border-slate-500 focus:ring-2 focus:ring-white/20"
            defaultValue={defaultService ?? ""}
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium text-slate-200" htmlFor="skill-level">
            Skill Level
          </label>
          <Input
            id="skill-level"
            name="skillLevel"
            placeholder="Beginner, intermediate, advanced"
            required
            className={fieldClassName}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium text-slate-200" htmlFor="referral-source">
          How did you hear about us?
        </label>
        <Input
          id="referral-source"
          name="referralSource"
          placeholder="Coach referral, social media, friend, etc."
          required
          className={fieldClassName}
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium text-slate-200" htmlFor="message">
          Message (optional)
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Share your goals, timeline, and anything else we should know."
          rows={5}
          className="rounded-md border-slate-700 bg-slate-950/80 text-white placeholder:text-slate-400 focus-visible:border-slate-500 focus-visible:ring-white/20"
        />
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <p className="max-w-sm text-xs text-slate-400">
          We review each inquiry and follow up with next steps based on your selected path.
        </p>

        <div className="flex flex-col items-start gap-2">
          <Button type="submit" className="rounded-full bg-white text-black hover:bg-slate-200">
            Submit Inquiry
          </Button>
          <p className="text-xs text-slate-300">10 spots left for February</p>
          <p className="text-xs text-slate-400">Capacity is limited to protect coaching quality.</p>
        </div>
      </div>

      {status === "submitted" ? (
        <p className="text-sm text-emerald-300">Thanks. Your inquiry has been received.</p>
      ) : null}
    </form>
  );
}
