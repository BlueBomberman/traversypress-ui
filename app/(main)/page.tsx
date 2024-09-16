import DashboardCard, { DashboardCardProps } from "@/components/dashboard/DashboardCard";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
import PostsTable from "@/components/posts/PostsTable";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";

const cards: DashboardCardProps[] = [
  {
    title: "Posts",
    count: 100,
    icon: <Newspaper className="text-slate-500" size={72} />
  },
  {
    title: "Categories",
    count: 12,
    icon: <Folder className="text-slate-500" size={72} />
  },
  {
    title: "Users",
    count: 750,
    icon: <User className="text-slate-500" size={72} />
  },
  {
    title: "Coments",
    count: 1200,
    icon: <MessageCircle className="text-slate-500" size={72} />
  },
]

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between gap-5 mb-5">
        {cards.map(({ count, icon, title }) => (
          <DashboardCard
            title={title}
            count={count}
            icon={icon}
            key={title}
          />
        ))}
      </div>

      <AnalyticsChart />
      <PostsTable title="Latest Posts" limit={5} />
    </>
  );
}
