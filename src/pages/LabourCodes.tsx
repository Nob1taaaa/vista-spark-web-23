import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout, PageHero, SectionHead } from "@/components/site/Layout";
import { EMPLOYER_IMPACT, LABOUR_CODES, whatsappLink } from "@/data/site";

const LabourCodes = () => (
  <Layout>
    <PageHero eyebrow="Labour Codes" title="Understanding India's Four Labour Codes" text="The four Labour Codes took effect on 21 November 2025, with Central Rules notified in May 2026. Here's what they mean for employers — in plain language." />
    <section className="container py-20">
      <div className="grid gap-8">
        {LABOUR_CODES.map((c, i) => (
          <article key={c.id} id={c.id} className="scroll-mt-28 grid gap-8 rounded-3xl border bg-card p-8 shadow-card md:p-10 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-accent">CODE {i + 1} · {c.year}</p>
              <h2 className="mt-2 text-3xl font-semibold text-primary">{c.title}, {c.year}</h2>
              <p className="mt-3 text-muted-foreground">{c.summary}</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">{c.points.map((p) => <li key={p} className="flex gap-2 rounded-xl bg-secondary p-4 text-sm font-medium"><CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />{p}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
    <section className="bg-secondary">
      <div className="container py-20">
        <SectionHead eyebrow="Employer impact" title="Topics every employer should review" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EMPLOYER_IMPACT.map((e) => <div key={e.t} className="rounded-2xl bg-card p-6 shadow-card"><h3 className="font-sans text-lg font-bold text-primary">{e.t}</h3><p className="mt-1 text-sm text-muted-foreground">{e.d}</p></div>)}
        </div>
        <div className="mt-10 flex gap-4 rounded-2xl border border-accent/30 bg-accent-soft p-6">
          <AlertTriangle className="h-6 w-6 shrink-0 text-accent" />
          <p className="text-sm text-foreground/80"><strong>Please note:</strong> Implementation details and applicable rules can differ by state and establishment. Professional Tax and Labour Welfare Fund are state-specific laws, not provisions of the four Codes. Verify commencement notifications and applicable Central and State rules for your establishment.</p>
        </div>
        <Button asChild size="lg" className="mt-10 bg-accent text-accent-foreground hover:bg-accent/90"><a href={whatsappLink("Hello TruVisory, I'd like a Labour Codes readiness review.")} target="_blank" rel="noreferrer">Book a Labour Codes readiness review</a></Button>
      </div>
    </section>
  </Layout>
);
export default LabourCodes;
