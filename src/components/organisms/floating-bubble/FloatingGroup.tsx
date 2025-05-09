import { useState } from "react";
import type { FloatingBubbleProps } from "./floating-group.model";
import { ChatBotBox } from "../chat-bot-box";
import { NameForm } from "../../molecules";

export default function FloatingGroup({ onNameSubmit, name }: FloatingBubbleProps) {
    // controller the chatBot open
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={`fixed ${name ? 'sm:top-40' : ''} md:bottom-4 md:right-4 z-50`}>
            {/* Name form */}
            {isOpen && name === null &&
                <NameForm
                    onSubmit={(name) => {
                        onNameSubmit(name);
                        setIsOpen(false);
                    }}
                    onCancel={() => setIsOpen(false)}
                />
            }
            {/* Open the chat bot when user enter name */}
            {name &&
                <ChatBotBox name={name} isOpen={isOpen} />
            }
        </div>
    );
}
