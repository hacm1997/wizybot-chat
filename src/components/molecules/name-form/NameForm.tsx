import { useState } from "react";
import { PrimaryButton } from "../../atoms";
import { CustomInput } from "../../atoms/custom-input";
import styles from '../../../utils/styles.module.css';
import type { NameFormProps } from "./name-form.module";

export default function NameForm({ onSubmit }: NameFormProps) {
    const [name, setName] = useState("");

    const handleSubmit = () => {
        if (name !== '' && name.trim()) {
            onSubmit(name);
            setName("");
        } else {
            alert('You must enter a name')
        }
    };

    return (
        <div className={styles.customBoxShadow + " bg-white p-4 shadow-lg rounded-xl w-64 space-y-2 flex flex-col items-center"}>
            <div className="w-[100px]">
                <img src="/wizybot-logo.webp" alt="WizyBot-Logo" title="WizyBot" />
            </div>
            <h5 className="font-bold text-[24px]">Chat with WizyBot</h5>
            <p className="text-sm font-medium text-left">What's your name?</p>
            <form>
                <CustomInput
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    placeholder="Wrtie your name..."
                    required
                />
                <div className="flex justify-center gap-2 pt-2">
                    <PrimaryButton onClick={handleSubmit}>Send</PrimaryButton>
                </div>
            </form>
        </div>
    );
}
