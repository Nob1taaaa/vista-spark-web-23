import { CalendarDays } from "lucide-react";
import { Layout, PageHero, SectionHead } from "@/components/site/Layout";
import { CALENDAR, RESOURCES } from "@/data/site";

const Resources = () => (
  <Layout>
    <PageHero eyebrow="Knowledge Centre" title="Resources & compliance updates" text="Labour Codes, EPFO, ESIC, minimum wages and payroll insights — explained for HR teams." />
    <section className="container py-20">
      <SectionHead eyebrow="Latest insights" title="Updates & articles" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {RESOURCES.map((r) => (
          <article key={r.title} className="flex flex-col rounded-2xl border bg-card p-7 shadow-card">
            <div className="flex items-center justify-between text-xs font-bold"><span className="rounded-full bg-accent-soft px-3 py-1 text-accent">{r.cat}</span><span className="text-muted-foreground">{r.date}</span></div>
            <h3 className="mt-4 text-xl font-semibold text-primary">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
          </article>
        ))}
      </div>
    </section>
    <section className="bg-primary text-primary-foreground">
      <div className="container py-20">
        <h2 className="text-3xl font-semibold md:text-4xl">Compliance due-date calendar</h2>
        <p className="mt-2 text-primary-foreground/70">Typical monthly and annual due dates. State-specific dates vary — we track them for you.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CALENDAR.map((c) => <div key={c.t} className="flex gap-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"><CalendarDays className="h-6 w-6 shrink-0 text-highlight" /><div><p className="font-display text-xl font-semibold">{c.day}</p><p className="text-sm text-primary-foreground/75">{c.t}</p></div></div>)}
        </div>
      </div>
    </section>
  </Layout>
);
export default Resources;
