import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext/AuthContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const CartAuthContext = () => {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    const checkoutHandler = () => {
        try {
            if (token) {
                toast.success("Check out available soon");
            } else {
                toast.error("Please sign in first");
                navigate('/login');
            }
        } catch (err) {
            console.log(err)
        }
    };  

    return {
        checkoutHandler,
    };
};

export default CartAuthContext;
