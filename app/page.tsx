"use client";

import { SendHorizonal } from "lucide-react";
import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";
import AssistantIcon from "@/components/AssistantIcon";
import UserIcon from "@/components/UserIcon";
import { useEffect, useRef } from "react";
export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });
  console.log(messages);

  const messageEndRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <section className="min-h-screen w-full h-full flex flex-col bg-gray-900">
      <header className="p-4 shadow-md bg-gray-800">
        <h1 className="text-xl font-bold text-gray-100">Chat Assistant</h1>
      </header>

      <main className="flex-grow p-4 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id}>
            {message.role === "user" ? (
              <div className="flex items-end justify-end mb-4 space-x-2">
                <span className="rounded-lg py-2 px-3 bg-green-500 text-white max-w-xs">
                  {message.content}
                </span>
                <UserIcon />
              </div>
            ) : (
              <div className="flex items-end mb-4 space-x-2">
                <AssistantIcon />
                <span className="rounded-lg py-2 px-3 bg-blue-500 text-white max-w-xs">
                  {message.content}
                </span>
              </div>
            )}
          </div>
        ))}
      </main>

      <div ref={messageEndRef}></div>

      <footer className="p-4 fixed inset-x-0 bottom-0 shadow-md bg-gray-800">
        <form className="flex items-center space-x-2" onSubmit={handleSubmit}>
          <input
            className="flex-grow rounded-lg border-2 p-2 border-gray-600 bg-gray-700 text-white"
            placeholder="Continue your conversation..."
            type="text"
            value={input}
            onChange={handleInputChange}
          />
          <Button
            className="bg-blue-500 text-white"
            type="submit"
            variant="default"
          >
            <SendHorizonal />
          </Button>
        </form>
      </footer>
    </section>
  );
}