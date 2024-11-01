import { TbTruckDelivery, TbDiscount2 } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { FC } from "react";
import FeatureCard from "./FeatureCard";

const data = [
  {
    icon: <TbTruckDelivery className="text-4xl dark:text-white" />,
    title: "Entrega Gratis",
    desc: "En pedidos superiores a S/ 100",
  },
  {
    icon: <RiRefund2Fill className="text-4xl dark:text-white" />,
    title: "Devoluciones y Reembolsos",
    desc: "Por errores en el producto",
  },
  {
    icon: <TbDiscount2 className="text-4xl dark:text-white" />,
    title: "Descuento",
    desc: "En pedidos superiores a S/ 100",
  },
  {
    icon: <MdSupportAgent className="text-4xl dark:text-white" />,
    title: "Soporte 24/7",
    desc: "Contáctanos las 24 horas del día",
  },
];

const Features: FC = () => (
  <div className="px-4 container grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-8 mx-auto">
    {data.map((item) => (
      <FeatureCard
        key={item.title}
        icon={item.icon}
        title={item.title}
        desc={item.desc}
      />
    ))}
  </div>
);

export default Features;
