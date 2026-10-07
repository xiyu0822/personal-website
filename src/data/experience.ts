/**
 * 成长经历数据（时间轴）
 * type: education（教育）/ football（足球）/ travel（旅行）/ milestone（里程碑）
 * content 为 Markdown 字符串，通过 MarkdownRenderer 渲染。
 */
export type ExperienceType = "education" | "football" | "travel" | "milestone";

export type Experience = {
  year: string;
  date: string;
  title: string;
  organization: string;
  type: ExperienceType;
  content: string;
};

export const experiences: Experience[] = [
  {
    year: "2026",
    date: "2026 秋",
    title: "即将步入大学",
    organization: "人生新阶段",
    type: "milestone",
    content:
      "高考结束，即将开启**大学生活**。这是全新的起点——我期待在专业学习中深耕，在足球场上继续奔跑，也期待遇见一群志同道合的朋友。\n\n带着好奇心与学习力出发，未来四年，慢慢来，比较快。",
  },
  {
    year: "2026",
    date: "2026 夏",
    title: "完成高中学业",
    organization: "高中毕业",
    type: "education",
    content:
      "三年高中时光匆匆而过。这段日子教会我**专注与坚持**，也让我收获了珍贵的友谊。\n\n- 经历了高考的洗礼，抗压能力大幅提升\n- 与同学们一起奋斗的时光值得铭记\n- 在球场上留下了无数奔跑的回忆",
  },
  {
    year: "2025",
    date: "2025",
    title: "高三冲刺与球队主力",
    organization: "高中",
    type: "football",
    content:
      "高三是最忙碌的一年，但我没有放弃足球。**学习与运动并行**，反而让我状态更好。\n\n- 高考备考压力下坚持每周踢球\n- 在校际比赛中担任主力中场\n- 学会用运动释放压力、调节状态",
  },
  {
    year: "2024",
    date: "2024",
    title: "确立学习方向",
    organization: "高中",
    type: "milestone",
    content:
      "高二下学期，我开始认真思考**自己未来想做什么**，并主动了解不同专业与职业方向。\n\n- 大量阅读拓宽视野\n- 与老师、学长交流取经\n- 逐步明确了自己的兴趣与优势所在",
  },
  {
    year: "2023",
    date: "2023 — 2026",
    title: "高中三年",
    organization: "某中学",
    type: "education",
    content:
      "进入高中，开启了更紧张充实的学习生活。三年间**学业稳步提升**，也在足球场上结识了一群兄弟。\n\n- 适应了高强度的高中节奏\n- 建立起自己的学习笔记与方法体系\n- 多次参与班级与学校活动",
  },
  {
    year: "2018",
    date: "2018",
    title: "真正爱上足球",
    organization: "球场启蒙",
    type: "football",
    content:
      "第一次在球场上感受到**团队配合进球**的快感，从此一发不可收拾。\n\n足球成了我生活的一部分，教会我拼搏、协作与永不放弃。",
  },
  {
    year: "2013",
    date: "童年",
    title: "第一次接触足球",
    organization: "人生起点",
    type: "milestone",
    content:
      "小学体育课上第一次踢球，那个滚动的圆球，悄悄改变了我之后的人生轨迹。\n\n那时候还不知道，**热爱**这件事，会陪伴我这么久。",
  },
  {
    year: "持续",
    date: "至今",
    title: "行走的足迹",
    organization: "用脚步丈量世界",
    type: "travel",
    content:
      "我热爱旅行，相信**走过的路都会成为自己的一部分**。从家乡深圳出发，足迹遍布国内大江南北，也走出国门看过不一样的风景。\n\n- 🌏 **海外**：马来西亚沙巴、泰国清莱/清迈/曼谷\n- 🇨🇳 **国内**：从东北的哈尔滨、呼伦贝尔，到大西北的青甘大环线（兰州、西宁、格尔木、茫崖、酒泉、张掖），再到西南的重庆、成都、云南大理丽江昆明，以及北京、青岛、威海、杭州、桂林、长沙，粤港澳的广州、佛山、潮汕、香港、澳门\n\n下方地图点亮了我走过的每一个地方 ✨",
  },
];

export const experienceTypeMeta: Record<
  ExperienceType,
  { label: string; color: string }
> = {
  education: { label: "教育", color: "from-sky-500 to-blue-600" },
  football: { label: "足球", color: "from-emerald-500 to-green-600" },
  travel: { label: "旅行", color: "from-cyan-500 to-teal-600" },
  milestone: { label: "里程碑", color: "from-amber-500 to-orange-600" },
};
