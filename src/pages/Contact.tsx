import { FormEvent, useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout, PageHero } from "@/components/site/Layout";
import { CONTACT, SERVICES, whatsappLink } from "@/data/site";

const fields = [
  { k: "name", l: "Full Name", req: true },
  { k: "company", l: "Company Name" },
  { k: "email", l: "Email Address", type: "email" },
  { k: "mobile", l: "Mobile Number", type: "tel", req: true },
  { k: "city", l: "City / State" },
  { k: "employees", l: "Number of Employees" },
];

const Contact = () => {
  const [form, setForm] = useState<Record<string, string>>({ service: SERVICES[0].title });
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v.slice(0, 500) }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      "New enquiry from website", "",
      ...fields.map((f) => `${f.l}: ${form[f.k] || "-"}`),
      `Service Required: ${form.service}`,
      `Message: ${form.message || "-"}`,
    ];
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
  };

  return (
    <Layout>
      <PageHero eyebrow="Contact Us" title="Let's discuss your HR requirements" text="Get professional assistance with payroll, compliance and workforce management." />
      <section className="container grid gap-10 py-20 lg:grid-cols-[1fr_1.5fr]">
        <div className="space-y-4">
          {[
            { i: Phone, t: "Call us", v: CONTACT.phone, h: `tel:+${CONTACT.phoneRaw}` },
            { i: MessageCircle, t: "WhatsApp", v: "Chat instantly", h: whatsappLink() },
            { i: Mail, t: "Email", v: CONTACT.email, h: `mailto:${CONTACT.email}` },
            { i: MapPin, t: "Office", v: CONTACT.address },
          ].map((c) => {
            const body = (<><span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent"><c.i className="h-5 w-5" /></span><div><p className="text-sm text-muted-foreground">{c.t}</p><p className="font-bold text-primary">{c.v}</p></div></>);
            return c.h
              ? <a key={c.t} href={c.h} target={c.h.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-card transition-colors hover:border-accent">{body}</a>
              : <div key={c.t} className="flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-card">{body}</div>;
          })}
          <p className="text-sm text-muted-foreground">Services across India.</p>
        </div>
        <form onSubmit={submit} className="rounded-3xl border bg-card p-7 shadow-elevated md:p-10">
          <h2 className="text-2xl font-semibold text-primary">Website enquiry form</h2>
          <p className="mt-1 text-sm text-muted-foreground">Your details open in WhatsApp so our team can respond right away.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {fields.map((f) => (
              <div key={f.k} className="space-y-1.5"><Label htmlFor={f.k}>{f.l}{f.req && " *"}</Label><Input id={f.k} type={f.type || "text"} required={f.req} value={form[f.k] || ""} onChange={(e) => set(f.k, e.target.value)} /></div>
            ))}
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="service">Service Required</Label>
              <select id="service" value={form.service} onChange={(e) => set("service", e.target.value)} className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                {SERVICES.map((s) => <option key={s.id}>{s.title}</option>)}<option>Labour Codes Review</option><option>Other</option>
              </select>
            </div>
            <div className="space-y-1.5 sm:col-span-2"><Label htmlFor="message">Message</Label><Textarea id="message" rows={4} value={form.message || ""} onChange={(e) => set("message", e.target.value)} /></div>
          </div>
          <Button type="submit" size="lg" className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90"><MessageCircle className="mr-2 h-4 w-4" />Send Enquiry via WhatsApp</Button>
        </form>
      </section>
    </Layout>
  );
};
export default Contact;
