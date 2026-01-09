import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Services from "@/pages/services";
import ServiceDetail from "@/pages/services/service-detail";
import Conditions from "@/pages/conditions";
import ConditionDetail from "@/pages/conditions/condition-detail";
import Clinics from "@/pages/clinics/index";
import StanmoreClinic from "@/pages/clinics/stanmore";
import StockwellClinic from "@/pages/clinics/stockwell";
import Fees from "@/pages/fees";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/conditions" component={Conditions} />
      <Route path="/conditions/:slug" component={ConditionDetail} />
      <Route path="/clinics" component={Clinics} />
      <Route path="/clinics/stanmore" component={StanmoreClinic} />
      <Route path="/clinics/stockwell" component={StockwellClinic} />
      <Route path="/fees" component={Fees} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
