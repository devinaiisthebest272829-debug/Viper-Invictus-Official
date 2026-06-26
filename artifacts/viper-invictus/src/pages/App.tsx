import { Switch, Route, Router as WouterRouter, Link } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/pages/Layout";
import IDE from "@/pages/IDE";
import Learn from "@/pages/Learn";
import Docs from "@/pages/Docs";
import Examples from "@/pages/Examples";
import About from "@/pages/About";
import Cheatsheet from "@/pages/Cheatsheet";
import Tutorials from "@/pages/Tutorials";
import Playground from "@/pages/Playground";
import Showcase from "@/pages/Showcase";
import Resources from "@/pages/Resources";
import Changelog from "@/pages/Changelog";

const queryClient = new QueryClient();

function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl font-bold text-white/10 mb-4">404</p>
          <p className="text-white/50 mb-6">Page not found</p>
          <Link href="/" className="inline-block text-[#b8b0fc] hover:underline">← Back to IDE</Link>
        </div>
      </div>
    </Layout>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Layout fullWidth><IDE /></Layout>} />
      <Route path="/learn" component={() => <Layout><Learn /></Layout>} />
      <Route path="/learn/:topic" component={() => <Layout><Learn /></Layout>} />
      <Route path="/docs" component={() => <Layout><Docs /></Layout>} />
      <Route path="/docs/:topic" component={() => <Layout><Docs /></Layout>} />
      <Route path="/examples" component={() => <Layout><Examples /></Layout>} />
      <Route path="/cheatsheet" component={() => <Layout><Cheatsheet /></Layout>} />
      <Route path="/tutorials" component={() => <Layout><Tutorials /></Layout>} />
      <Route path="/tutorials/:id" component={() => <Layout><Tutorials /></Layout>} />
      <Route path="/playground" component={() => <Layout><Playground /></Layout>} />
      <Route path="/showcase" component={() => <Layout><Showcase /></Layout>} />
      <Route path="/resources" component={() => <Layout><Resources /></Layout>} />
      <Route path="/changelog" component={() => <Layout><Changelog /></Layout>} />
      <Route path="/about" component={() => <Layout><About /></Layout>} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter hook={useHashLocation}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
