import { permanentRedirect } from "next/navigation";

/** The old Profit Check page now lives at /get-started. */
export default function ProfitCheckPage() {
  permanentRedirect("/get-started");
}
