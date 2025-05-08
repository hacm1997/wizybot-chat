import { useEffect, useRef } from "react";
import { ProductCarousel } from "../../organisms";
import { MessageBubble } from "../message-bubble";
import { TypingDots } from "../typing-dots";
import type { BubbleMessageContentProps } from "./bubble-message-content.model";
import { SendIcon } from "../../../utils/icons";

{/* Messages content component */ }
export default function BubbleMessageContent({
    messages,
    isTyping,
    input,
    setInput,
    handleSend,
}: BubbleMessageContentProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const HelperText = () => (
        <div className="p-1 bg-blue-100 rounded-2xl text-center mb-2">
            <span className="text-gray-400 text-[12px] font-semibold">
                For more options write “Help”
            </span>
        </div>
    );

    // Focus in the last Bubble Message
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages.length]);

    return (
        <>
            <div
                className={`h-[540px] bg-white p-4 shadow overflow-y-auto overflow-x-hidden text-left`}
            >
                <HelperText />
                {/* Dynamic Message Bubbles */}
                {messages.map((msg) => (
                    <MessageBubble
                        key={msg.id}
                        position={msg.position}
                        timestamp={msg.timestamp}
                        type={msg.type}
                    >
                        {msg.type === "carousel" && msg.products ? (
                            <ProductCarousel products={msg.products} />
                        ) : (
                            msg.text
                        )}
                    </MessageBubble>
                ))}
                {isTyping && (
                    <MessageBubble position="left" type="text">
                        <TypingDots />
                    </MessageBubble>
                )}
                <div ref={messagesEndRef} />
            </div>
            {/* Input to send messages to WizyBot AI */}
            <div className="flex gap-2 bg-white p-4 items-center">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    className="flex-1 p-2 outline-none border-none focus:outline-none focus:border-none"
                    placeholder="Write a message..."
                />
                <div className="bg-[#334B8C] rounded-full p-2 cursor-pointer hover:bg-[#1d2b52]">
                    <SendIcon width="24px" onClick={handleSend} />
                </div>
            </div>
        </>
    );
}
