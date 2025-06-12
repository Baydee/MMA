import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  LineChart,
  PieChart,
  Download,
  Calendar,
  Filter,
  ArrowUpRight,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface AnalyticsDashboardProps {
  userRole?: "artist" | "manager" | "agent" | "admin";
}

const AnalyticsDashboard = ({
  userRole = "artist",
}: AnalyticsDashboardProps) => {
  return (
    <div className="bg-background p-6 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Track your performance metrics and royalty earnings
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="last30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last7days">Last 7 days</SelectItem>
              <SelectItem value="last30days">Last 30 days</SelectItem>
              <SelectItem value="last90days">Last 90 days</SelectItem>
              <SelectItem value="lastyear">Last year</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Calendar className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Streams</CardDescription>
            <CardTitle className="text-2xl flex items-center">
              2.4M
              <span className="text-sm text-green-500 ml-2 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" /> 12%
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={75} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              +14.2% from last period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Royalty Earnings</CardDescription>
            <CardTitle className="text-2xl flex items-center">
              $12,845
              <span className="text-sm text-green-500 ml-2 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" /> 8%
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={65} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              +8.3% from last period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Fan Engagement</CardDescription>
            <CardTitle className="text-2xl flex items-center">
              45.2K
              <span className="text-sm text-green-500 ml-2 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" /> 18%
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={85} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              +18.7% from last period
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>New Followers</CardDescription>
            <CardTitle className="text-2xl flex items-center">
              5,234
              <span className="text-sm text-green-500 ml-2 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" /> 9%
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={60} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              +9.1% from last period
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Analytics Content */}
      <Tabs defaultValue="streaming" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="streaming">Streaming</TabsTrigger>
          <TabsTrigger value="royalties">Royalties</TabsTrigger>
          <TabsTrigger value="geographic">Geographic</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          {userRole === "admin" && (
            <TabsTrigger value="platform">Platform</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="streaming" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Streaming Performance</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <LineChart className="h-4 w-4" />
                      Line
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <BarChart className="h-4 w-4" />
                      Bar
                    </Button>
                  </div>
                </div>
                <CardDescription>
                  Daily streams across all platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  {/* Placeholder for chart */}
                  <p className="text-muted-foreground">
                    Streaming performance chart
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Platform Breakdown</CardTitle>
                <CardDescription>Streams by platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md mb-4">
                  {/* Placeholder for pie chart */}
                  <PieChart className="h-16 w-16 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span>Spotify</span>
                    </div>
                    <span className="font-medium">42%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span>Apple Music</span>
                    </div>
                    <span className="font-medium">28%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>YouTube Music</span>
                    </div>
                    <span className="font-medium">18%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span>Others</span>
                    </div>
                    <span className="font-medium">12%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Top Performing Tracks</CardTitle>
              <CardDescription>
                Tracks with the highest stream counts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-muted/30">
                    <tr>
                      <th className="px-4 py-3 rounded-l-lg">Track</th>
                      <th className="px-4 py-3">Album</th>
                      <th className="px-4 py-3">Release Date</th>
                      <th className="px-4 py-3">Streams</th>
                      <th className="px-4 py-3">Revenue</th>
                      <th className="px-4 py-3 rounded-r-lg">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        track: "Summer Nights",
                        album: "Seasonal Vibes",
                        date: "Jun 12, 2023",
                        streams: "845,231",
                        revenue: "$3,245",
                        trend: "+12%",
                      },
                      {
                        track: "Midnight Drive",
                        album: "Urban Echoes",
                        date: "Mar 3, 2023",
                        streams: "732,112",
                        revenue: "$2,845",
                        trend: "+8%",
                      },
                      {
                        track: "Ocean Waves",
                        album: "Coastal Dreams",
                        date: "Sep 18, 2022",
                        streams: "654,987",
                        revenue: "$2,432",
                        trend: "+5%",
                      },
                      {
                        track: "City Lights",
                        album: "Urban Echoes",
                        date: "Mar 3, 2023",
                        streams: "587,345",
                        revenue: "$2,156",
                        trend: "+7%",
                      },
                      {
                        track: "Mountain High",
                        album: "Natural Wonders",
                        date: "Jan 24, 2022",
                        streams: "498,762",
                        revenue: "$1,876",
                        trend: "+3%",
                      },
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-muted/20">
                        <td className="px-4 py-3 font-medium">{item.track}</td>
                        <td className="px-4 py-3">{item.album}</td>
                        <td className="px-4 py-3">{item.date}</td>
                        <td className="px-4 py-3">{item.streams}</td>
                        <td className="px-4 py-3">{item.revenue}</td>
                        <td className="px-4 py-3 text-green-500">
                          {item.trend}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="royalties" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Royalty Earnings</CardTitle>
                <CardDescription>Monthly earnings breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  {/* Placeholder for chart */}
                  <p className="text-muted-foreground">
                    Royalty earnings chart
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Sources</CardTitle>
                <CardDescription>Earnings by source</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md mb-4">
                  {/* Placeholder for pie chart */}
                  <PieChart className="h-16 w-16 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span>Streaming</span>
                    </div>
                    <span className="font-medium">65%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span>Licensing</span>
                    </div>
                    <span className="font-medium">18%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>Live Events</span>
                    </div>
                    <span className="font-medium">12%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span>Merchandise</span>
                    </div>
                    <span className="font-medium">5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Royalty Payment History</CardTitle>
              <CardDescription>
                Recent payments and pending royalties
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-muted/30">
                    <tr>
                      <th className="px-4 py-3 rounded-l-lg">Payment Date</th>
                      <th className="px-4 py-3">Source</th>
                      <th className="px-4 py-3">Period</th>
                      <th className="px-4 py-3">Amount</th>
                      <th className="px-4 py-3 rounded-r-lg">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        date: "Jun 15, 2023",
                        source: "Spotify",
                        period: "May 2023",
                        amount: "$1,245.32",
                        status: "Paid",
                      },
                      {
                        date: "Jun 12, 2023",
                        source: "Apple Music",
                        period: "May 2023",
                        amount: "$876.45",
                        status: "Paid",
                      },
                      {
                        date: "Jun 10, 2023",
                        source: "YouTube Music",
                        period: "May 2023",
                        amount: "$543.21",
                        status: "Paid",
                      },
                      {
                        date: "Jul 15, 2023",
                        source: "Spotify",
                        period: "Jun 2023",
                        amount: "$1,312.87",
                        status: "Pending",
                      },
                      {
                        date: "Jul 12, 2023",
                        source: "Apple Music",
                        period: "Jun 2023",
                        amount: "$921.56",
                        status: "Pending",
                      },
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-muted/20">
                        <td className="px-4 py-3">{item.date}</td>
                        <td className="px-4 py-3">{item.source}</td>
                        <td className="px-4 py-3">{item.period}</td>
                        <td className="px-4 py-3 font-medium">{item.amount}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${item.status === "Paid" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="geographic" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Global Audience Map</CardTitle>
                <CardDescription>
                  Listener distribution worldwide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
                  {/* Placeholder for world map */}
                  <p className="text-muted-foreground">
                    World map visualization
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Countries</CardTitle>
                <CardDescription>
                  Highest listener counts by country
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      country: "United States",
                      listeners: "845,231",
                      percentage: 32,
                    },
                    {
                      country: "United Kingdom",
                      listeners: "423,112",
                      percentage: 16,
                    },
                    {
                      country: "Germany",
                      listeners: "312,987",
                      percentage: 12,
                    },
                    { country: "Canada", listeners: "287,345", percentage: 11 },
                    {
                      country: "Australia",
                      listeners: "198,762",
                      percentage: 8,
                    },
                  ].map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{item.country}</span>
                        <span>{item.listeners} listeners</span>
                      </div>
                      <Progress value={item.percentage} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        {item.percentage}% of total audience
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>City-Level Insights</CardTitle>
              <CardDescription>
                Top performing cities and growth opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-muted/30">
                    <tr>
                      <th className="px-4 py-3 rounded-l-lg">City</th>
                      <th className="px-4 py-3">Country</th>
                      <th className="px-4 py-3">Listeners</th>
                      <th className="px-4 py-3">Growth</th>
                      <th className="px-4 py-3 rounded-r-lg">Opportunity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        city: "New York",
                        country: "United States",
                        listeners: "124,532",
                        growth: "+18%",
                        opportunity: "High",
                      },
                      {
                        city: "London",
                        country: "United Kingdom",
                        listeners: "98,745",
                        growth: "+12%",
                        opportunity: "Medium",
                      },
                      {
                        city: "Berlin",
                        country: "Germany",
                        listeners: "87,321",
                        growth: "+22%",
                        opportunity: "High",
                      },
                      {
                        city: "Toronto",
                        country: "Canada",
                        listeners: "76,543",
                        growth: "+8%",
                        opportunity: "Medium",
                      },
                      {
                        city: "Sydney",
                        country: "Australia",
                        listeners: "65,432",
                        growth: "+15%",
                        opportunity: "Medium",
                      },
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-muted/20">
                        <td className="px-4 py-3 font-medium">{item.city}</td>
                        <td className="px-4 py-3">{item.country}</td>
                        <td className="px-4 py-3">{item.listeners}</td>
                        <td className="px-4 py-3 text-green-500">
                          {item.growth}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${item.opportunity === "High" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}
                          >
                            {item.opportunity}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Audience Demographics</CardTitle>
                <CardDescription>Age and gender distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  {/* Placeholder for demographics chart */}
                  <p className="text-muted-foreground">
                    Demographics visualization
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Listener Growth</CardTitle>
                <CardDescription>New listeners over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  {/* Placeholder for growth chart */}
                  <p className="text-muted-foreground">Listener growth chart</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Audience Interests</CardTitle>
              <CardDescription>
                Other artists and genres your audience enjoys
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Related Artists</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Artist One",
                      "Artist Two",
                      "Artist Three",
                      "Artist Four",
                      "Artist Five",
                      "Artist Six",
                    ].map((artist, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted rounded-full text-sm"
                      >
                        {artist}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Popular Genres</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Pop",
                      "R&B",
                      "Hip Hop",
                      "Electronic",
                      "Indie",
                      "Rock",
                    ].map((genre, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted rounded-full text-sm"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {userRole === "admin" && (
          <TabsContent value="platform" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Platform Usage</CardTitle>
                  <CardDescription>
                    Active users and engagement metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                    {/* Placeholder for platform usage chart */}
                    <p className="text-muted-foreground">
                      Platform usage chart
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Distribution</CardTitle>
                  <CardDescription>Users by role</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md mb-4">
                    {/* Placeholder for pie chart */}
                    <PieChart className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span>Artists</span>
                      </div>
                      <span className="font-medium">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span>Managers</span>
                      </div>
                      <span className="font-medium">28%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span>Agents</span>
                      </div>
                      <span className="font-medium">22%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <span>Admins</span>
                      </div>
                      <span className="font-medium">5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default AnalyticsDashboard;
