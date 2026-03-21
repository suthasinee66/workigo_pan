// DashboardContent.tsx
import SummaryCards from "@/components/dashboard/SummaryCards";
import JobpostTab from "@/components/dashboard/JobpostTab";
import EmploymentsTab from "@/components/dashboard/EmploymentsTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DashboardContent() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <SummaryCards />
      <Tabs defaultValue="jobpost" className="w-full">
        <TabsList className="grid h-auto w-full grid-cols-2 gap-1">
          <TabsTrigger value="jobpost" className="min-h-[2.75rem] whitespace-normal px-3 py-2 text-xs leading-tight sm:text-sm">
            Jobpost
          </TabsTrigger>
          <TabsTrigger value="employments" className="min-h-[2.75rem] whitespace-normal px-3 py-2 text-xs leading-tight sm:text-sm">
            Employments
          </TabsTrigger>
        </TabsList>
        <TabsContent value="jobpost">
          <JobpostTab />
        </TabsContent>
        <TabsContent value="employments">
          <EmploymentsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}