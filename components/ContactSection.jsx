"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Business Websites",
    message: ""
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Static site: just simulate send
    await new Promise((r) => setTimeout(r, 700));

    toast.success("Message sent! 🚀", {
      description: "We’ll get back to you soon."
    });

    setForm({ name: "", email: "", service: "Business Websites", message: "" });
    setLoading(false);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something that looks expensive"
      subtitle="Tell me what you need — I’ll reply with a plan, timeline, and next steps."
    >
      <div className="grid gap-6 md:grid-cols-5">
        <Card className="md:col-span-3 rounded-3xl shadow-glow">
          <CardHeader className="p-6 md:p-7">
            <CardTitle className="text-2xl">Contact Form</CardTitle>
            <CardDescription>
              This is frontend-only for now. Later we can connect it to Supabase / email automation.
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6 pt-0 md:p-7 md:pt-0">
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="you@email.com"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="grid gap-2">
                <Label>Service</Label>
                <Select
                  value={form.service}
                  onValueChange={(v) => setForm({ ...form, service: v })}
                >
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Business Websites">Static Websites</SelectItem>
                    <SelectItem value="Landing Pages">Dynamic Web Applications</SelectItem>
                    <SelectItem value="Web Apps">Website Redesign</SelectItem>
                    <SelectItem value="Redesign">Search Engine Optimization (SEO)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="min-h-[130px] rounded-xl"
                />
              </div>

              <Button type="submit" disabled={loading} className="rounded-xl">
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="md:col-span-2 space-y-6">
          <Card className="rounded-3xl border bg-white/60 backdrop-blur shadow-glow">
            <CardHeader className="p-6 md:p-7">
              <CardTitle className="text-xl">Quick Contact</CardTitle>
              <CardDescription>Drop your details and we’ll move fast.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 md:p-7 md:pt-0 space-y-3">
              <div className="flex items-center gap-3 rounded-2xl border bg-white/70 p-3">
                <Mail className="h-5 w-5 text-primary" />
                <div className="text-sm">
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground">sales@zaeemstack.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border bg-white/70 p-3">
                <Phone className="h-5 w-5 text-primary" />
                <div className="text-sm">
                  <div className="font-semibold">Phone</div>
                  <div className="text-muted-foreground">+966 53 182 6230</div>
                </div>
              </div>
              {/* <div className="rounded-2xl border bg-gradient-to-r from-indigo-500/15 via-emerald-500/10 to-pink-500/10 p-4">
                <div className="text-sm font-semibold">Tip</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Want it to feel *super* premium? Next step is adding real portfolio screenshots + testimonials.
                </div>
              </div> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}