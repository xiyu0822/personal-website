import { motion } from "framer-motion";
import { GraduationCap, Trophy, Plane, Star } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { TravelMap } from "@/components/TravelMap";
import {
  experiences,
  experienceTypeMeta,
  type ExperienceType,
} from "@/data/experience";

const typeIcon: Record<ExperienceType, typeof GraduationCap> = {
  education: GraduationCap,
  football: Trophy,
  travel: Plane,
  milestone: Star,
};

export default function Experience() {
  return (
    <div className="mx-auto max-w-4xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-8">
      <SectionHeading
        eyebrow="My Journey"
        title="成长经历"
        subtitle="每一段经历都塑造了今天的我。以下是我的求学之路、足球故事与人生中的重要里程碑。"
      />

      {/* 图例 */}
      <div className="mt-8 flex flex-wrap gap-4">
        {(Object.keys(experienceTypeMeta) as ExperienceType[]).map((type) => {
          const Icon = typeIcon[type];
          return (
            <div
              key={type}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span
                className={`inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br ${experienceTypeMeta[type].color} text-white`}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              {experienceTypeMeta[type].label}
            </div>
          );
        })}
      </div>

      {/* 时间轴 */}
      <div className="relative mt-12">
        {/* 竖线 */}
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-primary/40 via-border to-transparent sm:left-1/2" />

        <div className="space-y-10">
          {experiences.map((exp, i) => {
            const Icon = typeIcon[exp.type];
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={`${exp.year}-${exp.title}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="relative"
              >
                {/* 节点圆点 */}
                <div className="absolute left-4 top-1 z-10 -translate-x-1/2 sm:left-1/2">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${experienceTypeMeta[exp.type].color} text-white shadow-lg ring-4 ring-background`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                </div>

                {/* 内容卡片 */}
                <div
                  className={`ml-12 sm:ml-0 sm:w-[calc(50%-2.5rem)] ${
                    isLeft ? "sm:mr-auto sm:pr-2" : "sm:ml-auto sm:pl-2"
                  }`}
                >
                  <div className="group rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lg hover:shadow-primary/5">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-accent-foreground">
                        {exp.date}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {experienceTypeMeta[exp.type].label}
                      </span>
                    </div>
                    <h3 className="text-base font-bold tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="mb-3 text-sm font-medium text-primary">
                      {exp.organization}
                    </p>
                    <MarkdownRenderer
                      content={exp.content}
                      className="text-sm"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 末端节点 */}
        <div className="relative mt-10">
          <div className="absolute left-4 top-0 -translate-x-1/2 sm:left-1/2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gradient text-xs font-bold text-white shadow-lg ring-4 ring-background">
              起
            </span>
          </div>
          <div className="ml-12 sm:mx-auto sm:w-fit sm:text-center">
            <p className="rounded-2xl border border-dashed border-border bg-muted/30 px-5 py-3 text-sm text-muted-foreground">
              故事仍在继续，未来由你我共同书写 ✨
            </p>
          </div>
        </div>
      </div>

      {/* 我的足迹地图 */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20"
      >
        <div className="mb-8">
          <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            My Footprints
          </span>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            我的足迹
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            从家乡深圳出发，用脚步丈量过的每一寸土地。
          </p>
        </div>
        <TravelMap />
      </motion.div>
    </div>
  );
}
