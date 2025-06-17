import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquareText, MoreHorizontal } from "lucide-react";

export interface ContractProps {
  avatarSrc: string;
  avatarFallback: string;
  title: string;
  name: string;
  status: string;
  startDate: string;
  activity: string;
  lastActive: string | null;
  actionButtonText: string;
}

export function ContractRow({
  avatarSrc,
  avatarFallback,
  title,
  name,
  status,
  startDate,
  activity,
  lastActive,
  actionButtonText,
}: ContractProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(200px,1.5fr)_minmax(110px,max-content)_minmax(110px,max-content)_minmax(200px,2fr)_minmax(180px,auto)] items-start p-4 md:p-6 gap-x-4 lg:gap-x-6 gap-y-4">
      {/* Column 1: User Info */}
      <div className="flex items-start gap-3 md:gap-4">
        <Avatar className="h-10 w-10 mt-0.5 md:mt-0">
          <AvatarImage src={avatarSrc || "/placeholder.svg"} alt={name} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="font-semibold text-sm md:text-base leading-tight">
            {title}
          </h3>
          <p className="text-muted-foreground text-xs md:text-sm">{name}</p>
        </div>
      </div>

      {/* Column 2: Status */}
      <div className="flex flex-col items-start text-xs md:text-sm">
        <Badge
          variant="default"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs whitespace-nowrap"
        >
          {status}
        </Badge>
      </div>

      {/* Insert new Column 3: Start Date */}
      <div className="flex flex-col items-start text-xs md:text-sm">
        <span className="text-muted-foreground whitespace-nowrap">
          {startDate}
        </span>
      </div>

      {/* Column 4: Activity Details */}
      <div className="flex flex-col items-start gap-1 text-xs md:text-sm text-foreground/80">
        <p className="leading-snug">{activity}</p>
        {lastActive && (
          <p className="text-muted-foreground leading-snug">{lastActive}</p>
        )}
      </div>

      {/* Column 5: Action Buttons */}
      <div className="flex items-center gap-2 md:justify-self-end w-full md:w-auto">
        <Button
          variant="outline"
          size="sm"
          className="border-primary text-primary hover:bg-primary/5 hover:text-primary flex-grow md:flex-grow-0"
        >
          {actionButtonText}
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 border-primary text-primary hover:bg-primary/5 hover:text-primary"
        >
          <MessageSquareText className="h-4 w-4" />
          <span className="sr-only">Message</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 text-muted-foreground hover:bg-muted/50"
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">More options</span>
        </Button>
      </div>
    </div>
  );
}
