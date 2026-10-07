import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * 主题切换按钮
 * 在深色 / 浅色之间切换，状态持久化由 next-themes 处理。
 * 使用 mounted 标志避免 SSR 水合不匹配。
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="切换主题"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-9 w-9 rounded-full"
    >
      {mounted ? (
        <Sun
          className={`h-[18px] w-[18px] transition-all duration-500 ${
            isDark
              ? "rotate-0 scale-100"
              : "-rotate-90 scale-0 absolute"
          }`}
        />
      ) : null}
      {mounted ? (
        <Moon
          className={`h-[18px] w-[18px] transition-all duration-500 ${
            isDark
              ? "rotate-90 scale-0 absolute"
              : "rotate-0 scale-100"
          }`}
        />
      ) : null}
      {/* 未挂载时的占位，避免布局抖动 */}
      {!mounted ? <div className="h-[18px] w-[18px]" /> : null}
    </Button>
  );
}
