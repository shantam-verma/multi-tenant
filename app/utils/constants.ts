import { DashboardIcon, LogsIcon, MetricsIcon } from "./icons";

type MenuItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

export const SIDEBAR_MENU: MenuItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: DashboardIcon,
  },
  {
    label: "Metrics",
    href: "/metrics",
    icon: MetricsIcon,
  },
  {
    label: "Logs",
    href: "/logs",
    icon: LogsIcon,
  },
];
