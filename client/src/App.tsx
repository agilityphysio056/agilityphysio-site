import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CookieBanner } from "@/components/cookie-banner";
import Home from "@/pages/home";
import Services from "@/pages/services";
import ServiceDetail from "@/pages/services/service-detail";
import HomePhysioWestMidlands from "@/pages/services/home-physio-west-midlands";
import Conditions from "@/pages/conditions";
import ConditionDetail from "@/pages/conditions/condition-detail";
import Clinics from "@/pages/clinics/index";
import StanmoreClinic from "@/pages/clinics/stanmore";
import StockwellClinic from "@/pages/clinics/stockwell";
import Fees from "@/pages/fees";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Bookings from "@/pages/bookings";
import BookingConfirmation from "@/pages/bookings/confirmation";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import StanmoreHomeVisit from "@/pages/home-visits/stanmore";
import StockwellHomeVisit from "@/pages/home-visits/stockwell";
import MeetTheTeam from "@/pages/meet-the-team/index";
import TeamProfile from "@/pages/meet-the-team/profile";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/home-physio-west-midlands" component={HomePhysioWestMidlands} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/conditions" component={Conditions} />
      <Route path="/conditions/:slug" component={ConditionDetail} />
      <Route path="/clinics" component={Clinics} />
      <Route path="/clinics/stanmore" component={StanmoreClinic} />
      <Route path="/clinics/stockwell" component={StockwellClinic} />
      <Route path="/home-visits/stanmore" component={StanmoreHomeVisit} />
      <Route path="/home-visits/stockwell" component={StockwellHomeVisit} />
      <Route path="/meet-the-team" component={MeetTheTeam} />
      <Route path="/meet-the-team/:slug" component={TeamProfile} />
      <Route path="/fees" component={Fees} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/bookings" component={Bookings} />
      <Route path="/bookings/confirmation" component={BookingConfirmation} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
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
        <CookieBanner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
