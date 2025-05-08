import { ArrowDown, ArrowUp, UserIcon } from "../../../utils/icons";
import type { ChatHeaderProps } from "./chat-header.module";

export default function ChatHeader({ name, hiddenChat, closeChat }: ChatHeaderProps) {
    return (
        <div className="flex rounded-t-xl justify-between items-center bg-[#283769] p-2">
            <div>
                <div className="flex items-center gap-1">
                    <UserIcon width="40px" />
                    <div className="flex flex-col text-left text-white text-[12px]">
                        <span>Chat with</span>
                        <strong>{name?.toUpperCase()}</strong>
                    </div>
                </div>
                {hiddenChat &&
                    <span className="text-[10px] text-left text-white pl-2">🟢 We reply inmmediately!</span>
                }
            </div>
            <div>
                {/* Change Arrow Icon when chat is open or closed */}
                {hiddenChat === true ?
                    <ArrowDown width="30px" cursor="pointer" onClick={closeChat} />
                    :
                    <ArrowUp width="30px" cursor="pointer" onClick={closeChat} />
                }
            </div>
        </div>
    )
}