import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout, PageHero, SectionHead } from "@/components/site/Layout";
import { COMPLIANCE_CATALOGUE, EPFO_EXTRA, ESIC_EXTRA, SERVICES, whatsappLink } from "@/data/site";

const Services = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }, [hash]);

  return (
    <Layout>
      <PageHero eyebrow="Our Services" title="Payroll, compliance and people — handled." text="End-to-end services built around India's central and state labour law requirements." />
      <div className="sticky top-16 z-30 border-b bg-card/95 backdrop-blur md:top-20">
        <div className="container flex gap-2 overflow-x-auto py-3">
          {SERVICES.map((s) => <a key={s.id} href={`#${s.id}`} className="whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-semibold hover:border-accent hover:text-accent">{s.no} · {s.title}</a>)}
        </div>
      </div>

      {SERVICES.map((s, idx) => (
        <section key={s.id} id={s.id} className={`scroll-mt-36 ${idx % 2 ? "bg-secondary" : ""}`}>
          <div className="container grid gap-10 py-20 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <span className="font-display text-6xl font-semibold text-accent/30">{s.no}</span>
              <h2 className="mt-2 text-3xl font-semibold text-primary md:text-4xl">{s.title}</h2>
              <p className="mt-3 text-lg text-muted-foreground">{s.short}</p>
              <Button asChild className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90"><a href={whatsappLink(`Hello TruVisory, I'm interested in ${s.title}.`)} target="_blank" rel="noreferrer">Enquire about {s.title}</a></Button>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {s.items.map((i) => <li key={i} className="flex gap-3 rounded-xl border bg-card p-4 shadow-card"><CheckCircle2 className="h-5 w-5 shrink-0 text-accent" /><span className="font-medium">{i}</span></li>)}
            </ul>
          </div>
          {s.id === "compliance" && (
            <div className="container pb-20">
              <SectionHead eyebrow="Detailed catalogue" title="Statutory compliance services" />
              <div className="overflow-hidden rounded-2xl border bg-card shadow-card">
                {COMPLIANCE_CATALOGUE.map((c, i) => (
                  <div key={c.t} className="grid gap-1 border-b p-5 last:border-b-0 md:grid-cols-[60px_260px_1fr] md:items-center">
                    <span className="text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-sans font-bold text-primary">{c.t}</h3>
                    <p className="text-muted-foreground">{c.d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {[{ t: "Additional EPFO Services", l: EPFO_EXTRA }, { t: "Additional ESIC Services", l: ESIC_EXTRA }].map((b) => (
                  <div key={b.t} className="rounded-2xl bg-primary p-7 text-primary-foreground">
                    <h3 className="text-2xl font-semibold">{b.t}</h3>
                    <ul className="mt-5 grid gap-2">{b.l.map((x) => <li key={x} className="flex gap-2 text-sm text-primary-foreground/85"><CheckCircle2 className="h-4 w-4 shrink-0 text-highlight" />{x}</li>)}</ul>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">Professional Tax and Labour Welfare Fund are state-specific obligations, applied according to each state where you have employees.</p>
            </div>
          )}
        </section>
      ))}
    </Layout>
  );
};
export default Services;
