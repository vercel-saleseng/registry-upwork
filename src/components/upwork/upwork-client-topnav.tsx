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
  Settings,
  LogOut,
  ExternalLink,
  Monitor,
  Sun,
  Moon,
  BellRing,
  MenuIcon,
  Gem,
  ArrowRight,
  Users,
  InfoIcon as Id,
} from "lucide-react";
import Image from "next/image";

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

export default function UpworkClientTopnav() {
  const [onlineStatus, setOnlineStatus] = React.useState(true);

  const navItems = [
    {
      trigger: "Hire talent",
      items: [
        { title: "Manage jobs and offers", href: "#" },
        { title: "Job posts and proposals", href: "#", active: true },
        { title: "Pending offers", href: "#" },
      ],
      sections: [
        {
          title: "Freelancer Management",
          items: [
            { title: "Find freelancers", href: "#" },
            { title: "Post a job", href: "#" },
            { title: "Search for talent", href: "#" },
            { title: "Talent you've hired", href: "#" },
            { title: "Talent you've saved", href: "#" },
            { title: "Bring talent to Upwork (Any Hire)", href: "#" },
          ],
        },
      ],
    },
    {
      trigger: "Manage work",
      items: [
        { title: "Active and past work", href: "#" },
        { title: "Your contracts", href: "#" },
      ],
      sections: [
        {
          items: [
            { title: "Hourly contract activity", href: "#" },
            { title: "Timesheets", href: "#" },
            { title: "Time by freelancer", href: "#" },
            { title: "Work diaries", href: "#" },
            { title: "Custom export", href: "#" },
          ],
        },
      ],
    },
    {
      trigger: "Reports",
      items: [
        { title: "Weekly financial summary", href: "#" },
        { title: "Transaction history", href: "#" },
        { title: "Spending by activity", href: "#" },
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
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
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
                  <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-green-600 data-[state=open]:text-green-600">
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
                          className="hover:text-green-600"
                        />
                      ))}
                      {navItem.sections?.map((section, idx) => (
                        <React.Fragment key={idx}>
                          <Separator className="my-2" />
                          {section?.title && (
                            <li className="text-xs font-semibold text-muted-foreground px-3 py-1">
                              {section.title}
                            </li>
                          )}
                          {section.items.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                              active={item.active ?? false}
                              external={item.external ?? false}
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
          {/* Combined Search and Talent Dropdown */}
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
                  Talent <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Talent</DropdownMenuItem>
                <DropdownMenuItem>Freelancers</DropdownMenuItem>
                <DropdownMenuItem>Agencies</DropdownMenuItem>
                <DropdownMenuItem>Projects</DropdownMenuItem>
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
                  <AvatarImage src="/generic-travel-logo.png" alt="Airbnb" />
                  <AvatarFallback>AB</AvatarFallback>
                  {/* Online status indicator for the main avatar if needed, based on image it's on the dropdown avatar */}
                  {/* The image shows the green dot on the avatar in the dropdown, not on the one in the nav bar directly, but it's common. Let's add it. */}
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
                </Avatar>
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72">
              <DropdownMenuLabel className="font-normal">
                <div className="flex items-center space-x-3 py-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/generic-travel-logo.png" alt="Airbnb" />
                    <AvatarFallback>AB</AvatarFallback>
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">Airbnb</p>
                    <p className="text-xs text-muted-foreground">Client</p>
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

              <div className="my-2 mx-2 p-3 bg-green-50 border border-green-200 rounded-md hover:border-green-300 cursor-pointer">
                <Link
                  href="#"
                  className="flex items-center justify-between text-sm font-medium text-green-700"
                >
                  <div className="flex items-center">
                    <Gem className="mr-2 h-4 w-4 text-green-600" />
                    Try Business Plus
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="text-xs text-green-600 mt-1">
                  Hire the best every time. Upgrade with no up-front costs.
                </p>
              </div>

              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Id className="mr-2 h-4 w-4" />
                Membership plan
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4" />
                Invite a coworker
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
                  <AvatarImage
                    src="/diverse-woman-smiling.png"
                    alt="Macy Adams"
                  />
                  <AvatarFallback>MA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xs font-medium">Macy Adams</p>
                  <p className="text-xs text-muted-foreground">Freelancer</p>
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
              <DropdownMenuItem className="text-red-600 hover:!text-red-700 hover:!bg-red-50 focus:!text-red-700 focus:!bg-red-50">
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
