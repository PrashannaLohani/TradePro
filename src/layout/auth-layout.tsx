import { Outlet } from "react-router-dom";
import { ThemeToggle } from "../components/theme-toggle";
import {
  HiLightningBolt,
  HiOutlineTrendingUp,
  HiPresentationChartLine,
  HiShieldCheck,
} from "react-icons/hi";

const items = [
  {
    id: 1,
    icon: <HiLightningBolt className='size-6' />,
    title: "Lightning Fast Execution",
    subTitle: "Execute Trade in milliseconds",
  },
  {
    id: 2,
    icon: <HiShieldCheck className='size-6' />,
    title: "Bank Level Security",
    subTitle: "Your funds are protected",
  },
  {
    id: 3,
    icon: <HiPresentationChartLine className='size-6' />,
    title: "Advanced Analytics",
    subTitle: "Professional trading tools",
  },
];
export default function AuthLayout() {
  return (
    <div className='min-h-screen grid grid-cols-2'>
      <div className='min-h-screen bg-secondary flex items-center px-14'>
        <div className='flex flex-col gap-12'>
          <div className='space-y-8'>
            <div className='p-5 bg-gray-200/30 rounded-2xl w-fit'>
              <HiOutlineTrendingUp className='size-12' />
            </div>
            <div className='space-y-4'>
              <p className='text-5xl font-black'>TradePro</p>
              <p className='text-2xl font-medium'>Advance Trading Platform</p>
            </div>
          </div>
          <div className='space-y-6'>
            {items?.map((item) => (
              <div
                key={item.id}
                className='flex items-center gap-4'
              >
                <div className='p-5 bg-gray-200/30 rounded-2xl w-fit'>
                  {item.icon}
                </div>
                <div>
                  <p className='text-xl font-bold'>{item.title}</p>
                  <p className='text-lg font-semibol'>{item.subTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='min-h-screen bg-background p-6'>
        <div className='sm:mx-auto sm:w-full'>
          <div className='flex justify-end mb-4'>
            <ThemeToggle />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
