import { useEffect, useMemo, useState } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import { useTheme } from "next-themes";
import {
  domesticPlaces,
  overseasPlaces,
  travelStats,
} from "@/data/travel";
import { Plane, MapPin, Home } from "lucide-react";

/**
 * 中国地图足迹展示
 * 在中国地图上点亮去过的城市，深圳（家乡）单独高亮；
 * 国外城市不在中国版图，单独以标签形式列出。
 * 地图 GeoJSON 优先用本地（public/china.json），外部 DataV 做兜底。
 */
export function TravelMap() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [mapReady, setMapReady] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let mounted = true;
    // 仅注册一次
    if (echarts.getMap("china")) {
      setMapReady(true);
      return;
    }
    // 优先本地文件（最稳定），失败再尝试在线 DataV
    const sources = [
      `${import.meta.env.BASE_URL}china.json`,
      "https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json",
    ];
    const tryLoad = (i: number) => {
      if (i >= sources.length) {
        if (mounted) setLoadError(true);
        return;
      }
      fetch(sources[i])
        .then((r) => {
          if (!r.ok) throw new Error("geo fetch failed");
          return r.json();
        })
        .then((geo) => {
          echarts.registerMap("china", geo);
          if (mounted) setMapReady(true);
        })
        .catch(() => tryLoad(i + 1));
    };
    tryLoad(0);
    return () => {
      mounted = false;
    };
  }, []);

  const option = useMemo(() => {
    const home = domesticPlaces.filter((p) => p.isHome);
    const visited = domesticPlaces.filter((p) => !p.isHome);

    const areaColor = isDark ? "#1e2030" : "#eef2f7";
    const borderColor = isDark ? "#3a3d52" : "#cdd5e0";
    const pointColor = isDark ? "#818cf8" : "#6366f1";
    const homeColor = "#f43f5e";

    return {
      tooltip: {
        trigger: "item",
        backgroundColor: isDark ? "#1e2030" : "#ffffff",
        borderColor: borderColor,
        textStyle: { color: isDark ? "#e5e7eb" : "#1f2937" },
        formatter: (p: { name?: string }) => p.name ?? "",
      },
      geo: {
        map: "china",
        roam: true,
        scaleLimit: { min: 1, max: 6 },
        zoom: 1.2,
        itemStyle: { areaColor, borderColor },
        emphasis: {
          itemStyle: { areaColor },
          label: { show: false },
        },
        select: { disabled: true },
      },
      series: [
        {
          name: "去过的城市",
          type: "effectScatter",
          coordinateSystem: "geo",
          data: visited.map((p) => ({
            name: p.name,
            value: [p.lng, p.lat, 1],
          })),
          symbolSize: 7,
          rippleEffect: { brushType: "stroke", scale: 3 },
          showEffectOn: "render",
          itemStyle: {
            color: pointColor,
            shadowBlur: 10,
            shadowColor: pointColor,
          },
          label: {
            show: true,
            formatter: "{b}",
            position: "right",
            fontSize: 10,
            color: isDark ? "#cbd5e1" : "#475569",
          },
        },
        {
          name: "家乡",
          type: "effectScatter",
          coordinateSystem: "geo",
          data: home.map((p) => ({
            name: `${p.name}（家）`,
            value: [p.lng, p.lat, 1],
          })),
          symbolSize: 12,
          rippleEffect: { brushType: "stroke", scale: 4 },
          showEffectOn: "render",
          itemStyle: {
            color: homeColor,
            shadowBlur: 12,
            shadowColor: homeColor,
          },
          label: {
            show: true,
            formatter: "🏠 {b}",
            position: "right",
            fontSize: 11,
            fontWeight: "bold",
            color: homeColor,
          },
          zlevel: 2,
        },
      ],
    } as echarts.EChartsCoreOption;
  }, [isDark]);

  return (
    <div className="space-y-6">
      {/* 数据统计 */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard
          icon={<MapPin className="h-4 w-4" />}
          value={travelStats.domestic}
          label="国内城市"
        />
        <StatCard
          icon={<Plane className="h-4 w-4" />}
          value={travelStats.overseas}
          label="海外目的地"
        />
        <StatCard
          icon={<Home className="h-4 w-4" />}
          value="深圳"
          label="家乡"
        />
      </div>

      {/* 地图 */}
      <div className="overflow-hidden rounded-2xl border border-border bg-card p-2">
        {mapReady ? (
          <ReactECharts
            option={option}
            style={{ height: "460px", width: "100%" }}
            opts={{ renderer: "canvas" }}
          />
        ) : loadError ? (
          <div className="flex h-[460px] flex-col items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-8 w-8 text-primary/50" />
            <p>地图加载失败，但足迹都在下方列表里 👇</p>
            <p className="text-xs">可刷新重试</p>
          </div>
        ) : (
          <div className="flex h-[460px] items-center justify-center text-sm text-muted-foreground">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            <span className="ml-3">地图加载中...</span>
          </div>
        )}
      </div>
      <p className="text-center text-xs text-muted-foreground">
        💡 地图可拖动缩放，鼠标悬停查看城市名
      </p>

      {/* 国外足迹 */}
      <div>
        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
          <Plane className="h-4 w-4 text-primary" />
          海外足迹
        </h4>
        <div className="grid gap-3 sm:grid-cols-2">
          {overseasPlaces.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3"
            >
              <div>
                <p className="font-medium">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.country}</p>
              </div>
              {p.note && (
                <span className="text-xs text-muted-foreground">{p.note}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string | number;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 text-center">
      <div className="mb-1 flex items-center justify-center text-primary">
        {icon}
      </div>
      <p className="text-xl font-extrabold text-gradient">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
