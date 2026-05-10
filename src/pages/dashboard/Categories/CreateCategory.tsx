import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInput from "../../../components/FormInput";
import { Button } from "../../../components/ui/Button";

type formData = {
    nama: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama kategori tidak boleh kosong"),
});

export default function CreateCategory() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<formData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: formData) => {
    console.log(data);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md">

                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Create New Category</h1>
                    <p className="text-sm text-gray-500 mt-1">Silahkan isi semua data dengan benar</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <FormInput
                        text="Nama Kategori"
                        name="nama"
                        register={register}
                        error={errors.nama?.message}
                        type="text"
                        placeholder="Masukkan nama kategori"
                    />

                    <div className="pt-2">
                        <Button
                            label="Simpan"
                            type="submit"
                            variant="primary"
                            isLoading={isSubmitting}
                        />
                    </div>
                </form>

            </div>
        </div>
    );
}