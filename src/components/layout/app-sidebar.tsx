import { LayoutDashboard, PlayCircle, Users } from "lucide-react";
import { Sidebar, SidebarContent } from "../ui/sidebar";
import { SidebarMain } from "./sidebar-main";

const items = [
  {
    title: "대시보드",
    url: "/dashboard",
    icon: LayoutDashboard,
    isActive: true,
    items: [
      {
        title: "통계 현황",
        url: "/dashboard/statistics",
      },
      {
        title: "실시간 모니터링",
        url: "/dashboard/monitoring",
      },
      {
        title: "사용자 분석",
        url: "/dashboard/user-analytics",
      },
      {
        title: "매출 리포트",
        url: "/dashboard/revenue",
      },
    ],
  },
  {
    title: "컨텐츠 관리",
    url: "/contents",
    icon: PlayCircle,
    items: [
      {
        title: "영상 관리",
        url: "/contents/videos",
      },
      {
        title: "시리즈 관리",
        url: "/contents/series",
      },
      {
        title: "카테고리 관리",
        url: "/contents/categories",
      },
      {
        title: "태그 관리",
        url: "/contents/tags",
      },
    ],
  },
  {
    title: "회원 관리",
    url: "/members",
    icon: Users,
    items: [
      {
        title: "회원 목록",
        url: "/members/list",
      },
      {
        title: "구독 관리",
        url: "/members/subscriptions",
      },
      {
        title: "접속 이력",
        url: "/members/access-logs",
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMain items={items} label="[SITE NAME] ADMIN" />
      </SidebarContent>
    </Sidebar>
  );
}
