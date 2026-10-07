import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 路由切换时关闭移动端菜单
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // 移动端菜单打开时禁止背景滚动
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-sm font-bold text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
            {siteConfig.firstName}
          </span>
          <span className="text-base font-bold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        {/* 桌面端导航 */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                isActive(item.path)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
              {isActive(item.path) && <ActiveUnderline />}
            </Link>
          ))}
        </div>

        {/* 右侧操作 */}
        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          {/* 移动端菜单按钮 */}
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:bg-muted md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="菜单"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* 移动端抽屉菜单 */}
      {open && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-xl"
            onClick={() => setOpen(false)}
          >
            <div className="flex flex-col gap-1 px-6 py-8">
              {navItems.map((item, i) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-4 text-lg font-medium transition-colors",
                    isActive(item.path)
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                  style={{ animation: `slideIn 0.3s ease ${i * 0.05}s both` }}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-muted-foreground/60">
                    {item.desc}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </header>
  );
}

/** 激活态下划线 */
function ActiveUnderline() {
  return (
    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-gradient" />
  );
}
