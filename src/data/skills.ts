/**
 * 个人特长数据
 * 每张卡片包含图标、标题、Markdown 格式的描述与标签。
 * description 字段为 Markdown 字符串，会通过 MarkdownRenderer 渲染。
 */
import {
  Zap,
  Trophy,
  BookOpen,
  Users,
  Target,
  Lightbulb,
  Languages,
  type LucideIcon,
} from "lucide-react";

export type Skill = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  level: number; // 0-100 熟练度
};

export const skills: Skill[] = [
  {
    icon: Zap,
    title: "快速学习",
    description:
      "我最自豪的能力——**快速掌握新知识**。无论是新学科、新技能还是新工具，我都能在短时间内抓住核心，建立体系。\n\n- 善于拆解复杂概念，找到学习路径\n- 课堂知识当堂消化，课后举一反三\n- 自学过多个课外领域的入门内容",
    tags: ["自学能力", "知识迁移", "深度思考", "好奇心"],
    level: 92,
  },
  {
    icon: Trophy,
    title: "足球运动",
    description:
      "从小学踢到现在，足球不仅是爱好，更是塑造我的运动。球场上教会我**团队、坚持与抗压**。\n\n- 多年校队/班队比赛经验\n- 主踢中场，边锋为主\n- 体能充沛，比赛作风硬朗",
    tags: ["团队协作", "体能", "中场", "边锋", "抗压"],
    level: 88,
  },
  {
    icon: BookOpen,
    title: "学业基础",
    description:
      "高中阶段打下了扎实的学科基础，作为**文科生**，擅长阅读理解、写作表达与人文思辨，成绩稳定在年级前列。\n\n- 语文、历史、政治等文科扎实\n- 善于梳理知识脉络，构建知识体系\n- 养成了良好的笔记与复习习惯",
    tags: ["语文", "历史", "政治", "写作", "学习方法"],
    level: 85,
  },
  {
    icon: Users,
    title: "团队协作",
    description:
      "无论是球场还是班级活动，我都是那个**愿意站出来组织的人**。懂得倾听，也敢于表达。\n\n- 多次担任小组长/活动组织者\n- 善于协调不同意见，凝聚共识\n- 责任心强，交代的事一定办到",
    tags: ["沟通", "组织", "责任心", "领导力"],
    level: 80,
  },
  {
    icon: Target,
    title: "目标管理",
    description:
      "我习惯给自己**定目标、做计划**，并把大目标拆成可执行的小步骤，一件件完成。\n\n- 善用待办清单与时间规划\n- 考试季、比赛季都能高效备考备赛\n- 说到做到，执行力强",
    tags: ["时间管理", "执行力", "计划性", "自律"],
    level: 78,
  },
  {
    icon: Lightbulb,
    title: "好奇心与探索",
    description:
      "对世界保持**孩童般的好奇**，喜欢追问「为什么」，也愿意花时间研究自己感兴趣的新事物。\n\n- 关注科技、历史、心理学等多个领域\n- 乐于尝试新工具、新方法\n- 相信广泛涉猎能为专业学习带来灵感",
    tags: ["好奇心", "广泛阅读", "跨学科", "创新"],
    level: 90,
  },
  {
    icon: Languages,
    title: "西班牙语自学",
    description:
      "大学期间的「长线任务」——**自学西班牙语**，目标大二达到 **B2** 水平。\n\n- 从零基础起步，坚持每日听说读写\n- 用多邻国 + 系统教材双线推进\n- 为未来留学、外贸或跨国交流铺路",
    tags: ["西班牙语", "自学", "B2目标", "语言学习"],
    level: 35,
  },
];
