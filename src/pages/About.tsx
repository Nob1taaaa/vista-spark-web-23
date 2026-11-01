import { Target, Eye, Gem } from "lucide-react";
import { Layout, PageHero, SectionHead } from "@/components/site/Layout";
import { WHY } from "@/data/site";

const values = ["Integrity and transparency", "Professional excellence", "Accuracy and confidentiality", "Client satisfaction", "Continuous improvement"];

const About = () => (
  <Layout>
    <PageHero eyebrow="About Us" title="A trusted HR and compliance partner." text="TruVisory HR Services is a professional HR consultancy providing payroll management, statutory compliance, HR advisory and workforce solutions." />
    <section className="container grid gap-12 py-24 lg:grid-cols-2">
      <div>
        <SectionHead eyebrow="Company overview" title="Simplifying complex HR." />
        <p className="text-lg text-muted-foreground">We help organisations simplify complex HR processes, maintain statutory compliance and improve workforce management through reliable, transparent and professional services. From a single-location startup to multi-state enterprises, we bring the same discipline to every payroll and every filing.</p>
      </div>
      <div className="grid gap-5">
        <div className="rounded-2xl border bg-card p-7 shadow-card"><Target className="h-7 w-7 text-accent" /><h3 className="mt-3 text-2xl font-semibold text-primary">Our Mission</h3><p className="mt-2 text-muted-foreground">To simplify HR operations and statutory compliance by providing accurate, dependable and cost-effective solutions.</p></div>
        <div className="rounded-2xl border bg-card p-7 shadow-card"><Eye className="h-7 w-7 text-accent" /><h3 className="mt-3 text-2xl font-semibold text-primary">Our Vision</h3><p className="mt-2 text-muted-foreground">To become a trusted HR and compliance partner for businesses across India.</p></div>
      </div>
    </section>
    <section className="bg-primary text-primary-foreground">
      <div className="container py-20">
        <h2 className="mb-10 text-3xl font-semibold md:text-4xl">Our Core Values</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v) => <div key={v} className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"><Gem className="h-5 w-5 text-highlight" /><p className="mt-3 font-semibold">{v}</p></div>)}
        </div>
      </div>
    </section>
    <section className="container py-24">
      <SectionHead eyebrow="Why choose us" title="What working with us looks like" center />
      <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
        {WHY.map((w, i) => <div key={w.t} className="rounded-2xl border bg-card p-6 shadow-card"><span className="font-display text-3xl text-accent/40">{i + 1}</span><h3 className="mt-2 font-sans font-bold text-primary">{w.t}</h3><p className="mt-1 text-sm text-muted-foreground">{w.d}</p></div>)}
      </div>
    </section>
  </Layout>
);
export default About;
