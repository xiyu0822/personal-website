import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { skills } from "@/data/skills";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-8">
      <SectionHeading
        eyebrow="Skills & Expertise"
        title="技能与专长"
        subtitle="我在工程与设计领域深耕多年，形成了从前端到后端、从产品到运维的完整技术栈。以下是我在各个方向的专长。"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.article
              key={skill.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-xl hover:shadow-primary/5"
            >
              {/* 悬浮渐变光斑 */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-gradient opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10" />

              {/* 图标 */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-lg shadow-primary/20">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-bold tracking-tight">
                {skill.title}
              </h3>

              {/* 熟练度 */}
              <div className="mt-3">
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">熟练度</span>
                  <span className="font-semibold text-foreground">
                    {skill.level}%
                  </span>
                </div>
                <Progress value={skill.level} className="h-1.5" />
              </div>

              {/* Markdown 描述 */}
              <div className="mt-4">
                <MarkdownRenderer content={skill.description} />
              </div>

              {/* 标签 */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {skill.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-md bg-muted font-normal text-muted-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* 底部说明 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 rounded-2xl border border-dashed border-border bg-muted/30 p-6 text-center text-sm text-muted-foreground"
      >
        💡 能力持续成长中，大学四年会不断打磨这些特长。所有描述内容均通过 Markdown 编写，便于维护与更新。
      </motion.div>
    </div>
  );
}
