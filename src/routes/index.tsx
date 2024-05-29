import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const LandingPage = lazy(() => import("@/containers/staticPages/LandingPage"));

export default function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            {/* Landing page */}
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
