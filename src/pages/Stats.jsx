import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const Stats = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("timeline")) || [];

    setTimeline(saved);
  }, []);

  const callCount = timeline.filter(
    (item) => item.action === "Call"
  ).length;

  const textCount = timeline.filter(
    (item) => item.action === "Text"
  ).length;

  const videoCount = timeline.filter(
    (item) => item.action === "Video"
  ).length;

  const data = [
    { name: "Text", value: textCount },
    { name: "Call", value: callCount },
    { name: "Video", value: videoCount },
  ];

  const COLORS = [
    "#7E35E1", // purple
    "#244D3F", // dark green
    "#37A163", // green
  ];

  return (
    <section className="bg-[#F8FAFC] min-h-[calc(100vh-80px)] py-16">
      <div className="max-w-[1110px] mx-auto px-4">

        {/* Heading */}
        <h1 className="text-[72px] font-bold text-[#0F172A] leading-none">
          Friendship Analytics
        </h1>

        {/* Chart Card */}
        <div className="mt-10 bg-white rounded-xl shadow-sm border border-gray-100 px-10 py-8">

          <h3 className="text-[22px] font-semibold text-[#244D3F]">
            By Interaction Type
          </h3>

          <div className="h-[420px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={90}
                  outerRadius={130}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>

                <Tooltip />

                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  wrapperStyle={{
                    fontSize: "20px",
                    color: "#64748B",
                    paddingTop: "20px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;