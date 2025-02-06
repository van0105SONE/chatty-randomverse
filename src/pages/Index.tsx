import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import OnlineStatus from "@/components/OnlineStatus";
import { uniqueNamesGenerator, adjectives, colors, animals } from "unique-names-generator";

interface Message {
  id: number;
  content: string;
  timestamp: Date;
  isSent: boolean;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [nickname] = useState(() =>
    uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
      separator: "",
      style: "capital",
    })
  );

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now(),
      content,
      timestamp: new Date(),
      isSent: true,
    };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate received message
    setTimeout(() => {
      const receivedMessage: Message = {
        id: Date.now() + 1,
        content: "This is a simulated response!",
        timestamp: new Date(),
        isSent: false,
      };
      setMessages((prev) => [...prev, receivedMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <div className="p-4 border-b">
            <OnlineStatus isOnline={true} nickname={nickname} />
          </div>
          <div className="h-[60vh] overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                content={message.content}
                timestamp={message.timestamp}
                isSent={message.isSent}
              />
            ))}
          </div>
          <div className="p-4 border-t">
            <ChatInput onSendMessage={handleSendMessage} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;