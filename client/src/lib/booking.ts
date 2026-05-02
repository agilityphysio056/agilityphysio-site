export function openBookingWidget() {
  if (typeof window === "undefined") return;
  if (window.location.pathname.startsWith("/bookings")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.history.pushState(null, "", "/bookings");
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0 });
}
