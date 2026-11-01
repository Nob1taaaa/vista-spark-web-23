import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/site/Layout";

const NotFound = () => (
  <Layout>
    <section className="container py-32 text-center">
      <p className="font-display text-7xl font-semibold text-accent">404</p>
      <h1 className="mt-4 text-3xl font-semibold text-primary">Page not found</h1>
      <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/">Back to Home</Link></Button>
    </section>
  </Layout>
);
export default NotFound;
