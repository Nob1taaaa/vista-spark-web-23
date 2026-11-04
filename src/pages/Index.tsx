import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Wallet, ShieldCheck, Users, FileText, Scale, Check, ChevronDown, CalendarClock, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout, Waves } from "@/components/site/Layout";
import { CALENDAR, FAQS, INDUSTRIES, LABOUR_CODES, SERVICES, whatsappLink } from "@/data/site";

const MODULES = [
  { id: "payroll", icon: Wallet, label: "Payroll", url: "payroll", title: "Payroll that runs right, every month", text: "From attendance inputs to payslips and statutory deductions — processed accurately and on schedule.",
    panel: { head: "March payroll run", badge: "Processed", rows: ["Attendance & LOP locked", "CTC & arrears computed", "PF / ESI / PT deducted", "Payslips released"], done: 4, stats: [["100%", "On-time runs"], ["0", "Calculation errors"]] } },
  { id: "compliance", icon: ShieldCheck, label: "Compliance", url: "compliance", title: "Every statutory obligation, tracked", text: "PF, ESI, PT, LWF, bonus and gratuity — registrations, challans and returns handled before the due date.",
    panel: { head: "Monthly compliance", badge: "On track", rows: ["PF ECR filed", "ESIC challan paid", "PT return submitted", "LWF half-yearly due"], done: 3, stats: [["14+", "Compliance areas"], ["Pan-India", "State coverage"]] } },
  { id: "codes", icon: Scale, label: "Labour Codes", url: "labour-codes", title: "Ready for India's four Labour Codes", text: "We realign salary structures, policies and registers so your business moves to the new Codes with confidence.",
    panel: { head: "Code readiness review", badge: "In review", rows: ["50% wage rule checked", "Policies updated", "Registers digitised", "Gratuity provisions aligned"], done: 2, stats: [["29 → 4", "Laws consolidated"], ["4", "Codes covered"]] } },
  { id: "advisory", icon: FileText, label: "HR Audit", url: "audit", title: "Audits that find gaps before inspectors do", text: "Detailed reviews of records, payroll and filings with a clear action plan for every risk found.",
    panel: { head: "HR compliance audit", badge: "Report ready", rows: ["Registers reviewed", "Payroll sampled", "Gaps prioritised", "Action plan shared"], done: 4, stats: [["360°", "Audit scope"], ["1", "Clear action plan"]] } },
  { id: "staffing", icon: Users, label: "Staffing", url: "staffing", title: "The right people, hired faster", text: "Permanent, contract and bulk hiring with onboarding and compliance handled from day one.",
    panel: { head: "Open positions", badge: "Hiring", rows: ["Role brief finalised", "Candidates screened", "Interviews scheduled", "Offer & onboarding"], done: 2, stats: [["Bulk", "& niche hiring"], ["Day 1", "Compliance ready"]] } },
];

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="grid-pattern absolute inset-0" />
    <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent/[0.06] blur-3xl" />
    <Waves />
    <div className="container relative grid gap-14 pb-36 pt-14 md:pt-24 lg:grid-cols-[1.25fr_1fr] lg:items-center">
      <div>
        <span className="reveal inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />Payroll · Compliance · Recruitment
        </span>
        <h1 className="reveal mt-7 text-[2.6rem] font-bold leading-[1.02] text-primary md:text-7xl" style={{ animationDelay: ".05s" }}>
          Complete HR, payroll & compliance <span className="text-accent">handled for you.</span>
        </h1>
        <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: ".12s" }}>
          From hire to full & final — TruVisory runs payroll, statutory filings and hiring for growing businesses across India.
        </p>
        <p className="reveal mt-5 text-sm font-semibold text-accent" style={{ animationDelay: ".18s" }}>Built for Indian employers · Labour Code ready</p>
        <div className="reveal mt-9 flex flex-wrap gap-3 lg:hidden" style={{ animationDelay: ".22s" }}>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90"><a href={whatsappLink()} target="_blank" rel="noreferrer">Book a free consultation <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
        </div>
      </div>
      <EnquiryCard />
    </div>
  </section>
);

const EnquiryCard = () => {
  const [f, setF] = useState({ name: "", phone: "", size: "", need: "" });
  const ok = f.name.trim() && /^[0-9+\s-]{10,15}$/.test(f.phone.trim()) && f.size;
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ok) return;
    const msg = `Hello TruVisory, I'd like a consultation.\nName: ${f.name}\nPhone: ${f.phone}\nCompany size: ${f.size}${f.need ? `\nNeed: ${f.need}` : ""}`;
    window.open(whatsappLink(msg), "_blank", "noopener");
  };
  const input = "h-11 w-full rounded-lg border bg-secondary/60 px-3.5 text-sm outline-none transition focus:border-accent focus:bg-card focus:ring-4 focus:ring-accent/10";
  return (
    <form onSubmit={submit} className="reveal relative rounded-2xl border bg-card p-7 shadow-elevated md:p-8" style={{ animationDelay: ".2s" }}>
      <h2 className="text-2xl font-bold text-primary">Talk to an HR expert</h2>
      <p className="mt-1.5 text-sm text-muted-foreground">A free walkthrough tailored to your team size and needs.</p>
      <div className="mt-6 space-y-4">
        <label className="block text-sm font-medium">Full name <span className="text-destructive">*</span>
          <input className={`${input} mt-1.5`} placeholder="Your name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} maxLength={80} /></label>
        <label className="block text-sm font-medium">Phone number <span className="text-destructive">*</span>
          <input className={`${input} mt-1.5`} placeholder="+91 98765 43210" inputMode="tel" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} maxLength={15} /></label>
        <div className="grid grid-cols-2 gap-3">
          <label className="block text-sm font-medium">Company size <span className="text-destructive">*</span>
            <select className={`${input} mt-1.5`} value={f.size} onChange={(e) => setF({ ...f, size: e.target.value })}>
              <option value="">Select</option>{["1–50", "51–200", "201–1000", "1000+"].map((s) => <option key={s}>{s}</option>)}
            </select></label>
          <label className="block text-sm font-medium">Looking for
            <select className={`${input} mt-1.5`} value={f.need} onChange={(e) => setF({ ...f, need: e.target.value })}>
              <option value="">Select</option>{["Payroll", "Compliance", "Labour Codes", "HR Audit", "Staffing"].map((s) => <option key={s}>{s}</option>)}
            </select></label>
        </div>
      </div>
      <Button type="submit" disabled={!ok} size="lg" className="mt-6 h-12 w-full bg-accent text-accent-foreground shadow-elevated hover:bg-accent/90">
        Book a free consultation <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground"><Check className="h-3.5 w-3.5" />Opens WhatsApp · No obligation</p>
    </form>
  );
};

const TrustStrip = () => (
  <section className="border-y bg-secondary/60 py-9">
    <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Trusted by employers across industries</p>
    <div className="fade-mask mt-6 overflow-hidden">
      <div className="marquee flex w-max gap-14">
        {[...INDUSTRIES, ...INDUSTRIES].map((x, i) => <span key={i} className="whitespace-nowrap text-base font-semibold text-muted-foreground/80">{x}</span>)}
      </div>
    </div>
  </section>
);

const Platform = () => {
  const [id, setId] = useState(MODULES[0].id);
  const m = MODULES.find((x) => x.id === id)!;
  return (
    <section className="relative overflow-hidden bg-soft py-24 md:py-32">
      <div className="container">
        <div className="on-scroll mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Services</p>
          <h2 className="mt-4 text-4xl font-bold text-primary md:text-6xl">Everything HR. <span className="text-accent">One partner.</span></h2>
          <p className="mt-5 text-lg text-muted-foreground">Every service your HR team needs — deeply connected, carefully managed, easy to work with.</p>
        </div>
        <div className="on-scroll mt-16 grid gap-8 lg:grid-cols-[220px_1fr_280px] lg:items-center">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {MODULES.map((x) => (
              <button key={x.id} onClick={() => setId(x.id)}
                className={`flex shrink-0 items-center gap-2.5 rounded-full border px-5 py-3 text-sm font-semibold transition-all lg:justify-center ${id === x.id ? "border-transparent bg-accent text-accent-foreground shadow-elevated" : "bg-card text-muted-foreground hover:border-accent/30 hover:text-primary"}`}>
                <x.icon className="h-4 w-4" />{x.label}
              </button>
            ))}
            <Link to="/services" className="flex shrink-0 items-center gap-2.5 rounded-full border bg-card px-5 py-3 text-sm font-semibold text-muted-foreground transition hover:text-primary lg:justify-center"><LayoutGrid className="h-4 w-4" />All services</Link>
          </div>

          <div key={id} className="reveal overflow-hidden rounded-2xl border bg-card shadow-elevated">
            <div className="flex items-center gap-2 border-b bg-secondary/60 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" /><span className="h-2.5 w-2.5 rounded-full bg-warning-soft ring-1 ring-border" /><span className="h-2.5 w-2.5 rounded-full bg-success-soft ring-1 ring-border" />
              <span className="ml-3 flex-1 truncate rounded-md bg-card px-3 py-1 text-xs text-muted-foreground">truvisory.in/{m.url}</span>
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-primary">{m.panel.head}</p>
                <span className="rounded-full bg-success-soft px-2.5 py-1 text-xs font-semibold text-success">{m.panel.badge}</span>
              </div>
              <div className="mt-4 rounded-xl border p-4">
                <div className="flex justify-between text-xs text-muted-foreground"><span>Progress</span><span className="font-semibold text-accent">{m.panel.done * 25}%</span></div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary"><div className="bar-grow h-full rounded-full bg-accent" style={{ width: `${m.panel.done * 25}%` }} /></div>
                <ul className="mt-4 space-y-2.5">
                  {m.panel.rows.map((r, i) => (
                    <li key={r} className="flex items-center gap-2.5 text-sm">
                      <span className={`grid h-5 w-5 place-items-center rounded-full ${i < m.panel.done ? "bg-success-soft text-success" : "bg-secondary"}`}>{i < m.panel.done && <Check className="h-3 w-3" />}</span>
                      <span className={i < m.panel.done ? "text-foreground" : "text-muted-foreground"}>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {m.panel.stats.map(([n, l]) => <div key={l} className="rounded-xl border p-4"><p className="font-display text-2xl font-bold text-primary">{n}</p><p className="text-xs text-muted-foreground">{l}</p></div>)}
              </div>
            </div>
          </div>

          <div key={`t-${id}`} className="reveal">
            <h3 className="text-2xl font-bold text-primary md:text-3xl">{m.title}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{m.text}</p>
            <Link to="/services" className="mt-6 inline-flex items-center text-sm font-semibold text-accent hover:underline">Learn more <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pillars = () => (
  <section className="container py-24 md:py-32">
    <div className="on-scroll max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What we do</p>
      <h2 className="mt-4 text-4xl font-bold text-primary md:text-5xl">Four services. One accountable team.</h2>
    </div>
    <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-2 lg:grid-cols-4">
      {SERVICES.map((s, i) => (
        <Link key={s.id} to={`/services#${s.id}`} className="on-scroll group bg-card p-8 transition-colors hover:bg-accent-soft" style={{ transitionDelay: `${i * 80}ms` }}>
          <p className="text-sm font-semibold text-accent">{s.no}</p>
          <h3 className="mt-10 text-xl font-bold text-primary">{s.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
          <ArrowRight className="mt-8 h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent" />
        </Link>
      ))}
    </div>
  </section>
);

const Codes = () => (
  <section className="border-y bg-secondary/60 py-24 md:py-32">
    <div className="container">
      <div className="on-scroll mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Labour Codes</p>
        <h2 className="mt-4 text-4xl font-bold text-primary md:text-5xl">29 laws. Four Codes. Zero confusion.</h2>
        <p className="mt-5 text-muted-foreground">We align your salary structures, policies and records with India's new Labour Codes.</p>
      </div>
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {LABOUR_CODES.map((c, i) => (
          <Link to={`/labour-codes#${c.id}`} key={c.id} className="on-scroll lift rounded-2xl border bg-card p-7" style={{ transitionDelay: `${i * 80}ms` }}>
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-soft font-display font-bold text-accent">{i + 1}</span>
            <h3 className="mt-6 text-lg font-bold text-primary">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
          </Link>
        ))}
      </div>
      <div className="on-scroll mx-auto mt-12 max-w-3xl rounded-2xl border bg-card p-6">
        <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-primary"><CalendarClock className="h-4 w-4 text-accent" />Monthly due dates we manage</p>
        <div className="grid gap-3 sm:grid-cols-3">{CALENDAR.slice(0, 3).map((c) => <div key={c.t} className="rounded-xl bg-secondary/70 p-4"><p className="text-xs font-bold text-warning">{c.day}</p><p className="mt-1 text-sm text-muted-foreground">{c.t}</p></div>)}</div>
      </div>
    </div>
  </section>
);

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <p className="on-scroll text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
        <h2 className="on-scroll mt-4 text-4xl font-bold text-primary md:text-5xl">Frequently asked questions</h2>
        <div className="mt-12 border-t">
          {FAQS.slice(0, 6).map((f, i) => (
            <div key={f.q} className="border-b">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-6 py-5 text-left font-semibold text-primary">
                {f.q}<ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <p className="overflow-hidden leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ORBIT = ["Payroll", "PF / EPFO", "ESIC", "Professional Tax", "LWF", "Gratuity", "Bonus", "TDS", "Labour Codes", "HR Audit", "Staffing", "F&F Settlement"];

const FinalCta = () => (
  <section className="relative overflow-hidden bg-hero text-primary-foreground">
    <div className="container relative grid gap-12 py-24 md:py-28 lg:grid-cols-2 lg:items-center">
      <div className="on-scroll">
        <span className="inline-flex rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground/80">Pan-India HR partner</span>
        <h2 className="mt-6 text-4xl font-bold leading-[1.05] md:text-6xl">Run your HR and compliance <span className="block text-highlight">on autopilot.</span></h2>
        <p className="mt-6 max-w-md text-primary-foreground/65">See why growing Indian employers trust TruVisory with payroll, compliance and hiring.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90"><a href={whatsappLink()} target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/contact">Contact us</Link></Button>
        </div>
      </div>
      <div className="relative mx-auto aspect-square w-full max-w-[460px]">
        <div className="absolute inset-0 rounded-full border border-primary-foreground/10" />
        <div className="absolute inset-[18%] rounded-full border border-primary-foreground/10" />
        <div className="float absolute inset-[36%] grid place-items-center overflow-hidden rounded-full bg-card shadow-elevated ring-8 ring-primary-foreground/10">
          <img src="/truvisory-logo.jpg" alt="TruVisory logo" className="h-4/5 w-4/5 object-contain" />
        </div>
        <div className="orbit absolute inset-0">
          {ORBIT.map((t, i) => {
            const a = (i / ORBIT.length) * Math.PI * 2;
            const r = i % 2 ? 41 : 30;
            return (
              <div key={t} className="absolute" style={{ left: `${50 + Math.cos(a) * r}%`, top: `${50 + Math.sin(a) * r}%`, transform: "translate(-50%,-50%)" }}>
                <span className="orbit-rev block whitespace-nowrap rounded-full border border-primary-foreground/15 bg-navy-deep/80 px-3 py-1.5 text-xs font-semibold text-primary-foreground/85 backdrop-blur">{t}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

const Index = () => (
  <Layout>
    <Hero />
    <TrustStrip />
    <Platform />
    <Pillars />
    <Codes />
    <Faq />
    <FinalCta />
  </Layout>
);

export default Index;
