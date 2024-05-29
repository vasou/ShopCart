import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const LandingPage = lazy(() => import("@/containers/staticPages/LandingPage"));
const ProductDetail = lazy(() => import("@/containers/ProductDetail"));

export default function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            {/* Landing page */}
            <Route path="/" element={<LandingPage />} />
            {/* Product detail page */}
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
