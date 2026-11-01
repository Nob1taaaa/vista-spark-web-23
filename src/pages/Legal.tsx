import { Layout, PageHero } from "@/components/site/Layout";
import { CONTACT } from "@/data/site";

const content = {
  privacy: { t: "Privacy Policy", p: ["We collect only the details you choose to share with us through enquiries, calls or WhatsApp, and use them solely to respond to your requirements.", "We do not sell or share your information with third parties except where required to deliver the services you request or by law.", `For any privacy request, write to ${CONTACT.email}.`] },
  terms: { t: "Terms & Conditions", p: ["Information on this website is provided for general guidance about our services.", "Specific engagements are governed by the service agreement signed with each client.", "All content on this website belongs to TruVisory HR Services."] },
  disclaimer: { t: "Disclaimer", p: ["Content on labour laws and the Labour Codes is for general information only and is not legal advice.", "Applicable Central and State rules, notifications and commencement dates should be verified for each establishment.", "TruVisory HR Services is not responsible for decisions taken solely on the basis of website content."] },
};

const Legal = ({ kind }: { kind: keyof typeof content }) => {
  const c = content[kind];
  return (
    <Layout>
      <PageHero eyebrow="Legal" title={c.t} text="TruVisory HR Services" />
      <section className="container max-w-3xl space-y-5 py-20 text-lg text-muted-foreground">{c.p.map((x) => <p key={x}>{x}</p>)}</section>
    </Layout>
  );
};
export default Legal;
