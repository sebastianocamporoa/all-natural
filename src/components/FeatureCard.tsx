import { FC } from "react";
import { FeatureItem } from "../models/FeatureItem";

const FeatureCard: FC<FeatureItem> = ({ icon, desc, title }) => (
  <div style={{ backgroundColor: "#dfc990" }} className="flex gap-2 dark:bg-slate-600 px-4 py-6 font-theseasons">
    {icon}
    <div>
      <h2 className="font-medium text-xl dark:text-white">{title}</h2>
      <p className="text-gray-600 dark:text-white">{desc}</p>
    </div>
  </div>
);

export default FeatureCard;
