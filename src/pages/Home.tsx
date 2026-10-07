import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Sparkles } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/site";
import { SocialIcon } from "@/components/SocialIcon";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import aboutContent from "@/content/about.md?raw";

const stats = [
  { value: "准大一", label: "市场营销专业" },
  { value: "10+", label: "年球龄" },
  { value: "B2", label: "西语目标" },
  { value: "∞", label: "学习热情" },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-8">
        {/* 背景光晕装饰 */}
        <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* 左侧文字 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              欢迎来到我的个人空间
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              你好，我是
              <br />
              <span className="text-gradient">{siteConfig.name}</span>
            </h1>

            <p className="mt-4 text-lg font-medium text-foreground/80 sm:text-xl">
              {siteConfig.title}
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
              {siteConfig.tagline}。热爱足球，也热爱学习本身——相信好奇心和快速学习的能力，是打开未来最关键的钥匙。
            </p>

            {/* 元信息 */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {siteConfig.location}
              </span>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>

            {/* CTA 按钮 */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02]"
              >
                查看我的成长
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted"
              >
                联系我
              </Link>
            </div>

            {/* 社交链接 */}
            {socialLinks.length > 0 && (
              <div className="mt-7 flex items-center gap-2">
                {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <SocialIcon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
          </motion.div>

          {/* 右侧头像 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative aspect-square">
              {/* 装饰圆环 */}
              <div className="absolute inset-0 animate-pulse rounded-full bg-brand-gradient opacity-20 blur-2xl" />
              <div className="absolute inset-2 rounded-full border border-primary/20" />
              <div className="absolute inset-6 rounded-full border border-primary/10" />
              {/* 头像 */}
              <img
                src={siteConfig.avatar}
                alt={siteConfig.name}
                className="relative h-full w-full rounded-full object-cover shadow-2xl shadow-primary/20 ring-4 ring-background"
              />
              {/* 浮动徽章 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-2 top-12 rounded-2xl border border-border bg-background/90 px-3 py-2 shadow-lg backdrop-blur"
              >
                <p className="text-xs font-semibold">⚽ 足球热爱者</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -left-2 bottom-16 rounded-2xl border border-border bg-background/90 px-3 py-2 shadow-lg backdrop-blur"
              >
                <p className="text-xs font-semibold">📚 快速学习者</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 数据亮点 */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <p className="text-3xl font-extrabold text-gradient sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 关于我（Markdown） */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            关于我
          </span>
          <MarkdownRenderer content={aboutContent} className="mt-2" />
        </div>
      </section>
    </div>
  );
}
