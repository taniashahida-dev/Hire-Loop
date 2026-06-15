

import { Bell,Briefcase, Envelope, Gear, House, Magnifier, Person, LayoutSideContent } from "@gravity-ui/icons";
import {Button, Drawer} from "@heroui/react";
import Link from "next/link";

export function DashboardSidebar() {
    const navItems = [
        { icon: House, href: "/dashboard/recruiter", label: "Home" },
        { icon: Magnifier, href: "/dashboard/recruiter/jobs", label: "Jobs" },
        { icon: Bell, href: "/dashboard/recruiter/jobs/new", label: "Post A Job" },
        { icon: Briefcase, href: "/dashboard/recruiter/company", label: "Company Profile" },
        { icon: Envelope, href: "/messages", label: "Messages" },
        { icon: Person, href: "/profile", label: "Profile" },
        { icon: Gear, href: "/settings", label: "Settings" },
    ];
  const sidebarItems =   <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    href={item.href}
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    type="button"
                  >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                  </Link>
                ))}
              </nav>

  return (

    <>

<aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
  {sidebarItems}
</aside>

    <Drawer>

      <Button className='lg:hidden' variant="secondary">
        <LayoutSideContent />
        Sidebar
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body >
            {sidebarItems}
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer></>
  );
}