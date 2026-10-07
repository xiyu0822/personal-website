import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function Portfolio() {
  const categories = useMemo(
    () => ["全部", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("全部");

  const filtered =
    active === "全部"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-8">
      <SectionHeading
        eyebrow="Portfolio"
        title="我的成长"
        subtitle="这里记录了我的学习成果、足球经历与未来规划。每一项背后，都是一段值得回味的成长时光。"
      />

      {/* 分类筛选 */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
              active === cat
                ? "bg-brand-gradient text-white shadow-md shadow-primary/20"
                : "border border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 项目网格 */}
      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl hover:shadow-primary/5"
            >
              {/* 封面 */}
              <div className="relative h-44 overflow-hidden">
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105",
                    project.gradient
                  )}
                />
                {/* 网格纹理 */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />
                {/* 标题水印 */}
                <div className="absolute inset-0 flex items-end p-5">
                  <div>
                    <span className="rounded-full bg-black/20 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur">
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-white drop-shadow">
                      {project.title}
                    </h3>
                  </div>
                </div>
                {project.featured && (
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-bold text-foreground">
                    ⭐ 精选
                  </span>
                )}
              </div>

              {/* 内容 */}
              <div className="p-5">
                <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>

                <MarkdownRenderer
                  content={project.description}
                  className="text-sm"
                />

                {/* 标签 */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-md bg-muted font-normal text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* 链接 */}
                <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      查看详情
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                      源码
                    </a>
                  )}
                  <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-all group-hover:text-primary">
                    详情
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-muted-foreground">
          暂无该分类下的作品。
        </p>
      )}
    </div>
  );
}
