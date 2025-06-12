import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertCircle,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

interface Event {
  id: string;
  title: string;
  start: Date;
  end: Date;
  type: "tour" | "concert" | "studio" | "meeting" | "other";
  description?: string;
  location?: string;
  participants?: string[];
}

const eventTypeColors = {
  tour: "bg-blue-100 border-blue-500 text-blue-800",
  concert: "bg-purple-100 border-purple-500 text-purple-800",
  studio: "bg-green-100 border-green-500 text-green-800",
  meeting: "bg-amber-100 border-amber-500 text-amber-800",
  other: "bg-gray-100 border-gray-500 text-gray-800",
};

const CalendarView = () => {
  const [view, setView] = useState<"month" | "week" | "day">("month");
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Summer Tour - New York",
      start: new Date(2023, 5, 15, 18, 0),
      end: new Date(2023, 5, 15, 22, 0),
      type: "tour",
      description: "Summer tour performance at Madison Square Garden",
      location: "Madison Square Garden, NY",
    },
    {
      id: "2",
      title: "Studio Session - Album Recording",
      start: new Date(2023, 5, 18, 10, 0),
      end: new Date(2023, 5, 18, 16, 0),
      type: "studio",
      description: "Recording session for upcoming album",
      location: "Sunset Sound Studios",
    },
    {
      id: "3",
      title: "Meeting with Label",
      start: new Date(2023, 5, 20, 14, 0),
      end: new Date(2023, 5, 20, 15, 30),
      type: "meeting",
      description: "Quarterly review meeting with record label",
      location: "Universal Music Group HQ",
    },
  ]);

  const [showEventDialog, setShowEventDialog] = useState(false);
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [newEvent, setNewEvent] = useState<Partial<Event>>({
    title: "",
    start: new Date(),
    end: new Date(),
    type: "other",
    description: "",
    location: "",
  });
  const [showConflictAlert, setShowConflictAlert] = useState(false);

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    setNewEvent({
      title: "",
      start,
      end,
      type: "other",
      description: "",
      location: "",
    });
    setShowEventDialog(true);
  };

  const handleSelectEvent = (event: Event) => {
    setSelectedEvent(event);
    setShowEventDetails(true);
  };

  const handleCreateEvent = () => {
    // Check for conflicts
    const hasConflict = events.some((event) => {
      return (
        newEvent.start &&
        newEvent.end &&
        ((newEvent.start >= event.start && newEvent.start < event.end) ||
          (newEvent.end > event.start && newEvent.end <= event.end) ||
          (newEvent.start <= event.start && newEvent.end >= event.end))
      );
    });

    if (hasConflict) {
      setShowConflictAlert(true);
      return;
    }

    if (newEvent.title && newEvent.start && newEvent.end && newEvent.type) {
      const createdEvent = {
        id: Date.now().toString(),
        title: newEvent.title,
        start: newEvent.start,
        end: newEvent.end,
        type: newEvent.type as
          | "tour"
          | "concert"
          | "studio"
          | "meeting"
          | "other",
        description: newEvent.description,
        location: newEvent.location,
        participants: newEvent.participants,
      };

      setEvents([...events, createdEvent]);
      setShowEventDialog(false);
      setNewEvent({
        title: "",
        start: new Date(),
        end: new Date(),
        type: "other",
        description: "",
        location: "",
      });
    }
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(events.filter((event) => event.id !== id));
    setShowEventDetails(false);
  };

  const eventStyleGetter = (event: Event) => {
    const style = {
      className: `border-l-4 ${eventTypeColors[event.type]}`,
      style: {
        borderRadius: "4px",
        opacity: 0.8,
        color: "black",
        border: "0",
        display: "block",
      },
    };
    return style;
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm w-full h-full min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">Calendar</h1>

        <div className="flex items-center gap-4">
          <Tabs value={view} onValueChange={(value: any) => setView(value)}>
            <TabsList>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="day">Day</TabsTrigger>
            </TabsList>
          </Tabs>

          <Button
            onClick={() =>
              handleSelectSlot({ start: new Date(), end: new Date() })
            }
            className="w-full sm:w-auto"
          >
            <Plus className="mr-2 h-4 w-4" /> Add Event
          </Button>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <Badge
          variant="outline"
          className="bg-blue-100 text-blue-800 border-blue-500"
        >
          Tour
        </Badge>
        <Badge
          variant="outline"
          className="bg-purple-100 text-purple-800 border-purple-500"
        >
          Concert
        </Badge>
        <Badge
          variant="outline"
          className="bg-green-100 text-green-800 border-green-500"
        >
          Studio
        </Badge>
        <Badge
          variant="outline"
          className="bg-amber-100 text-amber-800 border-amber-500"
        >
          Meeting
        </Badge>
        <Badge
          variant="outline"
          className="bg-gray-100 text-gray-800 border-gray-500"
        >
          Other
        </Badge>
      </div>

      <div className="h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%" }}
          views={{
            month: true,
            week: true,
            day: true,
          }}
          view={view}
          onView={(newView: any) => setView(newView)}
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          eventPropGetter={eventStyleGetter}
          components={{
            toolbar: CustomToolbar,
          }}
        />
      </div>

      {/* Create Event Dialog */}
      <Dialog open={showEventDialog} onOpenChange={setShowEventDialog}>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create New Event</DialogTitle>
          </DialogHeader>

          {showConflictAlert && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                This event conflicts with an existing event. Please choose a
                different time.
              </AlertDescription>
            </Alert>
          )}

          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Event Title</Label>
              <Input
                id="title"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
                placeholder="Enter event title"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="start">Start Date & Time</Label>
                <Input
                  id="start"
                  type="datetime-local"
                  value={
                    newEvent.start
                      ? moment(newEvent.start).format("YYYY-MM-DDTHH:mm")
                      : ""
                  }
                  onChange={(e) =>
                    setNewEvent({
                      ...newEvent,
                      start: new Date(e.target.value),
                    })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="end">End Date & Time</Label>
                <Input
                  id="end"
                  type="datetime-local"
                  value={
                    newEvent.end
                      ? moment(newEvent.end).format("YYYY-MM-DDTHH:mm")
                      : ""
                  }
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, end: new Date(e.target.value) })
                  }
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="type">Event Type</Label>
              <Select
                value={newEvent.type}
                onValueChange={(value) =>
                  setNewEvent({ ...newEvent, type: value as any })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tour">Tour</SelectItem>
                  <SelectItem value="concert">Concert</SelectItem>
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="meeting">Meeting</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={newEvent.location || ""}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, location: e.target.value })
                }
                placeholder="Enter location"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newEvent.description || ""}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, description: e.target.value })
                }
                placeholder="Enter event description"
              />
            </div>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => setShowEventDialog(false)}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button onClick={handleCreateEvent} className="w-full sm:w-auto">
              Create Event
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Event Details Dialog */}
      <Dialog open={showEventDetails} onOpenChange={setShowEventDetails}>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedEvent?.title}</DialogTitle>
          </DialogHeader>

          <div className="py-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className={`${selectedEvent?.type && eventTypeColors[selectedEvent.type]}`}
                    >
                      {selectedEvent?.type?.charAt(0).toUpperCase() +
                        selectedEvent?.type?.slice(1)}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Start
                      </p>
                      <p>
                        {selectedEvent?.start
                          ? moment(selectedEvent.start).format(
                              "MMM D, YYYY h:mm A",
                            )
                          : ""}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        End
                      </p>
                      <p>
                        {selectedEvent?.end
                          ? moment(selectedEvent.end).format(
                              "MMM D, YYYY h:mm A",
                            )
                          : ""}
                      </p>
                    </div>
                  </div>

                  {selectedEvent?.location && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Location
                      </p>
                      <p>{selectedEvent.location}</p>
                    </div>
                  )}

                  {selectedEvent?.description && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Description
                      </p>
                      <p>{selectedEvent.description}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="destructive"
              onClick={() =>
                selectedEvent && handleDeleteEvent(selectedEvent.id)
              }
              className="w-full sm:w-auto"
            >
              Delete Event
            </Button>
            <Button
              onClick={() => setShowEventDetails(false)}
              className="w-full sm:w-auto"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const CustomToolbar = ({ label, onNavigate }: any) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={() => onNavigate("PREV")}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" onClick={() => onNavigate("NEXT")}>
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" onClick={() => onNavigate("TODAY")}>
          Today
        </Button>
      </div>
      <h2 className="text-lg font-semibold">{label}</h2>
      <div className="w-[100px]"></div> {/* Spacer for alignment */}
    </div>
  );
};

export default CalendarView;
