import { Suspense, useState, useEffect } from "react";
import { useRoutes, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home";
import RoleSelectionLanding from "./components/RoleSelectionLanding";
import FanLanding from "./components/FanLanding";
import AuthForm from "./components/auth/AuthForm";
import AnalyticsDashboard from "./components/dashboard/AnalyticsDashboard";
import CalendarView from "./components/dashboard/CalendarView";
import ArtistDashboard from "./components/dashboard/ArtistDashboard";
import ManagerDashboard from "./components/dashboard/ManagerDashboard";
import TopNavigation from "./components/layout/TopNavigation";
import Sidebar from "./components/layout/Sidebar";
import FanmailInbox from "./components/fanmail/FanmailInbox";
import PublicArtistPortfolio from "./components/portfolio/PublicArtistPortfolio";
import ContractManagement from "./components/contracts/ContractManagement";
import SettingsPage from "./components/settings/SettingsPage";
import { Button } from "./components/ui/button";
import { Menu } from "lucide-react";
import routes from "tempo-routes";

// Mock user data - in real app this would come from auth context
const mockUser = {
  role: "artist" as "artist" | "manager",
  name: "Alex Rivera",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
  isAuthenticated: true,
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(mockUser);
  const location = useLocation();

  // Check for role parameter in URL and update user role
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const roleParam = urlParams.get("role");
    if (roleParam && (roleParam === "artist" || roleParam === "manager")) {
      setCurrentUser((prev) => ({
        ...prev,
        role: roleParam as "artist" | "manager",
      }));
    }
  }, [location.search]);

  // Routes that don't need the dashboard layout
  const publicRoutes = ["/", "/login", "/register"];
  const isPublicRoute = publicRoutes.includes(window.location.pathname);

  const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="min-h-screen bg-gray-50">
        <Sidebar
          userRole={currentUser.role}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <div className="lg:ml-64 flex flex-col min-h-screen">
          <TopNavigation
            userRole={currentUser.role}
            userName={currentUser.name}
            userAvatar={currentUser.avatar}
            onMenuClick={() => setSidebarOpen(true)}
          />
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
      default:
        return <ArtistDashboard />;
    }
  };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<RoleSelectionLanding />} />
          <Route path="/professional" element={<Home />} />
          <Route path="/fan" element={<FanLanding />} />
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
                <PublicArtistPortfolio />
              </DashboardWrapper>
            }
          />
          <Route
            path="/fanmail"
            element={
              <DashboardWrapper>
                <FanmailInbox userRole={currentUser.role} />
              </DashboardWrapper>
            }
          />
          <Route
            path="/contracts"
            element={
              <DashboardWrapper>
                <ContractManagement userRole={currentUser.role} />
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
                <SettingsPage userRole={currentUser.role} />
              </DashboardWrapper>
            }
          />
          <Route
            path="/artist/:artistName"
            element={<PublicArtistPortfolio />}
          />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
