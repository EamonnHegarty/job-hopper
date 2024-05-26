import { JobType } from "@/utils/types";
import {
  MapPin,
  Briefcase,
  CalendarDays,
  RadioTower,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import JobInfo from "./JobInfo";
import DeleteJobButton from "./DeleteJobButton";
import { format } from "date-fns";

function JobCard({ job }: { job: JobType }) {
  const date = format(new Date(job.createdAt), "MM/dd/yyyy");
  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          {job.position}
          <Link href={job.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="cursor-pointer" />
          </Link>
        </CardTitle>
        <CardDescription>{job.company}</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="mt-4 grid grid-cols-2 gap-4">
        <JobInfo icon={<Briefcase />} text={job.mode} />
        <JobInfo icon={<MapPin />} text={job.location} />
        <JobInfo icon={<CalendarDays />} text={date} />
        <Badge className="w-32  justify-center">
          <JobInfo
            icon={<RadioTower className="w-4 h-4" />}
            text={job.status}
          />
        </Badge>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button asChild size="sm">
          <Link href={`/jobs/${job.id}`}>edit</Link>
        </Button>
        <DeleteJobButton id={job.id} />
      </CardFooter>
    </Card>
  );
}
export default JobCard;
