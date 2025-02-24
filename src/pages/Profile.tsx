import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BadgeCheck, Mail, Phone, MapPin, School, Calendar, MessageSquare, FileText } from "lucide-react";

const Profile = () => {
  return (
    <div className="container max-w-4xl py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
        <Avatar className="w-24 h-24">
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <h1 className="text-2xl font-bold">John Doe</h1>
            <BadgeCheck className="h-5 w-5 text-primary" />
          </div>
          <p className="text-gray-600 mb-4">Computer Science Student</p>
          <Button variant="outline" className="w-full md:w-auto">
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-600">
              <Mail className="h-5 w-5" />
              <span>john.doe@university.edu</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Phone className="h-5 w-5" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin className="h-5 w-5" />
              <span>Campus Housing, Block A</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Academic Information</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-600">
              <School className="h-5 w-5" />
              <span>Bachelor of Computer Science</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Calendar className="h-5 w-5" />
              <span>Year 3, Semester 2</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Activity Section */}
      <Card className="mt-6 p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${activity.iconBg}`}
              >
                <activity.icon className={`h-4 w-4 ${activity.iconColor}`} />
              </div>
              <div>
                <p className="font-medium">{activity.title}</p>
                <p className="text-sm text-gray-600">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

const activities = [
  {
    icon: MessageSquare,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Posted in 'Data Structures Discussion'",
    time: "2 hours ago"
  },
  {
    icon: FileText,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Submitted assignment for 'Advanced Algorithms'",
    time: "Yesterday"
  },
  {
    icon: Calendar,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "RSVP'd to 'Tech Meetup'",
    time: "3 days ago"
  }
];

export default Profile;
