'use client';
import { useState } from 'react';
import { BarChart3, ChevronFirst, MoreVertical, ChevronLast, LayoutDashboardIcon, CircleDollarSignIcon, StretchHorizontalIcon, ShoppingBagIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

interface SidebarItemProps {
  icon: JSX.Element;
  text: string;
  route: string;
  alert?: boolean;
  expanded: boolean;
}

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <h3 className={`font-bold shadow-md p-2 rounded-xl ${expanded ? '' : 'hidden'}`}>Crator CRM</h3>
          <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-200 hover:bg-gray-300">
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <ul className="flex-1 px-3">
          <SidebarItem icon={<LayoutDashboardIcon size={20} />} text="Dashboard" route="dashboard" alert={false} expanded={expanded} />
          <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" route="statistics" alert expanded={expanded} />
          <SidebarItem icon={<StretchHorizontalIcon size={20} />} text="Products" route="products" alert expanded={expanded} />
          <SidebarItem icon={<ShoppingBagIcon size={20} />} text="Orders" route="orders" alert expanded={expanded} />
          <SidebarItem icon={<CircleDollarSignIcon size={20} />} text="Billing" route="billing" alert expanded={expanded} />
        </ul>

        <div className="border-t flex p-3">
          <img src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg" alt="" className="w-10 h-10 rounded-md" />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}
          `}
          >
            <h4 className="font-semibold">Tehseem</h4>
            <Button variant="outline">Logout</Button>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, route, alert, expanded }: SidebarItemProps) {
  const pathname = usePathname();

  const isActiveCheck = (itemRoute: string) => {
    return pathname === `/${itemRoute}`;
  };

  const active = isActiveCheck(route);
  return (
    <Link href={`/${route}`}>
      {' '}
      <li
        className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800' : 'hover:bg-indigo-50 text-gray-600'}
    `}
      >
        {icon}
        <span className={`overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}>{text}</span>
        {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? '' : 'top-2'}`} />}

        {!expanded && (
          <div
            className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  );
}
