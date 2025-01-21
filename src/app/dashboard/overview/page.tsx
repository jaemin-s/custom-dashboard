import { useLoaderData } from "react-router";
import {
  Component as PieChart,
  PieData,
} from "../../../components/ui/pie-chart";
import { Component as BarChart } from "../../../components/ui/bar-interaction-chart";
import {
  Component as LineChart,
  LineData,
} from "../../../components/ui/line-chart";
import { Component as BarHorizontalChart } from "../../../components/ui/bar-horizontal-chart";

interface BaseComponentItem {
  type: string;
  title: string;
  subtitle: string;
}

interface PieChartItem extends BaseComponentItem {
  type: "pie";
  value: PieData;
}

interface LineChartItem extends BaseComponentItem {
  type: "line";
  value: LineData;
}

interface BarHorizontalChartItem extends BaseComponentItem {
  type: "bar-horizontal";
  value: LineData;
}

interface BarInteractionChartItem extends BaseComponentItem {
  type: "bar-interaction";
  value: LineData;
}

type ComponentItem =
  | PieChartItem
  | LineChartItem
  | BarHorizontalChartItem
  | BarInteractionChartItem;

type OverviewData = {
  componentList: ComponentItem[];
};

export default function DashboardOverview() {
  const overviewData = useLoaderData() as OverviewData;
  console.log("overviewData", overviewData);
  return (
    <div className="grid gap-10 lg:grid-cols-2 grid-cols-1 max-w-[1600px] w-full py-10 px-10 place-items-center">
      {overviewData.componentList.map((item, index) => {
        return item.type === "pie" ? (
          <PieChart
            key={index}
            title={item.title}
            subTitle={item.subtitle}
            chartData={item.value}
          />
        ) : item.type === "line" ? (
          <LineChart
            key={index}
            title={item.title}
            subTitle={item.subtitle}
            chartData={item.value}
          />
        ) : item.type === "bar-horizontal" ? (
          <BarHorizontalChart
            key={index}
            title={item.title}
            subTitle={item.subtitle}
          />
        ) : item.type === "bar-interaction" ? (
          <BarChart key={index} title={item.title} subTitle={item.subtitle} />
        ) : null;
      })}
    </div>
  );
}
