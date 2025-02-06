import { formatDistanceToNow } from "date-fns";

interface ChatMessageProps {
  content: string;
  timestamp: Date;
  isSent: boolean;
}

const ChatMessage = ({ content, timestamp, isSent }: ChatMessageProps) => {
  return (
    <div className={`flex flex-col ${isSent ? 'items-end' : 'items-start'} mb-4`}>
      <div className={`message-bubble ${isSent ? 'sent' : 'received'}`}>
        {content}
      </div>
      <span className="text-xs text-muted-foreground mt-1">
        {formatDistanceToNow(timestamp, { addSuffix: true })}
      </span>
    </div>
  );
};

export default ChatMessage;