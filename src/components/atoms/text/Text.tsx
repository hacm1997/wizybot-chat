import type { TextProps } from "./text.model";

export default function Text({ children, className }: TextProps) {
    return <p className={`text-white ${className}`}>{children}</p>;
}