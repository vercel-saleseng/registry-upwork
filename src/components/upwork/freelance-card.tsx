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
}: FreelancerCardProps) {
  return (
    <Card className="w-full max-w-sm rounded-xl shadow-lg overflow-hidden font-sans">
      <CardContent className="p-5 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <div className="relative">
              <Avatar className="h-16 w-16 border-2 border-white">
                {avatarUrl ? (
                  <AvatarImage
                    src={avatarUrl || "/placeholder.svg"}
                    alt={name}
                  />
                ) : null}
                <AvatarFallback
                  className={!avatarUrl ? "bg-gray-200" : ""} // Use a light grey background if no image URL
                >
                  {/* If avatarUrl was provided but image failed, show initials. If no avatarUrl, show nothing for plain circle. */}
                  {avatarUrl ? name.substring(0, 2).toUpperCase() : null}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -top-1 -left-1 bg-pink-500 p-1 rounded-full shadow-md">
                <Star className="h-3 w-3 text-white fill-white" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
              <p className="text-sm text-gray-500">{location}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-green-600 hover:text-green-700"
          >
            <Heart className={`h-6 w-6 ${isFavorite ? "fill-current" : ""}`} />
            <span className="sr-only">Favorite</span>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-lg font-semibold text-gray-800">{jobSuccess}%</p>
            <p className="text-xs text-gray-500">Job Success</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800">{jobsCount}</p>
            <p className="text-xs text-gray-500">Jobs</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800">
              ${hourlyRate}/hr
            </p>
            <p className="text-xs text-gray-500">Rate</p>
          </div>
        </div>

        <div>
          <h3 className="text-md font-semibold text-gray-700">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs px-3 py-1"
            >
              {skill}
            </Badge>
          ))}
        </div>

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
            variant="outline"
            className="flex-grow border-2 border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700 font-semibold py-2.5 rounded-lg text-base"
          >
            Invite to job
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-gray-300 text-gray-600 hover:bg-gray-100 rounded-full p-2.5"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="sr-only">Message</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
