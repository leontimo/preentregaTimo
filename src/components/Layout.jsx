// import React from "react";
// import NavBar from "./NavBar";

// const Layout = ({ children }) => {
//     return (
//         <>
//             <NavBar />
//             {children}
//         </>
//     )
// }

// export default Layout;

import React from "react";
import NavBar from "./NavBar";
import { useCart } from "./CartContext"; // Import useCart hook

const Layout = ({ children }) => {
    const { cartItems } = useCart(); // Use the useCart hook to access cart items

    return (
        <>
            <NavBar cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />
            {children}
        </>
    )
}

export default Layout;