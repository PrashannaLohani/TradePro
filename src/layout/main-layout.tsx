import { Outlet } from "react-router-dom";
import { ThemeToggle } from "../components/theme-toggle";

export default function MainLayout() {
  return (
    <div className='min-h-screen bg-background'>
      <nav className='bg-card shadow-sm border-b border-border'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex items-center'>
              <h1 className='text-xl font-semibold text-foreground'>
                TradePro
              </h1>
            </div>
            <div className='flex items-center space-x-4'>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
      <main className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <Outlet />
      </main>
    </div>
  );
}
