import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../components/FormInput";
import { TextArea } from "../components/ui/TextArea";

const schema = z.object({
    nama: z.string().min(3, "Nama minimal 3 karakter"),
    alamat: z.string().min(5, "Alamat wajib di isi"),
    email: z.string().email("Email tidak valid"),
    bio: z.string().min(1, "Bio tidak boleh kosong"),
});

type RegisterFormType = z.infer<typeof schema>;

export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormType>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: RegisterFormType) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-1 text-gray-800">Registrasi Event</h1>
                <hr className="mb-6 border-gray-200" />

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <FormInput
                        text="Nama"
                        name="nama"
                        type="text"
                        register={register}
                        error={errors.nama?.message}
                        placeholder="Masukkan nama lengkap"
                    />
                    <FormInput
                        text="Alamat"
                        name="alamat"
                        type="text"
                        register={register}
                        error={errors.alamat?.message}
                        placeholder="Masukkan alamat domisili"
                    />
                    <FormInput
                        text="Email"
                        name="email"
                        type="email"
                        register={register}
                        error={errors.email?.message}
                        placeholder="Masukkan email aktif"
                    />
                    <TextArea
                        label="Bio"
                        name="bio"
                        register={register}
                        error={errors.bio?.message}
                        placeholder="Tentang dirimu..."
                    />
                    <button
                        type="submit"
                        className="w-full bg-red-900 hover:bg-red-800 text-white font-semibold py-3 rounded-lg mt-2 transition-colors"
                    >
                        Daftar
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Sudah punya akun?{" "}
                    <a href="/login" className="text-red-900 font-medium hover:underline">
                        Masuk di sini
                    </a>
                </p>
            </div>
        </div>
    );
}