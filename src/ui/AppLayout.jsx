import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    
    return (
        <div className="layout">
            {isLoading && <Loader />}
            <Header />
            <main>
                {/* The Outlet represents the child component in terms of routing */}
                <Outlet />
            </main>
            <CartOverview />
        </div>
    );
}

export default AppLayout;
