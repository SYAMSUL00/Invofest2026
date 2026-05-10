import React from "react";

interface TextAreaProps {
    label: string;
    name: string;
    register: any;
    error?: string;
    placeholder?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, name, register, error, placeholder }) => {
    return (
        <div className="flex flex-col gap-1">
            <label className={`text-sm font-semibold transition-colors ${
                error ? "text-red-500" : "text-gray-700"
            }`}>
                {label}
            </label>
            <textarea
                {...register(name)}
                placeholder={placeholder}
                rows={4}
                className={`w-full p-3 border rounded-lg outline-none transition-all resize-none ${
                    error
                        ? "border-red-500 bg-red-50 text-black placeholder:text-red-300 focus:ring-1 focus:ring-red-500"
                        : "border-gray-800 bg-white text-black focus:ring-1 focus:ring-gray-400"
                }`}
            />
            {error && <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>}
        </div>
    );
};