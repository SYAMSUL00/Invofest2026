import React from "react";

interface BaseInputProps {
    label?: string;
    name: string;
    register: any;
    error?: string;
    type?: string;
    placeholder?: string;
}

export const InputText: React.FC<BaseInputProps> = ({
    name,
    register,
    error,
    type = "text",
    placeholder
}) => {
    return (
        <div className="flex flex-col gap-1">
            <input
                type={type}
                placeholder={placeholder}
                {...register(name)}
                className={`border rounded px-3 py-2 outline-none transition-all ${
                    error
                        ? "border-red-500 bg-red-50 text-red-900 placeholder:text-red-300 focus:ring-1 focus:ring-red-500" 
                        : "border-gray-400 bg-white text-gray-800 focus:ring-1 focus:ring-gray-400"
                }`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};