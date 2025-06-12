import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Play,
  ExternalLink,
  Mail,
  Calendar,
  MapPin,
  Music,
  Image as ImageIcon,
  Heart,
  Share2,
  Instagram,
  Twitter,
  Youtube,
  Music2,
  CheckCircle,
  Users,
  Clock,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface PublicArtistPortfolioProps {
  artistName?: string;
}

const PublicArtistPortfolio = ({
  artistName = "Alex Rivera",
}: PublicArtistPortfolioProps) => {
  const [selectedAlbum, setSelectedAlbum] = useState<any>(null);
  const [fanmailText, setFanmailText] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const artistData = {
    name: "Alex Rivera",
    role: "Singer",
    genres: ["Afrobeats", "Hip-Hop", "R&B"],
    location: "Los Angeles, CA",
    isVerified: true,
    bio: "Alex Rivera is a multi-talented singer-songwriter who has been captivating audiences with their unique blend of Afrobeats, Hip-Hop, and R&B. With over 5 years in the industry, Alex has released 3 studio albums and performed at major venues across the country.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    coverImage:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80",
    followers: "125K",
    monthlyListeners: "2.3M",
    socialLinks: {
      instagram: "@alexrivera",
      twitter: "@alexrivera",
      youtube: "Alex Rivera Official",
      spotify: "Alex Rivera",
    },
  };

  const discography = [
    {
      id: 1,
      title: "Midnight Dreams",
      releaseDate: "2024-03-15",
      type: "Album",
      cover:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80",
      tracks: 12,
      duration: "45:32",
      tags: ["NewRelease", "TopHit"],
      streamingLinks: {
        spotify: "#",
        appleMusic: "#",
        youtube: "#",
      },
    },
    {
      id: 2,
      title: "City Lights",
      releaseDate: "2023-08-22",
      type: "EP",
      cover:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80",
      tracks: 6,
      duration: "22:15",
      tags: ["EP", "Collab"],
      streamingLinks: {
        spotify: "#",
        appleMusic: "#",
        youtube: "#",
      },
    },
    {
      id: 3,
      title: "Echoes",
      releaseDate: "2022-11-10",
      type: "Album",
      cover:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80",
      tracks: 10,
      duration: "38:47",
      tags: ["TopHit"],
      streamingLinks: {
        spotify: "#",
        appleMusic: "#",
        youtube: "#",
      },
    },
  ];

  const mediaGallery = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
      tags: ["BehindTheScenes", "StudioVibes"],
      caption: "Recording session for Midnight Dreams",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80",
      tags: ["LivePerformance", "Tour2025"],
      caption: "Live performance at Madison Square Garden",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80",
      tags: ["PressShoot", "FanBoard"],
      caption: "Official press photoshoot",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=600&q=80",
      tags: ["BehindTheScenes"],
      caption: "Behind the scenes of City Lights music video",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
      tags: ["LivePerformance"],
      caption: "Acoustic session",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=600&q=80",
      tags: ["StudioVibes"],
      caption: "Working on new material",
    },
  ];

  const timelinePosts = [
    {
      id: 1,
      date: "2 days ago",
      type: "announcement",
      content:
        "Just finished recording a new track! Can't wait to share it with you all. The energy in the studio was incredible. 🎵",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
      likes: 1250,
      tags: ["Announcement", "MusicDrop"],
    },
    {
      id: 2,
      date: "1 week ago",
      type: "tour",
      content:
        "Thank you to everyone who came out to the show in Chicago! Your energy was amazing and made the night unforgettable. ❤️",
      likes: 2100,
      tags: ["Tour2025"],
    },
    {
      id: 3,
      date: "2 weeks ago",
      type: "project",
      content:
        "Behind the scenes from our latest music video shoot. So grateful for this incredible team! 📸",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80",
      likes: 890,
      tags: ["BehindTheScenes"],
    },
    {
      id: 4,
      date: "1 month ago",
      type: "milestone",
      content:
        "Midnight Dreams just hit 1 million streams! Thank you to all my fans for the incredible support. This is just the beginning! 🚀",
      likes: 3500,
      tags: ["Milestone"],
    },
  ];

  const handleSendFanmail = () => {
    console.log("Sending fanmail:", fanmailText);
    setFanmailText("");
  };

  const handleBookingRequest = () => {
    console.log("Sending booking request:", bookingMessage);
    setBookingMessage("");
  };

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaGallery.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex(
      (prev) => (prev - 1 + mediaGallery.length) % mediaGallery.length,
    );
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-indigo-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <img
          src={artistData.coverImage}
          alt="Cover"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-end pb-4 sm:pb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-6 w-full">
            <Avatar className="h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 border-4 border-white flex-shrink-0">
              <AvatarImage src={artistData.avatar} alt={artistData.name} />
              <AvatarFallback className="text-lg sm:text-xl lg:text-2xl">
                {artistData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="text-white flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
                  {artistData.name}
                </h1>
                {artistData.isVerified && (
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 flex-shrink-0" />
                )}
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 text-xs sm:text-sm"
                >
                  #{artistData.role}
                </Badge>
                {artistData.genres.map((genre) => (
                  <Badge
                    key={genre}
                    variant="outline"
                    className="bg-transparent text-white border-white/30 text-xs sm:text-sm"
                  >
                    #{genre}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-1 mb-3 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>{artistData.location}</span>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{artistData.followers} Followers</span>
                </div>
                <div className="flex items-center gap-1">
                  <Music className="h-4 w-4" />
                  <span>{artistData.monthlyListeners} Monthly Listeners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* About Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Music className="h-5 w-5" />
              About
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed">
              {artistData.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs sm:text-sm"
                >
                  <Instagram className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">
                    {artistData.socialLinks.instagram}
                  </span>
                  <span className="sm:hidden">IG</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs sm:text-sm"
                >
                  <Twitter className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">
                    {artistData.socialLinks.twitter}
                  </span>
                  <span className="sm:hidden">TW</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs sm:text-sm"
                >
                  <Youtube className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">
                    {artistData.socialLinks.youtube}
                  </span>
                  <span className="sm:hidden">YT</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs sm:text-sm"
                >
                  <Music2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">
                    {artistData.socialLinks.spotify}
                  </span>
                  <span className="sm:hidden">SP</span>
                </Button>
              </div>
              <Button className="w-full sm:w-auto sm:ml-auto">
                Contact Agent
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Discography */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Discography</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {discography.map((album) => (
                <div
                  key={album.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedAlbum(album)}
                >
                  <div className="relative mb-4">
                    <img
                      src={album.cover}
                      alt={album.title}
                      className="w-full aspect-square object-cover rounded-lg group-hover:shadow-lg transition-shadow"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                      <Play className="h-8 w-8 sm:h-12 sm:w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base mb-2">
                    {album.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                    {new Date(album.releaseDate).toLocaleDateString()} •{" "}
                    {album.type}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                    {album.tracks} tracks • {album.duration}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {album.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs px-2 py-1"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs"
                    >
                      <Music2 className="h-3 w-3 mr-1" />
                      Spotify
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs"
                    >
                      <Music className="h-3 w-3 mr-1" />
                      Apple
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs"
                    >
                      <Youtube className="h-3 w-3 mr-1" />
                      YouTube
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Media Gallery */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <ImageIcon className="h-5 w-5" />
              Media Gallery
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Mobile Carousel */}
            <div className="block sm:hidden">
              <div className="relative">
                <img
                  src={mediaGallery[currentMediaIndex].url}
                  alt={mediaGallery[currentMediaIndex].caption}
                  className="w-full aspect-video object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium mb-2">
                    {mediaGallery[currentMediaIndex].caption}
                  </p>
                  <div className="flex gap-1">
                    {mediaGallery[currentMediaIndex].tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-white/20 text-white border-white/30"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40"
                  onClick={prevMedia}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40"
                  onClick={nextMedia}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {mediaGallery.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentMediaIndex ? "bg-primary" : "bg-muted"
                    }`}
                    onClick={() => setCurrentMediaIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {mediaGallery.map((media, index) => (
                <div
                  key={media.id}
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <img
                    src={media.url}
                    alt={media.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex flex-wrap gap-1">
                      {media.tags.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-white/20 text-white border-white/30"
                        >
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Clock className="h-5 w-5" />
              Timeline & Updates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 sm:space-y-6">
              {timelinePosts.map((post) => (
                <div
                  key={post.id}
                  className="border-b pb-4 sm:pb-6 last:border-b-0"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Avatar className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
                      <AvatarImage
                        src={artistData.avatar}
                        alt={artistData.name}
                      />
                      <AvatarFallback className="text-xs sm:text-sm">
                        {artistData.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm sm:text-base">
                            {artistData.name}
                          </span>
                          {artistData.isVerified && (
                            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 flex-shrink-0" />
                          )}
                        </div>
                        <span className="text-xs sm:text-sm text-muted-foreground">
                          {post.date}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs px-2 py-1"
                          >
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      <p className="mb-3 text-sm sm:text-base leading-relaxed">
                        {post.content}
                      </p>
                      {post.image && (
                        <img
                          src={post.image}
                          alt="Post"
                          className="w-full max-w-sm sm:max-w-md rounded-lg mb-3"
                        />
                      )}
                      <div className="flex items-center gap-2 sm:gap-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs sm:text-sm px-2 sm:px-3"
                        >
                          <Heart className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          {post.likes.toLocaleString()}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs sm:text-sm px-2 sm:px-3"
                        >
                          <Share2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Forms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Fanmail */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Mail className="h-5 w-5" />
                Send Fanmail
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                <Input
                  placeholder="Your name"
                  className="text-sm sm:text-base"
                />
                <Input
                  placeholder="Your email"
                  type="email"
                  className="text-sm sm:text-base"
                />
                <Input placeholder="Subject" className="text-sm sm:text-base" />
                <Textarea
                  placeholder="Your message to the artist..."
                  value={fanmailText}
                  onChange={(e) => setFanmailText(e.target.value)}
                  rows={4}
                  className="text-sm sm:text-base resize-none"
                />
                <Button
                  onClick={handleSendFanmail}
                  className="w-full text-sm sm:text-base"
                >
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Booking Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Calendar className="h-5 w-5" />
                Booking Inquiry
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                <Input
                  placeholder="Organization/Venue name"
                  className="text-sm sm:text-base"
                />
                <Input
                  placeholder="Contact email"
                  type="email"
                  className="text-sm sm:text-base"
                />
                <Input
                  placeholder="Event date"
                  type="date"
                  className="text-sm sm:text-base"
                />
                <Input
                  placeholder="Location"
                  className="text-sm sm:text-base"
                />
                <Textarea
                  placeholder="Event details and booking inquiry..."
                  value={bookingMessage}
                  onChange={(e) => setBookingMessage(e.target.value)}
                  rows={4}
                  className="text-sm sm:text-base resize-none"
                />
                <Button
                  onClick={handleBookingRequest}
                  className="w-full text-sm sm:text-base"
                >
                  Submit Booking Inquiry
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PublicArtistPortfolio;
