import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { navItems, siteConfig, socialLinks } from "@/data/site";
import { SocialIcon } from "@/components/SocialIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* 品牌区 */}
          <div className="max-w-xs text-center md:text-left">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-xs font-bold text-white">
                {siteConfig.firstName}
              </span>
              <span className="font-bold">{siteConfig.name}</span>
            </Link>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          {/* 导航 */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* 社交 */}
          {socialLinks.length > 0 && (
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                <SocialIcon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
          )}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {siteConfig.name}. 保留所有权利。
          </p>
          <p className="flex items-center gap-1.5">
            使用 <Heart className="h-3 w-3 fill-red-500 text-red-500" /> 与
            React · TypeScript · Tailwind 构建
          </p>
        </div>
      </div>
    </footer>
  );
}
