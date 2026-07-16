import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function InvestmentGrowthChart({ chartData, usd }) {
  return (
    <div className="mt-6 rounded-sm border border-[#A3FFD6]/25 bg-void/60 p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#889988]">
        // Trajectory
      </p>
      <div className="mt-3 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#A3FFD620" strokeDasharray="3 3" />
            <XAxis
              dataKey="year"
              stroke="#889988"
              tick={{ fontSize: 11, fontFamily: "JetBrains Mono" }}
              label={{
                value: "Year",
                position: "insideBottom",
                offset: -2,
                fill: "#889988",
                fontSize: 11,
              }}
            />
            <YAxis
              stroke="#889988"
              tick={{ fontSize: 11, fontFamily: "JetBrains Mono" }}
              tickFormatter={usd}
              width={70}
            />
            <Tooltip
              contentStyle={{
                background: "#0E1A0E",
                border: "1px solid #A3FFD640",
                borderRadius: 4,
                color: "#E0E0E0",
                fontFamily: "JetBrains Mono",
              }}
              formatter={(value) => usd(value)}
              labelFormatter={(label) => `Year ${label}`}
            />
            <Line
              type="monotone"
              dataKey="contributions"
              name="Contributions"
              stroke="#889988"
              strokeWidth={1.5}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="value"
              name="Total Value"
              stroke="#A3FFD6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
