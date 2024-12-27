import { Outlet } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";


export default function RootLayout() {
    return (
        <>
            <MainNavbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}
