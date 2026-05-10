import { InputText } from "./ui/InputText";
import LabelInput from "./ui/Labelinput";

interface FormInputProps {
    text: string;
    type: string;
    name: string;
    register: any;
    error?: string;
    placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = ({ text, type, name, register, error, placeholder }) => {
    return (
        <div className="flex flex-col gap-1 mb-3">
            <LabelInput text={text} title={name} />
            <InputText
                type={type}
                name={name}
                register={register}
                error={error}
                placeholder={placeholder}
            />
        </div>
    );
};

export default FormInput;