import { Badge } from "@/components/ui/badge";
import { Circle } from "lucide-react";

interface OnlineStatusProps {
  isOnline: boolean;
  nickname: string;
}

const OnlineStatus = ({ isOnline, nickname }: OnlineStatusProps) => {
  return (
    <div className="flex items-center gap-2">
      <Badge variant="secondary" className="flex items-center gap-1">
        <Circle className={`h-2 w-2 fill-current ${isOnline ? "text-green-500" : "text-gray-400"}`} />
        {nickname}
      </Badge>
    </div>
  );
};

export default OnlineStatus;