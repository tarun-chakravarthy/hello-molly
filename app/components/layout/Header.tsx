import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../UI/Button";

// Navbar
const Header: React.FC = () => {
    return (
        <div className="py-4">
            <div className="navbar bg-backgroundAccent md:container mx-auto md:px-0">
                <div className="navbar-start">
                    <Image src="/Rivo.svg" alt="Logo" width={94} height={49} className="btn btn-ghost" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-primary md:text-[18px] uppercase">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/shop">Shop</Link></li>
                        <li><Link href="/features">Features</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-8">
                    <Image src="/icons/cart-icon.svg" alt="Cart" width={30} height={30} />
                    <Button buttonText="Login"  outline/>
                </div>
            </div>
        </div>
    );
};

export default Header;