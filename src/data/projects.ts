/**
 * 作品集数据（学生版本：学习成果、足球经历与未来规划）
 * 每个项目卡片包含标题、Markdown 描述、标签、链接与封面渐变。
 * 对于学生而言，「作品」可以是学习成果、笔记体系、训练记录等。
 */
export type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  // 封面渐变色（Tailwind 类）
  gradient: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "高中学习笔记体系",
    category: "学习成果",
    year: "2023—2026",
    description:
      "三年高中积累的**学科笔记与方法论**，覆盖语文、历史、政治等文科科目，形成了一套属于自己的知识体系。\n\n- 文科知识脉络梳理与记忆框架\n- 写作素材库与议论文模板\n- 错题本与考前冲刺手册",
    tags: ["学习方法", "笔记", "归纳总结", "语文", "历史"],
    link: "#",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    featured: true,
  },
  {
    title: "校际足球赛参赛记录",
    category: "足球经历",
    year: "2024—2025",
    description:
      "在校际足球联赛中担任**主力中场**，记录了每场比赛的战术心得与个人成长。\n\n- 多场校际比赛实战经验\n- 中场组织与传球能力提升\n- 学会了在压力下保持冷静",
    tags: ["足球", "比赛", "团队协作", "中场"],
    link: "#",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    featured: true,
  },
  {
    title: "高考备考时间规划",
    category: "学习成果",
    year: "2026",
    description:
      "高三冲刺阶段自建的**备考计划与时间管理表**，把庞大的复习任务拆解到每一天。\n\n- 每日学习清单与复盘机制\n- 各科复习节奏的科学分配\n- 状态低谷期的调整方法",
    tags: ["时间管理", "计划性", "执行力", "高考"],
    link: "#",
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
  },
  {
    title: "课外阅读书单与笔记",
    category: "学习成果",
    year: "持续",
    description:
      "保持**广泛阅读**的习惯，涉猎科技、历史、心理学等多个领域，并写下读书笔记。\n\n- 每月坚持读完 1—2 本书\n- 读书笔记与思考记录\n- 跨学科视野的逐步建立",
    tags: ["阅读", "好奇心", "跨学科", "笔记"],
    link: "#",
    gradient: "from-amber-500 via-orange-500 to-red-500",
  },
  {
    title: "大学学习规划",
    category: "未来计划",
    year: "2026—",
    description:
      "即将开启的大学生活，我已经定下三条清晰的**主线目标**，围绕市场营销专业展开：\n\n- 📊 **市场营销专业**：扎根专业课，建立营销思维与商业洞察\n- 🇪🇸 **自学西班牙语**：目标**大二达到 B2**，每日坚持听说读写\n- 💰 **选修金融学**：拓宽商业认知，补足财务与投资视角",
    tags: ["市场营销", "西班牙语", "金融学", "大学规划"],
    link: "#",
    gradient: "from-rose-500 via-pink-500 to-purple-500",
    featured: true,
  },
  {
    title: "班级活动组织经历",
    category: "团队协作",
    year: "2024—2026",
    description:
      "多次参与并组织**班级活动**，从策划到落地，锻炼了沟通协调与组织能力。\n\n- 班级团建与文体活动策划\n- 小组合作中的协调角色\n- 学会凝聚不同意见、推动执行",
    tags: ["组织", "沟通", "领导力", "责任心"],
    link: "#",
    gradient: "from-slate-600 via-gray-700 to-zinc-800",
  },
];
