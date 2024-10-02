import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

function AppLayout() {
    return (
        <div>
            <Header />
            <main>
                <h1>Content</h1>
                {/* The Outlet represents the child component in terms of routing */}
                <Outlet />
            </main>
            <CartOverview />
        </div>
    );
}

export default AppLayout;
