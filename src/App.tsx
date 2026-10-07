import { lazy, Suspense } from "react";
import {
  HashRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Toaster } from "@/components/ui/sonner";

// 路由级懒加载，提升首屏性能
const Home = lazy(() => import("@/pages/Home"));
const Skills = lazy(() => import("@/pages/Skills"));
const Experience = lazy(() => import("@/pages/Experience"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense
        fallback={
          <div className="flex min-h-[60vh] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        }
      >
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/skills"
            element={
              <PageTransition>
                <Skills />
              </PageTransition>
            }
          />
          <Route
            path="/experience"
            element={
              <PageTransition>
                <Experience />
              </PageTransition>
            }
          />
          <Route
            path="/portfolio"
            element={
              <PageTransition>
                <Portfolio />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
      <Toaster richColors position="top-center" />
    </HashRouter>
  );
}
