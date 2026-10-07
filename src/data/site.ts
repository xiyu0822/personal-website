/**
 * 站点全局配置
 * 修改此文件即可更新姓名、头衔、联系方式与社交链接。
 */
export const siteConfig = {
  name: "习羽",
  firstName: "习",
  title: "市场营销专业 · 准大一新生",
  tagline: "用好奇心丈量世界，用学习打开未来",
  location: "广东深圳",
  // 接收留言的邮箱（通过 Formsubmit 转发，提交后第一次需去邮箱点激活链接）
  email: "xiyu20080422@qq.com",
  phone: "17727952827",
  // 头像：已替换为真实照片
  avatar: "./avatar.jpg",
  resumeUrl: "#",
  social: [
    { name: "电话", url: "tel:17727952827", icon: "phone" },
    { name: "微信", url: "#", icon: "wechat" },
    { name: "QQ", url: "#", icon: "qq" },
    { name: "B站", url: "https://www.bilibili.com", icon: "bilibili" },
    { name: "知乎", url: "https://www.zhihu.com", icon: "zhihu" },
  ],
} as const;

export type NavItem = {
  label: string;
  path: string;
  desc: string;
};

export const navItems: NavItem[] = [
  { label: "首页", path: "/", desc: "个人简介" },
  { label: "特长", path: "/skills", desc: "技能与专长" },
  { label: "经历", path: "/experience", desc: "成长历程" },
  { label: "作品", path: "/portfolio", desc: "学习成果" },
  { label: "联系", path: "/contact", desc: "联系方式" },
];
