import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Layout, PageHero } from "@/components/site/Layout";
import { FAQS } from "@/data/site";

const FAQ = () => (
  <Layout>
    <PageHero eyebrow="FAQs" title="Frequently asked questions" text="Quick answers about our payroll, compliance and staffing services." />
    <section className="container max-w-3xl py-20">
      <Accordion type="single" collapsible className="rounded-2xl border bg-card px-6 shadow-card">
        {FAQS.map((f, i) => (
          <AccordionItem key={f.q} value={`q${i}`}>
            <AccordionTrigger className="text-left font-sans text-base font-bold text-primary">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  </Layout>
);
export default FAQ;
