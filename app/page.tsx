"use client";
import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";
export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <section className="w-full h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <header className="p-4 bg-white shadow-md dark:bg-gray-800">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Chat Assistant
        </h1>
      </header>
      <main className="flex-grow p-4 overflow-y-auto">
        <div className="flex items-end mb-4 space-x-2">
          <svg
            className=" h-6 w-6 text-gray-500 dark:text-gray-400"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 8V4H8" />
            <rect height="12" rx="2" width="16" x="4" y="8" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
          </svg>
          <div className="rounded-lg py-2 px-3 bg-blue-500 text-white max-w-xs">
            <p>Hello! How can I assist you today?</p>
          </div>
        </div>
        <div className="flex items-end justify-end mb-4 space-x-2">
          <div className="rounded-lg py-2 px-3 bg-green-500 text-white max-w-xs">
            <p>I need help with my account.</p>
          </div>
          <svg
            className=" h-6 w-6 text-gray-500 dark:text-gray-400"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </main>
      {messages.map((message) => (
        <div
          key={message.id}
          className={`border-t border-black/10 ${
            message.role === "assistant" && "bg-gray-50"
          }`}
        >
          <div className="max-w-3xl mx-auto py-6 flex">
            {message.role === "assistant"}
            <span className="ml-3">{message.content}</span>
          </div>
        </div>
      ))}
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
            Send
          </Button>
        </form>
      </footer>
    </section>
  );
}
