import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            {/* navbar  */}
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;