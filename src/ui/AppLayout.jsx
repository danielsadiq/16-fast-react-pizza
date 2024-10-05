import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    
    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            {<Loader />}
            <Header />
            <div className="overflow-y-scroll">
                <main className="sm:overflow-y-hidden max-w-3xl mx-auto"> 
                    {/* The Outlet represents the child component in terms of routing */}
                    <Outlet />
                </main>
            </div>
            <CartOverview />
        </div>
    );
}

export default AppLayout;
