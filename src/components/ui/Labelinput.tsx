interface LabelInputProps {
    text: string;
    title: string;
}

const LabelInput: React.FC<LabelInputProps> = ({ text, title }) => {
    return (
        <label htmlFor={title} className="font-semibold text-sm text-gray-700">
            {text}
        </label>
    );
};

export default LabelInput;