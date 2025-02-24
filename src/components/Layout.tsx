
import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { CalendarIcon, MessageSquare, FileText, User, LogOut } from "lucide-react";

const Layout = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/workspace", label: "Workspace", icon: MessageSquare },
    { path: "/calendar", label: "Calendar", icon: CalendarIcon },
    { path: "/permissions", label: "Permissions", icon: FileText },
    { path: "/profile", label: "Profile", icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <Link to="/" className="text-xl font-semibold text-primary">
              CampConnect
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive(path) ? "text-primary" : "text-gray-600"
                  )}
                >
                  {label}
                </Link>
              ))}
              <button className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                <LogOut className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className={cn(
                  "w-full h-0.5 bg-gray-600 transition-transform",
                  isOpen && "rotate-45 translate-y-2"
                )} />
                <span className={cn(
                  "w-full h-0.5 bg-gray-600 transition-opacity",
                  isOpen && "opacity-0"
                )} />
                <span className={cn(
                  "w-full h-0.5 bg-gray-600 transition-transform",
                  isOpen && "-rotate-45 -translate-y-2"
                )} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden",
          isOpen ? "block" : "hidden"
        )}>
          <div className="px-4 py-2 space-y-1 bg-white border-t">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-lg",
                  isActive(path)
                    ? "bg-primary/10 text-primary"
                    : "text-gray-600 hover:bg-gray-100"
                )}
                onClick={() => setIsOpen(false)}
              >
                <Icon className="h-5 w-5 mr-3" />
                {label}
              </Link>
            ))}
            <button
              className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-16 min-h-[calc(100vh-4rem)] animate-fadeIn">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

