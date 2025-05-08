import type { Message } from "../../../types/message";
import {
    BubbleMessageContent,
    ChatFooter,
    ChatHeader,
} from "../../molecules";
import { getCurrentTime } from "../../../utils/getCurrentTime";
import type { ChatBotBoxProps } from "./chat-bot-box.model";
import { useChatStore } from "../../../store/chatStore";
import { useState } from "react";
import { generateBotResponse } from "../../../utils/generateBotResponse";

let idCount = 2;

export default function ChatBotBox({ name, isOpen }: ChatBotBoxProps) {
    const { messages, input, isTyping, setMessages, setInput, setIsTyping } =
        useChatStore(); // Persistence data with Zustand

    const [hiddenChat, setHiddenChat] = useState(!isOpen);

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

    return (
        <div
            className={`${hiddenChat === true ? "w-md" : "w-[200px]"} mx-auto p-4`}
        >
            {/* Chat Header Menu */}
            <ChatHeader
                name={name}
                hiddenChat={hiddenChat}
                closeChat={() => setHiddenChat(!hiddenChat)}
            />

            {/* Message Bubbles*/}
            {hiddenChat === true && (
                <>
                    <BubbleMessageContent
                        messages={messages}
                        input={input}
                        isTyping={isTyping}
                        handleSend={handleSend}
                        setInput={setInput}
                    />
                    {/* Chat Footer Info */}
                    <ChatFooter />
                </>
            )}
        </div>
    );
}
