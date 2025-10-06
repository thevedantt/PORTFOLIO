"use client";

import { useFormState } from "react-dom";
import { sendMessage } from "@/app/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/components/submit-button";

export default function Contact() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(sendMessage, initialState);

  return (
    <section id="contact" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</CardTitle>
              <CardDescription className="md:text-xl">
                Have a project in mind or just want to say hi? I'd love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {state.message && !state.errors ? (
                 <div className="text-center p-8 bg-primary/10 rounded-lg">
                    <p className="text-lg font-semibold text-primary">{state.message}</p>
                 </div>
              ) : (
                <form action={dispatch} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your Name" required />
                    {state.errors?.name && <p className="text-destructive text-sm mt-1">{state.errors.name[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                    {state.errors?.email && <p className="text-destructive text-sm mt-1">{state.errors.email[0]}</p>}
                  </div>
                  <div className="space-y-2">
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
    </section>
  );
}
