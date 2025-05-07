type Props = React.InputHTMLAttributes<HTMLInputElement>;
export default function CustomInput(props: Props) {
    return (
        <input
            {...props}
            className="border border-gray-300 rounded px-2 py-1 text-sm w-full"
        />
    );
}