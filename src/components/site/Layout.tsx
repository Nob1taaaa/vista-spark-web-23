import { ReactNode, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, MessageCircle, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, NAV, whatsappLink } from "@/data/site";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="flex items-center gap-2.5" aria-label="TruVisory HR Services home">
    <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-gradient font-display text-lg font-bold text-accent-foreground shadow-card">tv</span>
    <span className="leading-none">
      <span className={`block font-display text-xl font-semibold ${light ? "text-primary-foreground" : "text-primary"}`}>TruVisory</span>
      <span className={`block text-[10px] font-bold tracking-[0.25em] ${light ? "text-primary-foreground/70" : "text-accent"}`}>HR SERVICES</span>
    </span>
  </Link>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled || open ? "bg-card/95 shadow-card backdrop-blur" : "bg-card/80 backdrop-blur"}`}>
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end className={({ isActive }) => `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${isActive ? "text-accent" : "text-foreground/75 hover:text-primary"}`}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90"><a href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle className="mr-2 h-4 w-4" />Get a Consultation</a></Button>
        </div>
        <button className="rounded-lg p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="border-t bg-card lg:hidden">
          <div className="container flex flex-col py-3">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end className={({ isActive }) => `rounded-lg px-3 py-3 font-semibold ${isActive ? "bg-accent-soft text-accent" : "text-foreground"}`}>{n.label}</NavLink>
            ))}
            <Button asChild className="mt-3 bg-accent text-accent-foreground hover:bg-accent/90"><a href={whatsappLink()} target="_blank" rel="noreferrer">Chat on WhatsApp</a></Button>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-navy-deep text-primary-foreground">
    <div className="container grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <Logo light />
        <p className="mt-4 text-sm text-primary-foreground/70">Complete HR & Workforce Solutions.<br />Payroll. Compliance. Recruitment.</p>
      </div>
      <div>
        <h4 className="mb-4 font-sans text-sm font-bold uppercase tracking-wider text-primary-foreground/60">Quick Links</h4>
        <ul className="space-y-2 text-sm">{NAV.map((n) => <li key={n.to}><Link className="text-primary-foreground/80 hover:text-primary-foreground" to={n.to}>{n.label}</Link></li>)}<li><Link className="text-primary-foreground/80 hover:text-primary-foreground" to="/faq">FAQs</Link></li></ul>
      </div>
      <div>
        <h4 className="mb-4 font-sans text-sm font-bold uppercase tracking-wider text-primary-foreground/60">Our Services</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/80">
          <li><Link to="/services#payroll">Payroll Management</Link></li>
          <li><Link to="/services#compliance">Statutory Compliance</Link></li>
          <li><Link to="/services#advisory">HR Advisory & Audit</Link></li>
          <li><Link to="/services#staffing">Staffing Solutions</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="mb-4 font-sans text-sm font-bold uppercase tracking-wider text-primary-foreground/60">Contact</h4>
        <ul className="space-y-3 text-sm text-primary-foreground/80">
          <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-highlight" /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
          <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-highlight" /><a href={`tel:+${CONTACT.phoneRaw}`}>{CONTACT.phone}</a></li>
          <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-highlight" />{CONTACT.address}</li>
          <li className="flex gap-2"><Linkedin className="h-4 w-4 shrink-0 text-highlight" />Services across India</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-primary-foreground/60 md:flex-row">
        <p>© 2026 TruVisory HR Services. All Rights Reserved.</p>
        <div className="flex gap-4"><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms & Conditions</Link><Link to="/disclaimer">Disclaimer</Link></div>
      </div>
    </div>
  </footer>
);

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <Navbar />
    <main className="flex-1 pt-16 md:pt-20">{children}</main>
    <Footer />
    <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-highlight text-accent-foreground shadow-elevated transition-transform hover:scale-110">
      <MessageCircle className="h-7 w-7" />
    </a>
  </div>
);

export const PageHero = ({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) => (
  <section className="relative overflow-hidden bg-hero text-primary-foreground">
    <div className="grid-pattern absolute inset-0" />
    <div className="container relative py-20 md:py-28">
      <p className="reveal mb-4 text-xs font-bold uppercase tracking-[0.3em] text-highlight">{eyebrow}</p>
      <h1 className="reveal max-w-3xl text-4xl font-semibold md:text-6xl">{title}</h1>
      <p className="reveal mt-5 max-w-2xl text-lg text-primary-foreground/75">{text}</p>
    </div>
  </section>
);

export const SectionHead = ({ eyebrow, title, text, center }: { eyebrow: string; title: string; text?: string; center?: boolean }) => (
  <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
    <h2 className="text-3xl font-semibold text-primary md:text-5xl">{title}</h2>
    {text && <p className="mt-4 text-lg text-muted-foreground">{text}</p>}
  </div>
);
