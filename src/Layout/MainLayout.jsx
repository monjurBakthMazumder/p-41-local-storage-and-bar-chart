import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Component/Shared/Navbar/Navbar";
import Spinner from '../Component/Spinner/Spinner'

const MainLayout = () => {
    const navigation = useNavigation()
    const isLoading = navigation.state == "loading"
    return (
        <div>
            <Navbar/>
            {
                isLoading
                ?
                <Spinner/>
                :
                <div className="px-5 sm:px-[10%] my-10">
                    <Outlet/>
                </div>
            }
        </div>
    );
};

export default MainLayout;