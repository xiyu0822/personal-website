import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

/**
 * Markdown 渲染器
 * 支持 GitHub 风格 Markdown（GFM）：表格、任务列表、删除线等。
 * 样式由 index.css 中的 .markdown 类提供。
 */
export function MarkdownRenderer({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  return (
    <div className={cn("markdown", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ node, ...props }) => {
            // 丢弃 mdast node，避免透传到 DOM 属性
            void node;
            return (
              <a target="_blank" rel="noopener noreferrer" {...props} />
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
