import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Competition from "./pages/Competition";
import Beranda from "./pages/Beranda";  
import Seminar from "./pages/Seminar";
import Talkshow from "./pages/Talkshow";
import Workshop from "./pages/Workshop";
import MainLayout from "./layouts/MainLayouts";
import AuthLayout from "./layouts/AuthLayout";
import CreateCategory from "./pages/dashboard/Categories/CreateCategory";
import CreateEvent from "./pages/dashboard/events/CreateEvent";
import CreateSpeaker from "./pages/dashboard/speakers/CreateSpeaker";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Landing pages */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Beranda />} />
                    <Route path="/competition" element={<Competition />} />
                    <Route path="/seminar" element={<Seminar />} />
                    <Route path="/talkshow" element={<Talkshow />} />
                    <Route path="/workshop" element={<Workshop />} />

                    <Route path="/category/create" element={<CreateCategory />} />
                    <Route path="/event/create" element={<CreateEvent />} />
                    <Route path="/speaker/create" element={<CreateSpeaker />} />
                </Route>

                {/* Auth */}
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>

                {/* Dashboard */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;