import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  Briefcase,
  Mail,
  Calendar,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

const ManagerDashboard = () => {
  const quickStats = [
    {
      title: "Artists Managed",
      value: "8",
      subtitle: "2 new this month",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Deals in Progress",
      value: "12",
      subtitle: "4 closing this week",
      icon: Briefcase,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Unread Messages",
      value: "23",
      subtitle: "8 urgent",
      icon: Mail,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Upcoming Events",
      value: "15",
      subtitle: "Next 30 days",
      icon: Calendar,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  const managedArtists = [
    {
      name: "Alex Rivera",
      genre: "Pop",
      status: "Active",
      earnings: "$12,450",
      growth: "+18%",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    },
    {
      name: "Maya Chen",
      genre: "R&B",
      status: "Active",
      earnings: "$8,920",
      growth: "+12%",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maya",
    },
    {
      name: "Jordan Smith",
      genre: "Hip Hop",
      status: "Active",
      earnings: "$15,680",
      growth: "+25%",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan",
    },
    {
      name: "Sofia Martinez",
      genre: "Electronic",
      status: "New",
      earnings: "$3,240",
      growth: "New",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sofia",
    },
  ];

  const recentActivity = [
    {
      type: "deal",
      message: "Alex Rivera signed new streaming deal with Spotify",
      time: "2 hours ago",
      status: "success",
    },
    {
      type: "event",
      message: "Maya Chen's concert tickets sold out",
      time: "4 hours ago",
      status: "success",
    },
    {
      type: "message",
      message: "New collaboration request for Jordan Smith",
      time: "6 hours ago",
      status: "pending",
    },
    {
      type: "contract",
      message: "Sofia Martinez contract needs review",
      time: "1 day ago",
      status: "urgent",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "urgent":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="bg-background p-6 space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Manager Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your artists and track their success
          </p>
        </div>
        <Badge
          variant="outline"
          className="bg-purple-50 text-purple-700 border-purple-200"
        >
          Manager Portal
        </Badge>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {stat.subtitle}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <IconComponent className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Team Overview */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Artists Under Management
            </CardTitle>
            <Button variant="outline" size="sm">
              View All Artists
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {managedArtists.map((artist, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={artist.avatar} alt={artist.name} />
                      <AvatarFallback>
                        {artist.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{artist.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {artist.genre}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{artist.earnings}</p>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          artist.status === "New" ? "secondary" : "outline"
                        }
                        className="text-xs"
                      >
                        {artist.status}
                      </Badge>
                      {artist.growth !== "New" && (
                        <span className="text-xs text-green-600 flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {artist.growth}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity Feed */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  {getStatusIcon(activity.status)}
                  <div className="flex-1">
                    <p className="text-sm">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              View All Activity
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-900">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Briefcase className="mr-2 h-4 w-4" />
                Propose New Engagement
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <CheckCircle className="mr-2 h-4 w-4" />
                Approve Pending Fanmail
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Add New Artist
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-900">
              Performance Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Total Revenue</span>
                <span className="text-lg font-bold text-green-600">
                  $45,290
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Active Deals</span>
                <span className="text-lg font-bold text-blue-600">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Success Rate</span>
                <span className="text-lg font-bold text-purple-600">87%</span>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                View Detailed Reports
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ManagerDashboard;
