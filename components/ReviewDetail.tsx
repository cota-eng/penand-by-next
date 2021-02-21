import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { REVIEW } from "../types/review";
const ReviewDetail: React.FC<REVIEW> = ({
  id,
  title,
  stars_of_design,
  stars_of_durability,
  stars_of_usefulness,
  stars_of_function,
  stars_of_easy_to_get,
  avarage_star,
  good_point_text,
  bad_point_text,
  created_at,
}) => {
  const data = [
    {
      subject: "外観",
      A: stars_of_design,
    },
    {
      subject: "耐久",
      A: stars_of_durability,
    },
    {
      subject: "便利",
      A: stars_of_usefulness,
    },
    {
      subject: "機能",
      A: stars_of_function,
    },
    {
      subject: "入手",
      A: stars_of_easy_to_get,
    },
  ];
  return (
    <div>
      <div className="flex flex-col max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div className="">
          <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
          <p className="mt-2 text-gray-600">Average:{avarage_star}</p>
        </div>
        <div className="">
          {/* <ResponsiveContainer> */}
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius={50}
            width={200}
            height={200}
            data={data}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="User"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Tooltip />
          </RadarChart>
          {/* </ResponsiveContainer> */}
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">GoodPoint</h2>
          <p>{good_point_text}</p>
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">BadPoint</h2>
          <p>{bad_point_text}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
