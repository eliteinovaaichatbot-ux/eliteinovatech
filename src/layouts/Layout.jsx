import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";

// React Router doesn't reset scroll position between routes on its own, and
// footer/nav links that point at an in-page id (e.g. /services#features)
// need something to actually scroll to it after the new page mounts. This
// covers both in one place instead of scattering scroll logic per page.
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}

export default function Layout() {
  return (
    <>
      {/* Navbar lives outside the overflow-hidden page wrapper below — any
          ancestor with overflow other than visible breaks `position: sticky`
          against the viewport, and that wrapper needs overflow-hidden to
          clip the decorative background blobs. Its z-30 keeps it painted
          above the wrapper's isolated stacking context regardless of DOM
          order. */}
      <Navbar />
      <div className="relative isolate min-h-screen overflow-hidden bg-navy-950">
        <div aria-hidden="true" className="site-atmosphere">
          <span className="site-atmosphere__globe site-atmosphere__globe--top" />
          <span className="site-atmosphere__orbit site-atmosphere__orbit--top" />
          <span className="site-atmosphere__globe site-atmosphere__globe--middle" />
          <span className="site-atmosphere__orbit site-atmosphere__orbit--middle" />
          <span className="site-atmosphere__globe site-atmosphere__globe--bottom" />
          <span className="site-atmosphere__orbit site-atmosphere__orbit--bottom" />
        </div>
        <ScrollManager />
        <div className="relative z-10">
          <Outlet />
          <FooterSection />
        </div>
      </div>
    </>
  );
}
