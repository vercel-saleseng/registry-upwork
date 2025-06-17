"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import {
  Search,
  ChevronDown,
  HelpCircle,
  Bell,
  UserCircle,
  User,
  TrendingUp,
  Award,
  Zap,
  LayoutGrid,
  Settings,
  LogOut,
  ExternalLink,
  Monitor,
  Sun,
  Moon,
  BellRing,
} from "lucide-react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { active?: boolean; external?: boolean }
>(({ className, title, children, active, external, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            active ? "bg-accent text-accent-foreground" : "",
            className
          )}
          {...props}
        >
          <div className="flex items-center text-sm font-medium leading-none">
            <span>{title}</span>
            {external && (
              <ExternalLink className="inline-block h-3 w-3 ml-1.5 shrink-0" />
            )}
          </div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function UpworkFreelanceTopnav() {
  const [onlineStatus, setOnlineStatus] = React.useState(true);

  const navItems = [
    {
      trigger: "Find work",
      items: [
        { title: "Find work", href: "#" },
        { title: "Saved jobs", href: "#", active: true },
        { title: "Proposals and offers", href: "#" },
      ],
      sections: [
        {
          items: [
            { title: "Reach more clients", href: "#" },
            { title: "Your services", href: "#" },
            { title: "Promote with ads", href: "#", external: true },
            { title: "Direct Contracts", href: "#" },
          ],
        },
      ],
    },
    {
      trigger: "Deliver work",
      items: [
        { title: "Your active contracts", href: "#" },
        { title: "Contract history", href: "#" },
        { title: "Hourly work diary", href: "#" },
      ],
    },
    {
      trigger: "Manage finances",
      items: [
        { title: "Financial overview", href: "#" },
        { title: "Your reports", href: "#" },
        { title: "Billings and earnings", href: "#" },
        { title: "Transactions and invoices", href: "#" },
        { title: "Certificate of earnings", href: "#", external: true },
      ],
      sections: [
        {
          title: "Payments",
          items: [
            { title: "Payments", href: "#" },
            { title: "Withdraw earnings", href: "#" },
          ],
        },
        {
          title: "Taxes",
          items: [
            { title: "Taxes", href: "#" },
            { title: "Tax forms", href: "#" },
            { title: "Tax information", href: "#" },
          ],
        },
      ],
    },
  ];

  const notifications = [
    {
      id: 1,
      text: "A recent sign-in to your Upwork account (macyadams) from an unknown device or browser.",
      time: "5:12 PM",
      icon: <UserCircle className="h-5 w-5 text-muted-foreground" />,
    },
    {
      id: 2,
      text: "A recent sign-in to your Upwork account (macyadams) from an unknown device or browser.",
      time: "3:10 PM",
      icon: <UserCircle className="h-5 w-5 text-muted-foreground" />,
    },
    {
      id: 3,
      text: "Scheduled payment of $1500.50 from Upwork via Payoneer MasterCard.",
      time: "Yesterday",
      icon: <BellRing className="h-5 w-5 text-muted-foreground" />,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[var(--background)] shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-8">
          <Image
            src="/upwork-logo.svg"
            alt="Upwork Logo"
            width={102}
            height={28}
          />
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((navItem) => (
                <NavigationMenuItem key={navItem.trigger}>
                  <NavigationMenuTrigger className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] data-[state=open]:text-[var(--primary)]">
                    {navItem.trigger}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] lg:w-[500px]">
                      {navItem.items?.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                          active={item.active ?? false}
                          external={item.external ?? false}
                          className="hover:text-[var(--primary)]"
                        />
                      ))}
                      {navItem.sections?.map((section, idx) => (
                        <React.Fragment key={idx}>
                          <Separator className="my-2" />
                          {section.title && (
                            <li className="text-xs font-semibold text-[var(--muted-foreground)] px-3 py-1">
                              {section.title}
                            </li>
                          )}
                          {section.items.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                              active={item.active}
                              external={item.external}
                              className="hover:text-green-600"
                            />
                          ))}
                        </React.Fragment>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Link href="/messages" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-sm font-medium text-gray-700 hover:text-green-600"
                    )}
                  >
                    Messages
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Combined Search and Jobs Dropdown */}
          <div className="relative hidden sm:flex items-center border rounded-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground z-10" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-10 pr-2 py-2 h-10 w-[150px] lg:w-[200px] border-none focus-visible:ring-0 rounded-r-none"
            />
            <Separator orientation="vertical" className="h-6" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sm text-gray-700 hover:text-green-600 hover:bg-gray-100 rounded-l-none px-3 h-10"
                >
                  Jobs <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>All Job Posts</DropdownMenuItem>
                <DropdownMenuItem>My Saved Jobs</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* HelpCircle DropdownMenu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 hover:text-green-600 hover:bg-gray-100"
              >
                <HelpCircle className="h-5 w-5" />
                <span className="sr-only">Help</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuItem>Help center</DropdownMenuItem>
              <DropdownMenuItem>Your support requests</DropdownMenuItem>
              <DropdownMenuItem>What's new</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 hover:text-green-600 hover:bg-gray-100 relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1.5 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel className="font-semibold">
                Notifications
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {notifications.map((notif) => (
                <DropdownMenuItem
                  key={notif.id}
                  className="flex items-start space-x-2 py-2.5"
                >
                  {notif.icon}
                  <div className="flex flex-col">
                    <p className="text-xs leading-snug">{notif.text}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {notif.time}
                    </p>
                  </div>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center text-sm text-green-600 hover:!text-green-700">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="/diverse-woman-smiling.png"
                    alt="Macy Adams"
                  />
                  <AvatarFallback>MA</AvatarFallback>
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
                </Avatar>
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72">
              <DropdownMenuLabel className="font-normal">
                <div className="flex items-center space-x-3 py-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src="/diverse-woman-smiling.png"
                      alt="Macy Adams"
                    />
                    <AvatarFallback>MA</AvatarFallback>
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">Macy Adams</p>
                    <p className="text-xs text-muted-foreground">Freelancer</p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuItem className="flex items-center justify-between">
                <span className="text-sm">Online for messages</span>
                <Switch
                  checked={onlineStatus}
                  onCheckedChange={setOnlineStatus}
                />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Your profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <TrendingUp className="mr-2 h-4 w-4" />
                Stats and trends
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Award className="mr-2 h-4 w-4" />
                Membership plan
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Zap className="mr-2 h-4 w-4" />
                Connects
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LayoutGrid className="mr-2 h-4 w-4" />
                Apps and Offers
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Monitor className="mr-2 h-4 w-4" />
                  <span>Theme: Auto</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Sun className="mr-2 h-4 w-4" />
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Moon className="mr-2 h-4 w-4" />
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Monitor className="mr-2 h-4 w-4" />
                      System
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Account settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-xs font-medium text-muted-foreground">
                Switch accounts
              </DropdownMenuLabel>
              <DropdownMenuItem>
                <Avatar className="mr-2 h-6 w-6">
                  <AvatarImage src="/generic-travel-logo.png" alt="Airbnb" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xs font-medium">Airbnb</p>
                  <p className="text-xs text-muted-foreground">Client</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Avatar className="mr-2 h-6 w-6">
                  <AvatarImage
                    src="/creative-agency-logo.png"
                    alt="Creative Agency"
                  />
                  <AvatarFallback>CA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xs font-medium">Creative Agency</p>
                  <p className="text-xs text-muted-foreground">Agency</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600 hover:!text-red-700 hover:!bg-red-50">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Trigger (example, not fully implemented from screenshot) */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full text-gray-600 hover:text-green-600 hover:bg-gray-100"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

// Placeholder for MenuIcon if not available or for custom styling
function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
