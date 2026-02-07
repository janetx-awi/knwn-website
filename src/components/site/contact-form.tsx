"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: Wire to email automation / CRM + Upper Hand consultation flow
        alert("Thanks! We will be in touch shortly.");
      }}
    >
      <div className="grid gap-2 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm text-white/80" htmlFor="name">
            Name
          </label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-white/80" htmlFor="phone">
            Phone
          </label>
          <Input id="phone" name="phone" placeholder="(###) ###-####" />
        </div>
      </div>

      <div className="grid gap-2 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm text-white/80" htmlFor="email">
            Email
          </label>
          <Input id="email" name="email" type="email" placeholder="you@email.com" required />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-white/80" htmlFor="service">
            Interested In
          </label>
          <Input id="service" name="service" placeholder="e.g., 1-on-1 coaching" />
        </div>
      </div>

      <div className="grid gap-2">
        <label className="text-sm text-white/80" htmlFor="message">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us your goals, skill level, and timeline."
          rows={5}
        />
      </div>

      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-white/50">
          Booking integration (Upper Hand) will be added once the organization URL is confirmed.
        </p>
        <Button type="submit" className="rounded-full">
          Request Consultation
        </Button>
      </div>
    </form>
  );
}
