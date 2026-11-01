import { GraduationCap, Car, Factory, Laptop, HeartPulse, ShoppingBag, Truck, Rocket, Building, Wrench } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { INDUSTRIES } from "@/data/site";

const icons = [GraduationCap, Car, Factory, Laptop, HeartPulse, ShoppingBag, Truck, Rocket, Building, Wrench];

const Industries = () => (
  <Layout>
    <PageHero eyebrow="Industries" title="Industries we serve" text="HR, payroll and compliance solutions tailored to the workforce realities of each sector." />
    <section className="container grid gap-5 py-20 sm:grid-cols-2 lg:grid-cols-5">
      {INDUSTRIES.map((n, i) => {
        const I = icons[i];
        return (
          <div key={n} className="group rounded-2xl border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent hover:shadow-elevated">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground"><I className="h-6 w-6" /></span>
            <h3 className="mt-4 font-sans text-lg font-bold text-primary">{n}</h3>
          </div>
        );
      })}
    </section>
  </Layout>
);
export default Industries;
