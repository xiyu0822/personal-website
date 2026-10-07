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
  /**
   * 社交链接
   * 规则：url 填 "#" 或空字符串的项会自动隐藏，不会在页面上显示点不动的图标。
   * 想启用某个平台，把它的 url 换成真实地址即可。
   *
   * 例如 B 站个人主页：https://space.bilibili.com/你的数字ID
   *     知乎个人主页：https://www.zhihu.com/people/你的用户名
   *     微信：不适合放外链，建议在「联系」页直接写微信号
   */
  social: [
    { name: "电话", url: "tel:17727952827", icon: "phone" },
    { name: "微信", url: "#", icon: "wechat" },
    { name: "QQ", url: "#", icon: "qq" },
    { name: "B站", url: "#", icon: "bilibili" },
    { name: "知乎", url: "#", icon: "zhihu" },
  ],
} as const;

/**
 * 实际渲染用的社交链接 = 上面 social 里 url 有效的那几条。
 * 自动过滤，不用手动同步：url 是 "#" 或空白的自动排除，
 * 所以页面上永远不会出现点不动的假图标。
 * 想启用某个平台，把它的 url 换成真实地址就会自动出现。
 */
export const socialLinks = siteConfig.social.filter(
  (s) => s.url && s.url !== "#" && s.url.trim() !== "",
);


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
