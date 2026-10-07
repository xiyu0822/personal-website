import { motion } from "framer-motion";
import { Phone, MapPin, Send, MessageCircle, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { SocialIcon } from "@/components/SocialIcon";
import { siteConfig, socialLinks } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import contactContent from "@/content/contact.md?raw";

const contactCards = [
  {
    icon: Phone,
    label: "电话",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: MapPin,
    label: "所在地",
    value: siteConfig.location,
    href: undefined,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.contact || !form.message) {
      toast.error("请填写完整的表单信息");
      return;
    }
    setSubmitting(true);
    try {
      // 通过 Formsubmit AJAX 端点转发留言到邮箱（免后端）
      // 首次提交后需去邮箱点激活链接，之后留言会自动转发
      const res = await fetch(
        `https://formsubmit.co/ajax/${siteConfig.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            contact: form.contact,
            message: form.message,
            _subject: `【习羽个人主页】来自 ${form.name} 的留言`,
            _template: "table",
          }),
        }
      );
      const data = await res.json();
      if (res.ok && data.success === "true") {
        toast.success("留言发送成功，我会尽快回复你！");
        setForm({ name: "", contact: "", message: "" });
      } else {
        toast.error("发送失败，请稍后重试或直接电话联系");
      }
    } catch {
      toast.error("网络异常，请稍后重试或直接电话联系");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-8">
      <SectionHeading
        eyebrow="Get in Touch"
        title="联系我"
        subtitle="有想法、有项目，或只是想打个招呼？我都很乐意收到你的消息。"
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* 左侧：联系信息 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <MarkdownRenderer content={contactContent} />

          {/* 联系卡片 */}
          <div className="mt-8 space-y-3">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const inner = (
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {card.label}
                    </p>
                    <p className="font-medium">{card.value}</p>
                  </div>
                </div>
              );
              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                <div key={card.label}>{inner}</div>
              );
            })}
          </div>

          {/* 社交媒体 */}
          <div className="mt-8">
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <MessageCircle className="h-4 w-4" />
              关注我的社交媒体
            </p>
            {socialLinks.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <SocialIcon name={s.icon} className="h-4 w-4" />
                  {s.name}
                </a>
              ))}
            </div>
          )}
          </div>
        </motion.div>

        {/* 右侧：联系表单 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <form
            onSubmit={handleSubmit}
            className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold">给我留言</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              填写下面的表单，我会通过你留下的联系方式回复你。
            </p>

            <div className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">姓名</Label>
                <Input
                  id="name"
                  placeholder="你的称呼"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  disabled={submitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact">联系方式（微信/QQ/电话）</Label>
                <Input
                  id="contact"
                  placeholder="留下你的微信/QQ/电话"
                  value={form.contact}
                  onChange={(e) =>
                    setForm({ ...form, contact: e.target.value })
                  }
                  disabled={submitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">留言内容</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="想和我聊点什么？"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  disabled={submitting}
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="mt-6 w-full bg-brand-gradient text-white shadow-lg shadow-primary/25 hover:opacity-90 disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  发送中...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  发送消息
                </>
              )}
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              留言将通过邮件转发给我，请放心填写
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
