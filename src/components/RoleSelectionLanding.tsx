import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Music,
  Users,
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  Headphones,
  MessageSquare,
  Calendar,
  Shield,
} from "lucide-react";

const RoleSelectionLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 bg-background">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </div>
              <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                MusicPro
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Welcome to MusicPro
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            The ultimate platform connecting artists, industry professionals,
            and fans. Choose your path and join the music revolution.
          </p>
          <Badge variant="outline" className="text-sm px-4 py-2">
            Trusted by 10,000+ music professionals worldwide
          </Badge>
        </motion.div>

        {/* Role Selection Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Artist/Manager/Agent Card */}
          <Link to="/professional">
            <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 hover:border-indigo-300">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                    <Music className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-center mb-4">
                  Artists & Industry Professionals
                </h2>
                <p className="text-muted-foreground text-center mb-6 flex-grow">
                  Manage your music career, track analytics, handle contracts,
                  and connect with your audience. Perfect for artists, managers,
                  and agents.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">
                      Advanced Analytics Dashboard
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Contract & Deal Management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Fan Engagement Tools</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Calendar & Booking System</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Get Started as Professional
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Fan Card */}
          <Link to="/fan">
            <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 hover:border-pink-300">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-center mb-4">
                  Music Fans
                </h2>
                <p className="text-muted-foreground text-center mb-6 flex-grow">
                  Discover amazing artists, connect with your favorites, and be
                  part of their journey. Your gateway to the music world.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Browse Artist Portfolios</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Send Fanmail & Messages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Submit Engagement Requests</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Discover New Music</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
                  size="lg"
                >
                  Explore as Fan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose MusicPro?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Trusted</h3>
              <p className="text-muted-foreground">
                Bank-level security with end-to-end encryption. Your data and
                creative work are always protected.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Community</h3>
              <p className="text-muted-foreground">
                Connect with artists, managers, and fans from around the world.
                Build your network and grow together.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Leading</h3>
              <p className="text-muted-foreground">
                Used by Grammy winners and emerging artists alike. Join the
                platform that's shaping music's future.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                10K+
              </div>
              <div className="text-sm text-muted-foreground">
                Active Artists
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                50M+
              </div>
              <div className="text-sm text-muted-foreground">
                Streams Tracked
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-2">1M+</div>
              <div className="text-sm text-muted-foreground">
                Fan Connections
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RoleSelectionLanding;
