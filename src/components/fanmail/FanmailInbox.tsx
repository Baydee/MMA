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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Search,
  Filter,
  Check,
  X,
  Archive,
  Reply,
  Flag,
  Clock,
  Star,
} from "lucide-react";

interface FanmailInboxProps {
  userRole?: "artist" | "manager";
}

const FanmailInbox = ({ userRole = "artist" }: FanmailInboxProps) => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [replyText, setReplyText] = useState("");

  const fanmailMessages = [
    {
      id: 1,
      from: "Sarah Johnson",
      email: "sarah.j@email.com",
      subject: "Your concert was absolutely amazing!",
      message:
        "Hi Alex! I just wanted to say that your performance last night was incredible. The way you connected with the audience was magical. Thank you for such an inspiring evening!",
      time: "2 hours ago",
      status: "unread",
      flagged: false,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      id: 2,
      from: "Mike Rodriguez",
      email: "mike.r@email.com",
      subject: "Collaboration opportunity",
      message:
        "Hello! I'm a producer and I've been following your work. I'd love to discuss a potential collaboration on a new project. Would you be interested in setting up a meeting?",
      time: "5 hours ago",
      status: "pending",
      flagged: true,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    },
    {
      id: 3,
      from: "Emma Chen",
      email: "emma.c@email.com",
      subject: "Thank you for the inspiration",
      message:
        "Your music has helped me through some tough times. Thank you for being such an inspiration and for sharing your talent with the world.",
      time: "1 day ago",
      status: "approved",
      flagged: false,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    },
    {
      id: 4,
      from: "David Wilson",
      email: "david.w@email.com",
      subject: "Fan club membership",
      message:
        "Hi! I'm interested in joining your official fan club. Could you please provide more information about membership benefits and how to sign up?",
      time: "2 days ago",
      status: "unread",
      flagged: false,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "unread":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "approved":
        return "bg-green-100 text-green-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "unread":
        return <Mail className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "approved":
        return <Check className="h-4 w-4" />;
      case "archived":
        return <Archive className="h-4 w-4" />;
      default:
        return <Mail className="h-4 w-4" />;
    }
  };

  const filteredMessages = fanmailMessages.filter((message) => {
    if (selectedFilter === "unread" && message.status !== "unread")
      return false;
    if (selectedFilter === "flagged" && !message.flagged) return false;
    if (selectedFilter === "approved" && message.status !== "approved")
      return false;
    if (
      searchQuery &&
      !message.subject.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !message.from.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  const handleApprove = (messageId: number) => {
    console.log("Approving message:", messageId);
  };

  const handleReject = (messageId: number) => {
    console.log("Rejecting message:", messageId);
  };

  const handleArchive = (messageId: number) => {
    console.log("Archiving message:", messageId);
  };

  const handleReply = () => {
    console.log("Sending reply:", replyText);
    setReplyText("");
    setSelectedMessage(null);
  };

  return (
    <div className="bg-background p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Fanmail Inbox</h1>
          <p className="text-muted-foreground mt-1">
            {userRole === "manager"
              ? "Manage fan messages for your artists"
              : "Connect with your fans"}
          </p>
        </div>
        <Badge
          variant="outline"
          className="bg-purple-50 text-purple-700 border-purple-200"
        >
          {filteredMessages.length} Messages
        </Badge>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search messages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedFilter} onValueChange={setSelectedFilter}>
          <SelectTrigger className="w-full md:w-48">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Filter messages" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Messages</SelectItem>
            <SelectItem value="unread">Unread</SelectItem>
            <SelectItem value="flagged">Flagged</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {filteredMessages.map((message) => (
          <Card
            key={message.id}
            className={`hover:shadow-md transition-shadow ${message.status === "unread" ? "border-blue-200 bg-blue-50/30" : ""}`}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={message.avatar} alt={message.from} />
                    <AvatarFallback>
                      {message.from
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{message.from}</h3>
                      <Badge
                        variant="outline"
                        className={getStatusColor(message.status)}
                      >
                        {getStatusIcon(message.status)}
                        <span className="ml-1 capitalize">
                          {message.status}
                        </span>
                      </Badge>
                      {message.flagged && (
                        <Badge
                          variant="outline"
                          className="bg-red-100 text-red-800"
                        >
                          <Flag className="h-3 w-3 mr-1" />
                          Flagged
                        </Badge>
                      )}
                    </div>
                    <h4 className="font-medium text-lg mb-2">
                      {message.subject}
                    </h4>
                    <p className="text-muted-foreground mb-3 line-clamp-2">
                      {message.message}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {message.time}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {userRole === "manager" && (
                    <>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleApprove(message.id)}
                      >
                        <Check className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleReject(message.id)}
                      >
                        <X className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                    </>
                  )}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedMessage(message)}
                      >
                        <Reply className="h-4 w-4 mr-1" />
                        Reply
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Reply to {message.from}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="bg-muted p-4 rounded-lg">
                          <p className="font-medium mb-2">Original Message:</p>
                          <p className="text-sm text-muted-foreground">
                            {message.message}
                          </p>
                        </div>
                        <Textarea
                          placeholder="Type your reply..."
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          rows={6}
                        />
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            onClick={() => setSelectedMessage(null)}
                          >
                            Cancel
                          </Button>
                          <Button onClick={handleReply}>Send Reply</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleArchive(message.id)}
                  >
                    <Archive className="h-4 w-4 mr-1" />
                    Archive
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMessages.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No messages found</h3>
            <p className="text-muted-foreground">
              {searchQuery
                ? "Try adjusting your search terms"
                : "No fanmail messages match the selected filter"}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FanmailInbox;
