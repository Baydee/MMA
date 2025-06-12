import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Calendar,
  BarChart3,
  Users,
  FileText,
  MessageSquare,
  Settings,
  Music,
  Briefcase,
  Shield,
  X,
} from "lucide-react";

interface SidebarProps {
  userRole: "artist" | "manager" | "agent" | "admin";
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ userRole, isOpen, onClose }: SidebarProps) => {
  const location = useLocation();

  const getNavigationItems = (role: string) => {
    const baseItems = [
      {
        path: "/dashboard",
        name: "Dashboard",
        icon: Home,
        description: "Overview",
      },
      {
        path: "/calendar",
        name: "Calendar",
        icon: Calendar,
        description: "Schedule",
      },
      {
        path: "/analytics",
        name: "Analytics",
        icon: BarChart3,
        description: "Performance",
      },
    ];

    const roleSpecificItems = {
      artist: [
        {
          path: "/portfolio",
          name: "Portfolio",
          icon: Music,
          description: "Public profile",
        },
        {
          path: "/fanmail",
          name: "Fan Messages",
          icon: MessageSquare,
          description: "Inbox",
        },
        {
          path: "/contracts",
          name: "Contracts",
          icon: FileText,
          description: "Agreements",
        },
      ],
      manager: [
        {
          path: "/artists",
          name: "Artists",
          icon: Users,
          description: "Manage talent",
        },
        {
          path: "/deals",
          name: "Deals",
          icon: Briefcase,
          description: "Negotiations",
        },
        {
          path: "/messages",
          name: "Messages",
          icon: MessageSquare,
          description: "Communications",
        },
      ],
      agent: [
        {
          path: "/deals",
          name: "Deal Tracker",
          icon: Briefcase,
          description: "Contract stages",
        },
        {
          path: "/contracts",
          name: "Contracts",
          icon: FileText,
          description: "Legal docs",
        },
        {
          path: "/clients",
          name: "Clients",
          icon: Users,
          description: "Artist roster",
        },
      ],
      admin: [
        {
          path: "/users",
          name: "User Management",
          icon: Users,
          description: "Platform users",
        },
        {
          path: "/moderation",
          name: "Moderation",
          icon: Shield,
          description: "Content review",
        },
        {
          path: "/reports",
          name: "Reports",
          icon: FileText,
          description: "System reports",
        },
      ],
    };

    return [...baseItems, ...roleSpecificItems[role]];
  };

  const navigationItems = getNavigationItems(userRole);

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b lg:hidden">
          <span className="font-semibold text-lg">Navigation</span>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600 border border-indigo-200"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                onClick={onClose}
              >
                <IconComponent className="h-5 w-5" />
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {item.description}
                  </div>
                </div>
                {isActive && (
                  <Badge variant="secondary" className="text-xs">
                    Active
                  </Badge>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Settings at bottom */}
        <div className="absolute bottom-4 left-4 right-4">
          <Link
            to="/settings"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            onClick={onClose}
          >
            <Settings className="h-5 w-5" />
            <div className="flex-1">
              <div className="font-medium">Settings</div>
              <div className="text-xs text-muted-foreground">Preferences</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
