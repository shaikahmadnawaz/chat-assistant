"use client";
import { ArrowRight } from "lucide-react";
import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";
import AssistantIcon from "@/components/AssistantIcon";
import UserIcon from "@/components/UserIcon";
export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <section className="w-full h-full flex flex-col dark:bg-gray-900">
      <header className="p-4 bg-white shadow-md dark:bg-gray-800">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Chat Assistant
        </h1>
      </header>

      <main className="flex-grow p-4 overflow-y-auto">
        {messages
          .filter((message) => message.role === "user")
          .map((userMessage) => (
            <div key={userMessage.id}>
              <div className="flex items-end justify-end mb-4 space-x-2">
                <span className="rounded-lg py-2 px-3 bg-green-500 text-white max-w-xs">
                  {userMessage.content}
                </span>
                <UserIcon />
              </div>
            </div>
          ))}

        {messages
          .filter((message) => message.role === "assistant")
          .map((assistantMessage) => (
            <div key={assistantMessage.id}>
              <div className="flex items-end mb-4 space-x-2">
                <AssistantIcon />
                <span className="rounded-lg py-2 px-3 bg-blue-500 text-white max-w-xs">
                  {assistantMessage.content}
                </span>
              </div>
            </div>
          ))}
      </main>

      <footer className="p-4 fixed inset-x-0 bottom-0 bg-white shadow-md dark:bg-gray-800">
        <form className="flex items-center space-x-2" onSubmit={handleSubmit}>
          <input
            className="flex-grow rounded-lg border-2 border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
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
            <ArrowRight />
          </Button>
        </form>
      </footer>
    </section>
  );
}