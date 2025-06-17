import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle, Star, Zap } from "lucide-react";

interface FreelancerCardProps {
  avatarUrl: string | undefined;
  name: string;
  location: string;
  jobSuccess: number;
  jobsCount: number;
  hourlyRate: number;
  title: string;
  skills: string[];
  isAvailableNow: boolean;
  isFavorite: boolean;
  lastContract?: string;
  buttonText?: string;
  buttonVariant?: "rehire" | "invite";
}

export default function FreelancerCard({
  avatarUrl,
  name,
  location,
  jobSuccess,
  jobsCount,
  hourlyRate,
  title,
  skills,
  isAvailableNow,
  isFavorite,
  lastContract,
  buttonText = "Invite to job",
  buttonVariant = "invite",
}: FreelancerCardProps) {
  return (
    <Card className="w-full max-w-sm rounded-xl shadow-lg overflow-hidden">
      <CardContent className="p-5 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <div className="relative">
              <Avatar className="h-16 w-16 border-2 border-background">
                {avatarUrl ? (
                  <AvatarImage
                    src={avatarUrl || "/placeholder.svg"}
                    alt={name}
                  />
                ) : null}
                <AvatarFallback
                  className={!avatarUrl ? "bg-muted" : ""} // Use muted background if no image URL
                >
                  {/* If avatarUrl was provided but image failed, show initials. If no avatarUrl, show nothing for plain circle. */}
                  {avatarUrl ? name.substring(0, 2).toUpperCase() : null}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -top-1 -left-1 bg-destructive p-1 rounded-full shadow-md">
                <Star className="h-3 w-3 text-destructive-foreground fill-destructive-foreground" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">{name}</h2>
              <p className="text-sm text-muted-foreground">{location}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary hover:text-primary/80"
          >
            <Heart className={`h-6 w-6 ${isFavorite ? "fill-current" : ""}`} />
            <span className="sr-only">Favorite</span>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-lg font-semibold text-foreground">
              {jobSuccess}%
            </p>
            <p className="text-xs text-muted-foreground">Job Success</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground">{jobsCount}</p>
            <p className="text-xs text-muted-foreground">Jobs</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground">
              ${hourlyRate}/hr
            </p>
            <p className="text-xs text-muted-foreground">Rate</p>
          </div>
        </div>

        {/* Only show title for invite mode */}
        {buttonVariant !== "rehire" && (
          <div>
            <h3 className="text-md font-semibold text-foreground">{title}</h3>
          </div>
        )}

        {/* Last contract text for rehire mode */}
        {lastContract && (
          <div className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-medium">Last contract together:</span>
            <br />
            {lastContract}
          </div>
        )}

        {/* Only show skills for invite mode */}
        {buttonVariant !== "rehire" && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-muted text-muted-foreground hover:bg-muted/80 text-xs px-3 py-1"
              >
                {skill}
              </Badge>
            ))}
          </div>
        )}

        {isAvailableNow && (
          <div>
            <Badge
              variant="outline"
              className="border-blue-500 text-blue-600 bg-blue-50 hover:bg-blue-100 text-sm px-3 py-1.5"
            >
              <Zap className="h-4 w-4 mr-1.5 fill-blue-500" />
              Available now
            </Badge>
          </div>
        )}

        <div className="flex items-center space-x-3 pt-2">
          <Button
            variant={buttonVariant === "rehire" ? "default" : "outline"}
            className={
              buttonVariant === "rehire"
                ? "flex-grow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 rounded-lg text-base"
                : "flex-grow border-2 border-primary text-primary hover:bg-primary/10 hover:text-primary font-semibold py-2.5 rounded-lg text-base"
            }
          >
            {buttonText}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-border text-muted-foreground hover:bg-muted rounded-full p-2.5"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="sr-only">Message</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
