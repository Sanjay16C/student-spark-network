
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Calendar = () => {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Calendar</h1>
          <Button>Add Event</Button>
        </div>

        {/* Calendar Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-lg font-semibold">March 2024</h2>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Today</Button>
            <Button variant="outline" size="sm">Month</Button>
            <Button variant="outline" size="sm">Week</Button>
          </div>
        </div>

        {/* Events List */}
        <div className="grid gap-4">
          {events.map((event, index) => (
            <Card key={index} className="p-4">
              <div className="flex gap-4">
                <div className={`w-2 self-stretch rounded-full ${event.colorClass}`} />
                <div className="flex-1">
                  <h3 className="font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{event.time}</p>
                  <p className="text-sm text-gray-500 mt-2">{event.description}</p>
                </div>
                <CalendarIcon className="h-5 w-5 text-gray-400" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const events = [
  {
    title: "Data Structures Lecture",
    time: "10:00 AM - 11:30 AM",
    description: "Chapter 7: Binary Trees",
    colorClass: "bg-blue-500"
  },
  {
    title: "Project Meeting",
    time: "2:00 PM - 3:00 PM",
    description: "Team sync for semester project",
    colorClass: "bg-green-500"
  },
  {
    title: "Assignment Deadline",
    time: "11:59 PM",
    description: "Submit Advanced Algorithms homework",
    colorClass: "bg-red-500"
  }
];

export default Calendar;
