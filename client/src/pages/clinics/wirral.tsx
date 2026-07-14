import { ClinicPage } from "@/components/clinic-page";
import { wirralClinic } from "@/data/clinics";

export default function WirralClinic() {
  return <ClinicPage config={wirralClinic} />;
}
