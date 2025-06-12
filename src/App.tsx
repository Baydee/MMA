import { Suspense, useState } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AuthForm from "./components/auth/AuthForm";
import AnalyticsDashboard from "./components/dashboard/AnalyticsDashboard";
import CalendarView from "./components/dashboard/CalendarView";
import ArtistDashboard from "./components/dashboard/ArtistDashboard";
import ManagerDashboard from "./components/dashboard/ManagerDashboard";
import TopNavigation from "./components/layout/TopNavigation";
import Sidebar from "./components/layout/Sidebar";
import { Button } from "./components/ui/button";
import { Menu } from "lucide-react";
import routes from "tempo-routes";

// Mock user data - in real app this would come from auth context
const mockUser = {
  role: "artist" as "artist" | "manager" | "agent" | "admin",
  name: "Alex Rivera",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
  isAuthenticated: true,
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentUser] = useState(mockUser);

  // Routes that don't need the dashboard layout
  const publicRoutes = ["/", "/login", "/register"];
  const isPublicRoute = publicRoutes.includes(window.location.pathname);

  const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar
          userRole={currentUser.role}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <div className="flex-1 flex flex-col">
          <TopNavigation
            userRole={currentUser.role}
            userName={currentUser.name}
            userAvatar={currentUser.avatar}
          />
          {/* Mobile menu button */}
          <div className="lg:hidden p-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    );
  };

  const getRoleDashboard = (role: string) => {
    switch (role) {
      case "artist":
        return <ArtistDashboard />;
      case "manager":
        return <ManagerDashboard />;
      case "agent":
        return <ArtistDashboard />; // Placeholder - will create AgentDashboard later
      case "admin":
        return <ArtistDashboard />; // Placeholder - will create AdminDashboard later
      default:
        return <ArtistDashboard />;
    }
  };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/register" element={<AuthForm />} />
          <Route
            path="/dashboard"
            element={
              <DashboardWrapper>
                {getRoleDashboard(currentUser.role)}
              </DashboardWrapper>
            }
          />
          <Route
            path="/analytics"
            element={
              <DashboardWrapper>
                <AnalyticsDashboard userRole={currentUser.role} />
              </DashboardWrapper>
            }
          />
          <Route
            path="/calendar"
            element={
              <DashboardWrapper>
                <CalendarView />
              </DashboardWrapper>
            }
          />
          {/* Role-specific routes */}
          <Route
            path="/portfolio"
            element={
              <DashboardWrapper>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Portfolio</h1>
                  <p className="text-muted-foreground">
                    Manage your public profile
                  </p>
                </div>
              </DashboardWrapper>
            }
          />
          <Route
            path="/fanmail"
            element={
              <DashboardWrapper>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Fan Messages</h1>
                  <p className="text-muted-foreground">Your fan inbox</p>
                </div>
              </DashboardWrapper>
            }
          />
          <Route
            path="/contracts"
            element={
              <DashboardWrapper>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Contracts</h1>
                  <p className="text-muted-foreground">
                    Manage your agreements
                  </p>
                </div>
              </DashboardWrapper>
            }
          />
          <Route
            path="/artists"
            element={
              <DashboardWrapper>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Artists</h1>
                  <p className="text-muted-foreground">
                    Manage your talent roster
                  </p>
                </div>
              </DashboardWrapper>
            }
          />
          <Route
            path="/deals"
            element={
              <DashboardWrapper>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Deals</h1>
                  <p className="text-muted-foreground">
                    Track negotiations and contracts
                  </p>
                </div>
              </DashboardWrapper>
            }
          />
          <Route
            path="/settings"
            element={
              <DashboardWrapper>
                <div className="p-6">
                  <h1 className="text-2xl font-bold">Settings</h1>
                  <p className="text-muted-foreground">
                    Manage your preferences
                  </p>
                </div>
              </DashboardWrapper>
            }
          />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
