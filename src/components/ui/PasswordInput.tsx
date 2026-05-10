import React, { useState } from "react";

interface PasswordInputProps {
    label: string;
    name: string;
    register: any;
    error?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
    label,
    name,
    register,
    error
}) => {
    const [show, setShow] = useState(false);

    return (
        <div className="flex flex-col gap-1">
            {/* Label berubah merah jika error */}
            <label className={`text-sm font-semibold transition-colors ${
                error ? "text-red-500" : "text-gray-700"
            }`}>
                {label}
            </label>

            <div className="relative">
                <input
                    type={show ? "text" : "password"}
                    {...register(name)}
                    placeholder="Masukkan password"
                    /* Logic styling: 
                       - Border, Text, dan BG menjadi merah jika ada error
                       - Focus ring disesuaikan agar tidak default biru
                    */
                    className={`w-full p-3 border rounded-lg outline-none transition-all ${
                        error
                            ? "border-red-500 bg-red-50 text-red-900 placeholder:text-red-300 focus:ring-1 focus:ring-red-500"
                            : "border-black bg-white text-black focus:ring-1 focus:ring-gray-400"
                    }`}
                />

                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium transition-colors ${
                        error ? "text-red-500" : "text-black hover:text-black"
                    }`}
                >
                    {show ? "Hide" : "Show"}
                </button>
            </div>

            {error && <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>}
        </div>
    );
};