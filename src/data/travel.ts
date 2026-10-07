/**
 * 旅行足迹数据
 * 国内城市带经纬度，用于在中国地图上打点；深圳为家乡，单独高亮。
 * 国外城市不在中国版图内，单独列表展示。
 */

export type TravelPlace = {
  name: string;
  lng: number; // 经度
  lat: number; // 纬度
  region?: string; // 所属区域/路线
  isHome?: boolean; // 家乡
};

export const domesticPlaces: TravelPlace[] = [
  // 家乡
  { name: "深圳", lng: 114.07, lat: 22.55, region: "广东", isHome: true },
  // 广东周边
  { name: "广州", lng: 113.27, lat: 23.13, region: "广东" },
  { name: "佛山", lng: 113.12, lat: 23.02, region: "广东" },
  { name: "潮汕", lng: 116.68, lat: 23.35, region: "广东" },
  { name: "香港", lng: 114.17, lat: 22.32, region: "大湾区" },
  { name: "澳门", lng: 113.55, lat: 22.2, region: "大湾区" },
  // 华南
  { name: "桂林", lng: 110.29, lat: 25.27, region: "广西" },
  { name: "长沙", lng: 112.94, lat: 28.23, region: "湖南" },
  // 华东
  { name: "杭州", lng: 120.16, lat: 30.27, region: "浙江" },
  { name: "青岛", lng: 120.38, lat: 36.07, region: "山东" },
  { name: "威海", lng: 122.12, lat: 37.51, region: "山东" },
  // 西南
  { name: "重庆", lng: 106.55, lat: 29.56, region: "西南" },
  { name: "成都", lng: 104.07, lat: 30.57, region: "四川" },
  { name: "昆明", lng: 102.83, lat: 24.88, region: "云南" },
  { name: "大理", lng: 100.22, lat: 25.59, region: "云南" },
  { name: "丽江", lng: 100.23, lat: 26.86, region: "云南" },
  // 华北
  { name: "北京", lng: 116.41, lat: 39.9, region: "华北" },
  // 东北
  { name: "哈尔滨", lng: 126.64, lat: 45.75, region: "黑龙江" },
  { name: "呼伦贝尔", lng: 119.77, lat: 49.22, region: "内蒙古" },
  // 青甘大环线
  { name: "兰州", lng: 103.83, lat: 36.06, region: "青甘大环线" },
  { name: "西宁", lng: 101.78, lat: 36.62, region: "青甘大环线" },
  { name: "格尔木", lng: 94.91, lat: 36.4, region: "青甘大环线" },
  { name: "茫崖", lng: 90.85, lat: 38.69, region: "青甘大环线" },
  { name: "酒泉", lng: 98.5, lat: 39.73, region: "青甘大环线" },
  { name: "张掖", lng: 100.45, lat: 38.93, region: "青甘大环线" },
];

export type OverseasPlace = {
  name: string;
  country: string;
  note?: string;
};

export const overseasPlaces: OverseasPlace[] = [
  { name: "沙巴", country: "马来西亚", note: "婆罗洲海岛与神山" },
  { name: "清莱", country: "泰国", note: "白庙与北部小镇" },
  { name: "清迈", country: "泰国", note: "古城与慢生活" },
  { name: "曼谷", country: "泰国", note: "首都与大皇宫" },
];

export const travelStats = {
  domestic: domesticPlaces.length,
  overseas: overseasPlaces.length,
  provinces: new Set(domesticPlaces.map((p) => p.region)).size,
};
