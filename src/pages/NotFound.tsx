import { Link } from "react-router-dom";
import { Home as HomeIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl font-extrabold text-gradient">404</p>
      <h1 className="mt-4 text-2xl font-bold">页面走丢了</h1>
      <p className="mt-2 text-muted-foreground">
        你访问的页面不存在，可能已被移动或删除。
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25"
      >
        <HomeIcon className="h-4 w-4" />
        返回首页
      </Link>
    </div>
  );
}
