import type { MessageBubbleProps } from "./message-bubble.model";

{
    /* Dynamic Message Bubble Component */
}
export default function MessageBubble({
    children,
    position,
    timestamp,
    type,
}: MessageBubbleProps) {
    return (
        <div
            className={`flex  ${position === "right" ? "justify-end" : "justify-start"
                } mb-2`}
        >
            <div className={`${position === "left" && "flex gap-1 pt-1 w-full"}`}>
                {position === "left" && (
                    <img
                        src="/wizybot-logo.webp"
                        alt="Wizybot-logo"
                        title="Wizybot"
                        className="w-[20px] h-[20px]"
                    />
                )}
                <div
                    className={`${type === "text" ? "max-w-md" : "w-full"
                        } px-4 py-2 rounded-lg ${position === "right"
                            ? "bg-[#64C8D7] text-black"
                            : "bg-gray-200 text-black"
                        }`}
                >
                    {children}
                    {timestamp && (
                        <div className="text-xs text-left mt-1 opacity-70">{timestamp}</div>
                    )}
                </div>
            </div>
        </div>
    );
}
