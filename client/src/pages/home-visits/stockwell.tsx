import { HomeVisitLandingPage } from "@/components/home-visit-landing-page";
import { stockwellHomeVisit } from "@/data/home-visit-areas";

export default function StockwellHomeVisit() {
  return <HomeVisitLandingPage config={stockwellHomeVisit} />;
}
