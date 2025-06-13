import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Music,
  MessageSquare,
  Calendar,
  User,
  Mail,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Headphones,
  Camera,
  Home,
} from "lucide-react";

const FanLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 bg-background">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-600">
                MusicPro Fans
              </span>
            </div>
            <Link to="/">
              <Button variant="outline" size="sm">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-600">
            Connect with Your Favorite Artists
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover amazing artists, explore their journeys, send heartfelt
            messages, and be part of their success story. Your gateway to the
            music world awaits.
          </p>
          <Badge
            variant="outline"
            className="text-sm px-4 py-2 bg-pink-50 text-pink-700 border-pink-200"
          >
            Join millions of music lovers worldwide
          </Badge>
        </motion.div>

        {/* Main Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Browse Artists */}
          <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-pink-300">
            <CardHeader className="text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Browse Artists</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Explore detailed artist portfolios with bios, discographies,
                upcoming events, and exclusive content.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Artist Biographies</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Complete Discography</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Upcoming Events</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Verified Contact Info</span>
                </div>
              </div>
              <Button className="w-full" variant="outline">
                Explore Artists
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Send Fanmail */}
          <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-pink-300">
            <CardHeader className="text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Send Fanmail</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Share your thoughts, appreciation, and personal messages with
                your favorite artists through our secure platform.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Categorized Messages</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Spam Protection</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Manager Moderation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Direct to Artist</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600">
                Write Message
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Engagement Requests */}
          <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-pink-300">
            <CardHeader className="text-center">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Engagement Requests</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Submit booking inquiries, collaboration requests, and other
                professional engagements directly to artists' teams.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Booking Requests</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Collaboration Inquiries</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Professional Review</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Secure Processing</span>
                </div>
              </div>
              <Button className="w-full" variant="outline">
                Submit Request
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Discover</h3>
              <p className="text-sm text-muted-foreground">
                Browse through verified artist profiles and portfolios
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <p className="text-sm text-muted-foreground">
                Send messages or submit engagement requests
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Verify</h3>
              <p className="text-sm text-muted-foreground">
                Your messages are reviewed for quality and authenticity
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Engage</h3>
              <p className="text-sm text-muted-foreground">
                Build meaningful connections with your favorite artists
              </p>
            </div>
          </div>
        </motion.div>

        {/* Featured Artists Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Artists
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Rivera",
                genre: "Pop",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
                fans: "2.1M",
              },
              {
                name: "Maya Chen",
                genre: "R&B",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=maya",
                fans: "1.8M",
              },
              {
                name: "Jordan Smith",
                genre: "Hip Hop",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan",
                fans: "3.2M",
              },
            ].map((artist, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="h-20 w-20 rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold mb-1">{artist.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {artist.genre}
                  </p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    <Heart className="h-4 w-4 text-pink-500" />
                    <span className="text-sm text-muted-foreground">
                      {artist.fans} fans
                    </span>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-pink-50 to-red-50 border-pink-200">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pink-900">
                Ready to Connect with Amazing Artists?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of music fans who are already connecting with
                their favorite artists through MusicPro.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
              >
                Start Exploring Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default FanLanding;
