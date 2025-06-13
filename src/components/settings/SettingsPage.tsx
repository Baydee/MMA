import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Shield,
  Bell,
  Link,
  Camera,
  Save,
  Key,
  Smartphone,
  Monitor,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface SettingsPageProps {
  userRole?: "artist" | "manager";
}

const SettingsPage = ({ userRole = "artist" }: SettingsPageProps) => {
  const [profileData, setProfileData] = useState({
    name: "Alex Rivera",
    email: "alex.rivera@email.com",
    bio: "Multi-talented singer-songwriter with a passion for creating meaningful music.",
    location: "Los Angeles, CA",
    website: "https://alexrivera.com",
    skills: "Vocals, Songwriting, Guitar, Piano",
  });

  const [notifications, setNotifications] = useState({
    emailNewFanmail: true,
    emailBookingRequests: true,
    emailContractUpdates: true,
    inAppMessages: true,
    inAppCalendarReminders: true,
    inAppSystemUpdates: false,
    smsUrgentOnly: true,
    smsBookingConfirmations: false,
  });

  const [connectedApps] = useState([
    {
      name: "Spotify",
      status: "connected",
      lastSync: "2 hours ago",
      icon: "🎵",
    },
    {
      name: "Apple Music",
      status: "connected",
      lastSync: "1 day ago",
      icon: "🍎",
    },
    {
      name: "YouTube Music",
      status: "disconnected",
      lastSync: "Never",
      icon: "📺",
    },
    {
      name: "Instagram",
      status: "connected",
      lastSync: "30 minutes ago",
      icon: "📸",
    },
    {
      name: "TikTok",
      status: "pending",
      lastSync: "Connecting...",
      icon: "🎬",
    },
  ]);

  const [loginActivity] = useState([
    {
      device: "MacBook Pro",
      location: "Los Angeles, CA",
      time: "Current session",
      status: "active",
    },
    {
      device: "iPhone 15",
      location: "Los Angeles, CA",
      time: "2 hours ago",
      status: "recent",
    },
    {
      device: "iPad",
      location: "New York, NY",
      time: "3 days ago",
      status: "recent",
    },
  ]);

  const handleSaveProfile = () => {
    console.log("Saving profile:", profileData);
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications({ ...notifications, [key]: value });
  };

  const getAppStatusColor = (status: string) => {
    switch (status) {
      case "connected":
        return "bg-green-100 text-green-800";
      case "disconnected":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getAppStatusIcon = (status: string) => {
    switch (status) {
      case "connected":
        return <CheckCircle className="h-4 w-4" />;
      case "disconnected":
        return <AlertCircle className="h-4 w-4" />;
      case "pending":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-background p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground mt-1">
            Manage your account preferences and security settings
          </p>
        </div>
        <Badge
          variant="outline"
          className="bg-blue-50 text-blue-700 border-blue-200"
        >
          {userRole.charAt(0).toUpperCase() + userRole.slice(1)} Account
        </Badge>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="flex items-center gap-2"
          >
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="apps" className="flex items-center gap-2">
            <Link className="h-4 w-4" />
            Connected Apps
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=alex"
                      alt="Profile"
                    />
                    <AvatarFallback className="text-lg">
                      {profileData.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" size="sm">
                      <Camera className="h-4 w-4 mr-2" />
                      Change Photo
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">
                      JPG, GIF or PNG. 1MB max.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Full Name
                    </label>
                    <Input
                      value={profileData.name}
                      onChange={(e) =>
                        setProfileData({ ...profileData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={profileData.email}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Bio</label>
                  <Textarea
                    value={profileData.bio}
                    onChange={(e) =>
                      setProfileData({ ...profileData, bio: e.target.value })
                    }
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Location
                    </label>
                    <Input
                      value={profileData.location}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          location: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Website
                    </label>
                    <Input
                      value={profileData.website}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          website: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {userRole === "artist" && (
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Skills & Instruments
                    </label>
                    <Input
                      value={profileData.skills}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          skills: e.target.value,
                        })
                      }
                      placeholder="e.g., Vocals, Guitar, Piano, Songwriting"
                    />
                  </div>
                )}

                <Button onClick={handleSaveProfile}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Account Type</span>
                  <Badge
                    variant="outline"
                    className="bg-purple-100 text-purple-800"
                  >
                    {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    Verification Status
                  </span>
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800"
                  >
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Member Since</span>
                  <span className="text-sm text-muted-foreground">
                    January 2023
                  </span>
                </div>
                <Button variant="outline" className="w-full">
                  Upgrade Account
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  Password & Authentication
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Current Password
                  </label>
                  <Input type="password" placeholder="Enter current password" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    New Password
                  </label>
                  <Input type="password" placeholder="Enter new password" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Confirm New Password
                  </label>
                  <Input type="password" placeholder="Confirm new password" />
                </div>
                <Button className="w-full">Update Password</Button>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-medium">Two-Factor Authentication</h4>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <Button variant="outline" className="w-full">
                    <Smartphone className="h-4 w-4 mr-2" />
                    Setup Authenticator App
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  Login Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {loginActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{activity.device}</p>
                        <p className="text-sm text-muted-foreground">
                          {activity.location}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                      <Badge
                        variant={
                          activity.status === "active" ? "default" : "outline"
                        }
                      >
                        {activity.status === "active" ? "Current" : "Recent"}
                      </Badge>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    View All Activity
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">New Fanmail</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified when you receive new fan messages
                    </p>
                  </div>
                  <Switch
                    checked={notifications.emailNewFanmail}
                    onCheckedChange={(checked) =>
                      handleNotificationChange("emailNewFanmail", checked)
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Booking Requests</p>
                    <p className="text-sm text-muted-foreground">
                      Receive emails for new booking inquiries
                    </p>
                  </div>
                  <Switch
                    checked={notifications.emailBookingRequests}
                    onCheckedChange={(checked) =>
                      handleNotificationChange("emailBookingRequests", checked)
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Contract Updates</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified about contract status changes
                    </p>
                  </div>
                  <Switch
                    checked={notifications.emailContractUpdates}
                    onCheckedChange={(checked) =>
                      handleNotificationChange("emailContractUpdates", checked)
                    }
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>In-App Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Messages</p>
                    <p className="text-sm text-muted-foreground">
                      Show notifications for new messages
                    </p>
                  </div>
                  <Switch
                    checked={notifications.inAppMessages}
                    onCheckedChange={(checked) =>
                      handleNotificationChange("inAppMessages", checked)
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Calendar Reminders</p>
                    <p className="text-sm text-muted-foreground">
                      Get reminders for upcoming events
                    </p>
                  </div>
                  <Switch
                    checked={notifications.inAppCalendarReminders}
                    onCheckedChange={(checked) =>
                      handleNotificationChange(
                        "inAppCalendarReminders",
                        checked,
                      )
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">System Updates</p>
                    <p className="text-sm text-muted-foreground">
                      Notifications about platform updates
                    </p>
                  </div>
                  <Switch
                    checked={notifications.inAppSystemUpdates}
                    onCheckedChange={(checked) =>
                      handleNotificationChange("inAppSystemUpdates", checked)
                    }
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SMS Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Urgent Only</p>
                    <p className="text-sm text-muted-foreground">
                      Only receive SMS for urgent matters
                    </p>
                  </div>
                  <Switch
                    checked={notifications.smsUrgentOnly}
                    onCheckedChange={(checked) =>
                      handleNotificationChange("smsUrgentOnly", checked)
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Booking Confirmations</p>
                    <p className="text-sm text-muted-foreground">
                      SMS confirmations for bookings
                    </p>
                  </div>
                  <Switch
                    checked={notifications.smsBookingConfirmations}
                    onCheckedChange={(checked) =>
                      handleNotificationChange(
                        "smsBookingConfirmations",
                        checked,
                      )
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Connected Apps Tab */}
        <TabsContent value="apps">
          <Card>
            <CardHeader>
              <CardTitle>Connected Applications</CardTitle>
              <p className="text-muted-foreground">
                Manage your connected streaming platforms and social media
                accounts
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {connectedApps.map((app, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{app.icon}</div>
                      <div>
                        <h4 className="font-medium">{app.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          Last sync: {app.lastSync}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="outline"
                        className={getAppStatusColor(app.status)}
                      >
                        {getAppStatusIcon(app.status)}
                        <span className="ml-1 capitalize">{app.status}</span>
                      </Badge>
                      {app.status === "connected" ? (
                        <Button variant="outline" size="sm">
                          Disconnect
                        </Button>
                      ) : (
                        <Button size="sm">Connect</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
