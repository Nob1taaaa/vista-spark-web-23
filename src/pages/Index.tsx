import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Wallet, ShieldCheck, Users, FileText, CalendarClock, Scale, Factory, Laptop, HeartPulse, GraduationCap, Truck, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/site/Layout";
import { CALENDAR, COMPLIANCE_CATALOGUE, LABOUR_CODES, SERVICES, whatsappLink } from "@/data/site";

const TABS = [
  { id: "social", label: "Social Security", items: ["PF / EPFO", "ESI / ESIC", "Gratuity", "Maternity Benefits"] },
  { id: "state", label: "State Levies", items: ["Professional Tax (PT)", "Labour Welfare Fund (LWF)", "Shops & Establishments", "Contract Labour"] },
  { id: "wages", label: "Wages & Tax", items: ["Minimum Wages & VDA", "Statutory Bonus", "TDS on Salary", "Full & Final Settlement"] },
];

const SERVICE_ICONS = [Wallet, ShieldCheck, FileText, Users];

const INDUSTRY_CARDS = [
  { icon: Factory, t: "Manufacturing", d: "Contract labour, overtime and factory registers." },
  { icon: Laptop, t: "IT & Startups", d: "CTC structuring, fast onboarding and TDS." },
  { icon: HeartPulse, t: "Healthcare", d: "Shift-based payroll and ESIC coverage." },
  { icon: GraduationCap, t: "Education", d: "Faculty payroll, gratuity and PF for institutions." },
  { icon: Truck, t: "Logistics", d: "Multi-state PT, LWF and field workforce." },
  { icon: Store, t: "Retail & Hospitality", d: "Shops & Establishments and minimum wages." },
];

const STEPS = [
  { t: "Discovery & audit", d: "We review your payroll, registers and filings to find every gap." },
  { t: "Realign structure", d: "Salary structures and policies aligned to the Labour Codes." },
  { t: "Managed monthly run", d: "Payroll, challans and returns handled on schedule, every month." },
];

const Chip = ({ tone = "slate", children }: { tone?: "success" | "warning" | "slate"; children: React.ReactNode }) => {
  const c = tone === "success" ? "bg-success-soft text-success" : tone === "warning" ? "bg-warning-soft text-warning" : "bg-secondary text-secondary-foreground";
  return <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${c}`}>{children}</span>;
};

const Console = () => (
  <div className="reveal rounded-3xl border bg-card p-3 shadow-elevated" style={{ animationDelay: ".15s" }}>
    <div className="flex items-center justify-between px-3 py-2">
      <p className="text-sm font-semibold text-primary">Compliance overview</p>
      <Chip tone="success"><span className="pulse-dot h-1.5 w-1.5 rounded-full bg-current" />Active</Chip>
    </div>
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-2xl bg-secondary p-5 sm:col-span-2">
        <div className="flex items-center justify-between"><p className="text-xs font-semibold text-muted-foreground">Monthly payroll run</p><Chip tone="success">Processed</Chip></div>
        <p className="mt-3 font-display text-3xl font-bold text-primary">100%</p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border"><div className="bar-grow h-full rounded-full bg-accent" /></div>
        <p className="mt-2 text-xs text-muted-foreground">Payslips, registers and statutory deductions</p>
      </div>
      <div className="rounded-2xl border p-5">
        <p className="text-xs font-semibold text-muted-foreground">PF ECR & ESIC</p>
        <p className="mt-2 font-display text-lg font-bold text-primary">Reconciled</p>
        <div className="mt-3"><Chip tone="warning"><CalendarClock className="h-3 w-3" />Due 15th</Chip></div>
      </div>
      <div className="rounded-2xl border p-5">
        <p className="text-xs font-semibold text-muted-foreground">Labour laws covered</p>
        <p className="mt-2 font-display text-lg font-bold text-primary">29 → 4 Codes</p>
        <div className="mt-3"><Chip>Code on Wages</Chip></div>
      </div>
      <div className="flex items-center gap-3 rounded-2xl bg-accent-soft p-4 sm:col-span-2">
        <Scale className="h-5 w-5 shrink-0 text-accent" />
        <p className="text-sm text-accent"><b>50% wage rule review</b> — salary structure check completed</p>
      </div>
    </div>
  </div>
);

const Index = () => {
  const [tab, setTab] = useState(TABS[0].id);
  const active = TABS.find((t) => t.id === tab)!;
  const items = COMPLIANCE_CATALOGUE.filter((c) => active.items.includes(c.t));

  return (
    <Layout>
      {/* Hero */}
      <section className="container grid gap-14 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <div className="reveal"><Chip>Payroll · Compliance · Recruitment</Chip></div>
          <h1 className="reveal mt-6 text-4xl font-bold leading-[1.08] text-primary md:text-6xl">HR and compliance, handled with precision.</h1>
          <p className="reveal mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">TruVisory runs payroll, statutory filings and hiring for businesses across India — so every salary is right and every due date is met.</p>
          <div className="reveal mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7"><a href={whatsappLink()} target="_blank" rel="noreferrer">Book a consultation</a></Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7"><Link to="/services">Explore services <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
          <div className="reveal mt-12 grid max-w-md grid-cols-3 gap-6 border-t pt-8">
            {[["4", "Core services"], ["14+", "Compliance areas"], ["Pan-India", "State coverage"]].map(([n, l]) => (
              <div key={l}><p className="font-display text-2xl font-bold text-primary">{n}</p><p className="mt-1 text-xs text-muted-foreground">{l}</p></div>
            ))}
          </div>
        </div>
        <Console />
      </section>

      {/* Services bento */}
      <section className="bg-card py-24 md:py-32">
        <div className="container">
          <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-xl text-3xl font-bold text-primary md:text-5xl">One partner for your entire workforce.</h2>
            <p className="max-w-sm text-muted-foreground">Payroll and compliance at the core, with advisory and staffing around it.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[i];
              const big = i === 0 || i === 3;
              return (
                <Link key={s.id} to={`/services#${s.id}`} className={`lift group flex flex-col rounded-3xl border bg-background p-8 ${big ? "md:col-span-2" : ""}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent"><Icon className="h-5 w-5" /></span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  <h3 className="mt-8 text-xl font-bold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{s.items.slice(0, big ? 5 : 3).map((t) => <Chip key={t}>{t}</Chip>)}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance explorer */}
      <section className="container py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">Every obligation, tracked.</h2>
            <p className="mt-5 max-w-md text-muted-foreground">Central and state compliance, organised the way your team actually works.</p>
            <div className="mt-8 inline-flex flex-wrap gap-1 rounded-full border bg-card p-1">
              {TABS.map((t) => (
                <button key={t.id} onClick={() => setTab(t.id)} className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${tab === t.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"}`}>{t.label}</button>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border bg-card p-6">
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-primary"><CalendarClock className="h-4 w-4 text-accent" />Monthly due dates</p>
              <ul className="space-y-3">{CALENDAR.slice(0, 3).map((c) => <li key={c.t} className="flex items-start gap-3 text-sm"><Chip tone="warning">{c.day}</Chip><span className="text-muted-foreground">{c.t}</span></li>)}</ul>
            </div>
          </div>
          <div key={tab} className="grid content-start gap-4 sm:grid-cols-2">
            {items.map((c, i) => (
              <div key={c.t} className="reveal lift rounded-2xl border bg-card p-6" style={{ animationDelay: `${i * 0.06}s` }}>
                <Chip tone="success">Managed</Chip>
                <h3 className="mt-4 text-lg font-bold text-primary">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labour codes */}
      <section className="bg-hero text-primary-foreground">
        <div className="container py-24 md:py-32">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-highlight">In effect from 21 November 2025</p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">India's four new Labour Codes.</h2>
              <p className="mt-5 text-primary-foreground/70">29 central labour laws consolidated into four Codes. We align your salary structures, policies and records.</p>
            </div>
            <Button asChild variant="secondary" className="rounded-full"><Link to="/labour-codes">Understand the Codes <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {LABOUR_CODES.map((c, i) => (
              <Link to={`/labour-codes#${c.id}`} key={c.id} className="group rounded-2xl border border-primary-foreground/10 p-6 transition-colors hover:bg-primary-foreground/5">
                <p className="text-xs font-semibold text-primary-foreground/50">Code {i + 1} · {c.year}</p>
                <h3 className="mt-3 text-lg font-bold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/65">{c.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container py-24 md:py-32">
        <h2 className="max-w-xl text-3xl font-bold text-primary md:text-5xl">How we work with you.</h2>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.t} className="relative rounded-3xl border bg-card p-8">
              <span className="font-display text-sm font-bold text-accent">Step {i + 1}</span>
              <h3 className="mt-4 text-xl font-bold text-primary">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-card py-24 md:py-32">
        <div className="container">
          <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-xl text-3xl font-bold text-primary md:text-5xl">Built for the way your industry works.</h2>
            <Button asChild variant="outline" className="rounded-full"><Link to="/industries">All industries <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_CARDS.map((x) => (
              <div key={x.t} className="lift flex gap-4 rounded-2xl border bg-background p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent"><x.icon className="h-5 w-5" /></span>
                <div><h3 className="font-bold text-primary">{x.t}</h3><p className="mt-1 text-sm text-muted-foreground">{x.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24">
        <div className="rounded-[2rem] bg-primary px-8 py-14 text-center text-primary-foreground md:px-16 md:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold md:text-5xl">Let's make your next payroll run effortless.</h2>
          <p className="mx-auto mt-5 max-w-lg text-primary-foreground/70">Talk to an HR professional about payroll, compliance or hiring.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary" className="rounded-full px-7"><a href={whatsappLink()} target="_blank" rel="noreferrer">Chat on WhatsApp</a></Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary-foreground/25 bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/contact">Send an enquiry</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
