import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "../components/FormInput";
import { PasswordInput } from "../components/ui/PasswordInput";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";   

type LoginForm = {
    email: string;
    password: string;
};

const schema = z.object({
    email: z.string().email("Format email tidak valid").min(1, "Email wajib diisi"),
    password: z.string().min(8, "Password minimal 8 karakter"),
});

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        resolver: zodResolver(schema),
    });

    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);

    const onSubmit = (data: LoginForm) => {
        if(data.email == "admin@gmail.com" && data.password == "admin123"){
            alert("Login berhasil!");
            login(data.email);
            navigate("/dashboard");
        } else {
            alert("Login gagal!");
        }
        console.log(data);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center mb-1 text-gray-800">Login</h1>
                <hr className="mb-6 border-gray-200" />

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <FormInput
                        text="Email"
                        name="email"
                        register={register}
                        error={errors.email?.message}
                        type="email"
                        placeholder="Masukkan email anda"
                    />

                    <PasswordInput
                        label="Password"
                        name="password"
                        register={register}
                        error={errors.password?.message}
                    />

                    <button
                        type="submit"
                        className="w-full bg-red-900 hover:bg-red-800 text-white font-semibold py-3 rounded-lg mt-2 transition-colors"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Belum punya akun?{" "}
                    <a href="/register" className="text-red-900 font-medium hover:underline">
                        Daftar di sini
                    </a>
                </p>
            </div>
        </div>
    );
}