import { useState } from "react";
import { Text } from "../../atoms";
import { AnimatedText } from "../../molecules/animated-text";
import { FloatingGroup } from "../../organisms";

// Content all landing home components
export default function Home() {
    const [name, setName] = useState<string | null>(null);
    return (
        <div className={`h-screen w-full flex flex-col ${name ? 'sm:pt-10 md:pt-0 justify-center' : 'pt-48 md:pt-0'} lg:justify-center items-center bg-gray-900 text-center px-4 relative`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Welcome to WizyBot chat
            </h1>
            <Text className="text-xl md:text-2xl">
                Wizy Bot is <AnimatedText />
            </Text>

            {/* Float Group (chat box) */}
            <FloatingGroup onNameSubmit={setName} name={name} />
        </div>
    )
}