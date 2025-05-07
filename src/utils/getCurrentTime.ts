export const getCurrentTime = () => {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const date = now.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  return `${time} | ${date}`;
};
