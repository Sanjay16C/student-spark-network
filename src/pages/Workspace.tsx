
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Search, FileText } from "lucide-react";

const Workspace = () => {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Workspace</h1>
          <Button>New Discussion</Button>
        </div>

        {/* Search */}
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input className="pl-10" placeholder="Search discussions..." />
          </div>
          <Button variant="outline">Filter</Button>
        </div>

        {/* Discussion List */}
        <div className="grid gap-4">
          {discussions.map((discussion, index) => (
            <Card key={index} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{discussion.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{discussion.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{discussion.replies} replies</span>
                    <span>{discussion.date}</span>
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

const discussions = [
  {
    title: "Data Structures Assignment Help",
    description: "Need help understanding binary trees implementation...",
    replies: 12,
    date: "2 hours ago"
  },
  {
    title: "Study Group for Advanced Algorithms",
    description: "Looking for study partners for the upcoming exam...",
    replies: 8,
    date: "5 hours ago"
  },
  {
    title: "Project Collaboration",
    description: "Seeking team members for the semester project...",
    replies: 15,
    date: "1 day ago"
  }
];

export default Workspace;
