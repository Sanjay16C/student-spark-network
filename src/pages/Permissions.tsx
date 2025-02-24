
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Clock, CheckCircle, XCircle } from "lucide-react";

const Permissions = () => {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Permissions</h1>
          <Button>New Request</Button>
        </div>

        {/* New Request Form */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Submit Permission Request</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Request Type</label>
              <Input placeholder="e.g., On-Duty, Leave of Absence" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <Textarea placeholder="Provide details about your request" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Duration</label>
              <div className="grid grid-cols-2 gap-4">
                <Input type="date" />
                <Input type="date" />
              </div>
            </div>
            <Button type="submit">Submit Request</Button>
          </form>
        </Card>

        {/* Requests List */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Recent Requests</h2>
          {requests.map((request, index) => (
            <Card key={index} className="p-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{request.type}</h3>
                      <p className="text-sm text-gray-600 mt-1">{request.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${request.statusClass}`}>
                      {request.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>Submitted {request.date}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const requests = [
  {
    type: "On-Duty Request",
    description: "Technical Workshop Participation",
    status: "Approved",
    statusClass: "bg-green-100 text-green-800",
    date: "2 days ago"
  },
  {
    type: "Leave of Absence",
    description: "Medical Appointment",
    status: "Pending",
    statusClass: "bg-yellow-100 text-yellow-800",
    date: "1 day ago"
  },
  {
    type: "Late Submission",
    description: "Assignment Extension Request",
    status: "Declined",
    statusClass: "bg-red-100 text-red-800",
    date: "3 days ago"
  }
];

export default Permissions;
