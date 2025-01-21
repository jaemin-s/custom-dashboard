import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
// const chartData = [
//   { browser: "chrome", visitors: 275, fill: "#2a9d90" },
//   { browser: "safari", visitors: 200, fill: "#e76e50" },
//   { browser: "firefox", visitors: 187, fill: "#274754" },
//   { browser: "edge", visitors: 173, fill: "#e8c468" },
//   { browser: "other", visitors: 90, fill: "#f4a462" },
// ];
type PieDataItem = {
  browser: string;
  visitors: number;
  fill: string;
};

export type PieData = PieDataItem[];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#2a9d90",
  },
  safari: {
    label: "Safari",
    color: "#e76e50",
  },
  firefox: {
    label: "Firefox",
    color: "#274754",
  },
  edge: {
    label: "Edge",
    color: "#e8c468",
  },
  other: {
    label: "Other",
    color: "#f4a462",
  },
} satisfies ChartConfig;

export function Component({
  className = "",
  title,
  subTitle,
  chartData,
}: {
  className?: string;
  title: string;
  subTitle: string;
  chartData: PieData;
}) {
  return (
    <Card className={"flex flex-col w-full" + className}>
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subTitle}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
