"use client";

import { useFormState } from "react-dom";
import { sendMessage, State as ContactState } from "@/app/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/components/submit-button";

export default function Contact() {
  const initialState: ContactState = { message: null, errors: {} };
  const [state, dispatch] = useFormState<ContactState, FormData>(sendMessage, initialState);

  return (
    <div className="page-container section">
      <div className="mx-auto max-w-3xl">
        <Card className="card-elevated card-hover anim-rise">
          <CardHeader className="text-center anim-fade-up">
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Have a project in mind or just want to say hi? I&apos;d love to hear from you.
            </CardDescription>
          </CardHeader>
          <CardContent className="anim-fade-up anim-delay-1">
            {state.message && !state.errors ? (
               <div className="text-center p-8 bg-primary/10 rounded-lg">
                  <p className="text-lg font-semibold text-primary">{state.message}</p>
               </div>
            ) : (
              <form action={dispatch} className="stack-md">
                <div className="stack-sm">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" required />
                  {state.errors?.name && <p className="text-destructive text-sm mt-1">{state.errors.name[0]}</p>}
                </div>
                <div className="stack-sm">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                  {state.errors?.email && <p className="text-destructive text-sm mt-1">{state.errors.email[0]}</p>}
                </div>
                <div className="stack-sm">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." required rows={5} />
                  {state.errors?.message && <p className="text-destructive text-sm mt-1">{state.errors.message[0]}</p>}
                </div>
                <SubmitButton />
                {state.message && state.errors && <p className="text-destructive text-sm mt-2">{state.message}</p>}
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
