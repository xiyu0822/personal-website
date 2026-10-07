import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * 页面区块标题：带渐变眉标 + 大标题 + 副标题
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
          {eyebrow}
        </span>
      )}
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
