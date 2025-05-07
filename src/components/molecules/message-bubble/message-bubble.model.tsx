export interface MessageBubbleProps {
    children: React.ReactNode;
    position: "left" | "right";
    timestamp?: string;
    type?: "text" | "carousel";
}