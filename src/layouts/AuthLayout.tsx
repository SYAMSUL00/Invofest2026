import { Outlet } from "react-router-dom";

export default function AuthLayout(){
    return (
        <div className="bg-white-500 min-h-screen w-full grid grid-cols-2 items-center ">   
            {/* Kiri */}
            <div className="min-h-screen bg-white-500 flex flex-col items-center justify-center">
                 <img src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
                     alt=""
                     className="w-96"
                     />
                     <p>Invofest (Informatics Vocational Festival)</p>
            </div>
            {/* Kanan */}
            <div className="p-6">
                <Outlet />
            </div>
        </div>
    )
}