import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * 页面切换动画包装器
 * 进入时淡入 + 上移，配合 AnimatePresence 实现路由切换的流畅过渡。
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
