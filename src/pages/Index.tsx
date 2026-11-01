import { Link } from "react-router-dom";
import { ArrowRight, Wallet, ShieldCheck, Users, CheckCircle2, Scale, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout, SectionHead } from "@/components/site/Layout";
import { COMPLIANCE_CATALOGUE, INDUSTRIES, LABOUR_CODES, SERVICES, WHY, whatsappLink } from "@/data/site";

const pillars = [
  { no: "01", t: "Payroll", d: "Monthly processing, CTC design, payslips and F&F.", icon: Wallet },
  { no: "02", t: "Compliance", d: "PF, ESI, PT, LWF, bonus, gratuity and Labour Codes.", icon: ShieldCheck },
  { no: "03", t: "Staffing", d: "Permanent, contract and bulk hiring across India.", icon: Users },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden bg-hero text-primary-foreground">
      <div className="grid-pattern absolute inset-0" />
      <div className="container relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="reveal mb-5 inline-block rounded-full border border-primary-foreground/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-highlight">Your Complete HR Partner</p>
          <h1 className="reveal text-4xl font-semibold leading-[1.05] md:text-7xl">Complete HR & Workforce <span className="text-accent-gradient">Solutions</span></h1>
          <p className="reveal mt-4 font-display text-xl text-primary-foreground/85 md:text-2xl">Payroll. Compliance. Recruitment.</p>
          <p className="reveal mt-5 max-w-xl text-lg text-primary-foreground/70">Simplifying payroll, labour law compliance and workforce management for businesses across India.</p>
          <div className="reveal mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/services">Explore Our Services <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href={whatsappLink()} target="_blank" rel="noreferrer">Get a Consultation</a></Button>
          </div>
        </div>
        <div className="grid gap-4">
          {pillars.map((p, i) => (
            <div key={p.no} className="reveal flex items-center gap-5 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-5 backdrop-blur" style={{ animationDelay: `${0.15 * i}s` }}>
              <span className="font-display text-4xl font-semibold text-highlight">{p.no}</span>
              <div className="flex-1"><h3 className="text-xl font-semibold">{p.t}</h3><p className="text-sm text-primary-foreground/70">{p.d}</p></div>
              <p.icon className="h-7 w-7 text-primary-foreground/50" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="container py-24">
      <SectionHead eyebrow="What we do" title="Four services. One accountable partner." text="Payroll and compliance are our core — with HR advisory and staffing to support your entire workforce lifecycle." />
      <div className="grid gap-6 md:grid-cols-2">
        {SERVICES.map((s) => (
          <Link key={s.id} to={`/services#${s.id}`} className="group rounded-2xl border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
            <div className="flex items-start justify-between"><span className="font-display text-5xl font-semibold text-accent/25">{s.no}</span><ArrowRight className="h-5 w-5 text-accent transition-transform group-hover:translate-x-1" /></div>
            <h3 className="mt-4 text-2xl font-semibold text-primary">{s.title}</h3>
            <p className="mt-2 text-muted-foreground">{s.short}</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">{s.items.slice(0, 4).map((i) => <li key={i} className="flex gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{i}</li>)}</ul>
          </Link>
        ))}
      </div>
    </section>

    {/* Labour codes */}
    <section className="bg-primary text-primary-foreground">
      <div className="container py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-highlight">In effect from 21 November 2025</p>
            <h2 className="text-3xl font-semibold md:text-5xl">India's Four New Labour Codes</h2>
            <p className="mt-4 text-lg text-primary-foreground/70">29 central labour laws consolidated into four Codes. We help employers align salary structures, policies and records.</p>
          </div>
          <Button asChild variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/labour-codes">Understand the Codes <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {LABOUR_CODES.map((c, i) => (
            <Link to={`/labour-codes#${c.id}`} key={c.id} className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 transition-colors hover:bg-primary-foreground/10">
              <Scale className="h-6 w-6 text-highlight" />
              <p className="mt-5 text-xs font-bold tracking-widest text-primary-foreground/50">CODE {i + 1} · {c.year}</p>
              <h3 className="mt-1 text-xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm text-primary-foreground/70">{c.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Compliance catalogue */}
    <section className="container py-24">
      <SectionHead eyebrow="Statutory compliance" title="Complete compliance catalogue" text="Central and state-specific obligations, tracked and filed on time." center />
      <div className="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {COMPLIANCE_CATALOGUE.slice(0, 12).map((c, i) => (
          <div key={c.t} className="bg-card p-6 transition-colors hover:bg-accent-soft">
            <span className="text-xs font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-2 font-sans text-base font-bold text-primary">{c.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center"><Button asChild variant="link" className="text-accent"><Link to="/services#compliance">View all compliance services <ArrowRight className="ml-1 h-4 w-4" /></Link></Button></div>
    </section>

    {/* Why */}
    <section className="bg-secondary">
      <div className="container grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr]">
        <SectionHead eyebrow="Why TruVisory" title="Compliance you don't have to worry about." text="End-to-end payroll and compliance support from experienced HR professionals — for startups, SMEs and large organisations." />
        <div className="grid gap-4 sm:grid-cols-2">
          {WHY.map((w) => (
            <div key={w.t} className="rounded-2xl bg-card p-6 shadow-card"><CheckCircle2 className="h-6 w-6 text-accent" /><h3 className="mt-3 font-sans text-lg font-bold text-primary">{w.t}</h3><p className="mt-1 text-sm text-muted-foreground">{w.d}</p></div>
          ))}
        </div>
      </div>
    </section>

    {/* Industries marquee */}
    <section className="overflow-hidden border-y bg-card py-10">
      <div className="marquee flex w-max gap-10">
        {[...INDUSTRIES, ...INDUSTRIES].map((i, k) => (
          <span key={k} className="flex items-center gap-3 whitespace-nowrap font-display text-2xl text-primary/70"><Building2 className="h-5 w-5 text-accent" />{i}</span>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="container py-24">
      <div className="relative overflow-hidden rounded-3xl bg-hero p-10 text-primary-foreground md:p-16">
        <div className="grid-pattern absolute inset-0" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div><h2 className="text-3xl font-semibold md:text-4xl">Let's discuss your HR requirements</h2><p className="mt-3 text-primary-foreground/75">Professional assistance with payroll, compliance and workforce management.</p></div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-highlight text-accent-foreground hover:bg-highlight/90"><a href={whatsappLink()} target="_blank" rel="noreferrer">Chat on WhatsApp</a></Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/contact">Send an Enquiry</Link></Button>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
