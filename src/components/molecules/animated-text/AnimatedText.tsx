import { useEffect, useState } from 'react';

const phrases = [
    'your smart assistant.',
    'here to help you.',
    'AI-powered and ready.',
    'simple and fast.',
];

export default function AnimatedText() {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[index];
        const changeDelay = 2500; // Time the phrase stays visible before fading out

        const handleFadeEffect = () => {
            // Start fading out after showing the full phrase
            setIsFading(true);
            setTimeout(() => {
                setText(currentPhrase); // Change text after fade-out
                setIsFading(false);
            }, 500); // Wait for fade-out before changing the text
        };

        // Make the first word appear instantly and then fade out
        if (text === '') {
            setText(currentPhrase.split(' ')[0]); // Show the first word instantly
            setTimeout(() => handleFadeEffect(), 500); // Trigger the fade effect after a brief pause
        }

        // Change the phrase every 2.5 seconds
        const interval = setInterval(() => {
            handleFadeEffect();
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Move to the next phrase
            }, changeDelay);
        }, changeDelay + 500); // Total time for each phrase (including fade-in and fade-out)

        return () => clearInterval(interval);
    }, [index, text]);

    return (
        <span
            className={`transition-opacity duration-1000 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'
                } text-blue-400`}
        >
            {text}
        </span>
    );
}