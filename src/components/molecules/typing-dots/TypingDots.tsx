{/* Dots that display when Wizybot is thinking */ }
export default function TypingDots() {
    return (
        <span className="flex space-x-1 p-2">
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200" />
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-300" />
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-500" />
        </span>
    );
}
