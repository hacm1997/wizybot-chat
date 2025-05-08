import type { Message } from "../../../types/message";
import { ChatFooter, ChatHeader, MessageBubble, TypingDots } from "../../molecules";
import { ProductCarousel } from "../product-carousel";
import { getCurrentTime } from "../../../utils/getCurrentTime";
import type { ChatBotBoxProps } from "./chat-bot-box.model";
import { useChatStore } from "../../../store/chatStore";
import { useEffect, useRef, useState } from "react";
import { SendIcon } from "../../../utils/icons";
import { generateBotResponse } from "../../../utils/generateBotResponse";

let idCount = 2;

export default function ChatBotBox({ name, isOpen }: ChatBotBoxProps) {
    const {
        messages,
        input,
        isTyping,
        setMessages,
        setInput,
        setIsTyping,
    } = useChatStore(); // Persistence data with Zustand

    const [hiddenChat, setHiddenChat] = useState(!isOpen);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Send message function
    const handleSend = async () => {
        const trimmedInput = input.trim();
        if (!trimmedInput) return;

        const userMessage: Message = {
            id: idCount++,
            text: trimmedInput,
            position: "right",
            type: "text",
            timestamp: getCurrentTime(),
        };

        const nextMessages = [...messages, userMessage];
        setMessages(nextMessages);
        setInput("");
        setIsTyping(true);

        // Simulate bot thinking delay
        setTimeout(async () => {
            const botMessage = await generateBotResponse(trimmedInput, idCount);
            setMessages([...nextMessages, botMessage]);
            setIsTyping(false);
        }, 3000);
    };

    // Focus in the last Bubble Message
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isTyping]);

    const HelperText = () => (
        <div className="p-1 bg-blue-100 rounded-2xl text-center mb-2">
            <span className="text-gray-400 text-[12px] font-semibold">For more options write “Help”</span>
        </div>
    )

    return (
        <div className={`${hiddenChat === true ? "w-md" : "w-[200px]"} mx-auto p-4`}>
            {/* Chat Header Menu */}
            <ChatHeader name={name} hiddenChat={hiddenChat} closeChat={() => setHiddenChat(!hiddenChat)} />

            {/* Message Bubbles*/}
            {hiddenChat === true &&
                <>
                    <div className={`h-[540px] bg-white p-4 shadow overflow-y-auto overflow-x-hidden text-left`}>
                        <HelperText />
                        {messages.map((msg) => (
                            <MessageBubble key={msg.id} position={msg.position} timestamp={msg.timestamp} type={msg.type}>
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
                    {/* Input to send messages to WizyBot */}
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
            }

            {/* Chat Footer Info */}
            {hiddenChat === true &&
                <ChatFooter />
            }
        </div>
    );
}