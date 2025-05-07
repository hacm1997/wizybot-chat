import type { DefaulButtonProps } from "./prymary-button.model";

export default function PrimaryButton({ onClick, children }: DefaulButtonProps) {
    return (
        <button
            onClick={onClick}
            className="bg-[#334B8C] text-white py-2 px-4 rounded hover:bg-blue-700 transition cursor-pointer"
        >
            {children}
        </button>
    )
}