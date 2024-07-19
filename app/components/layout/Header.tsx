import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../UI/Button";

const Header: React.FC = () => {
    return (
        <header className="py-4 bg-backgroundAccent">
            <div className="container mx-auto flex items-center justify-between">
                <div className="col-span-4 flex justify-start items-center">
                    <Image src="/Rivo.svg" alt="Logo" width={94} height={49} />
                </div>
                <nav className="grid grid-cols-12 gap-8 w-full items-center">
                    <div className="col-span-8">
                        <ul className="flex space-x-4 justify-end items-center text-primary">
                            <li>
                                <Link href="/">
                                    <p className="hover:underline">Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <p className="hover:underline">Shop</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/features">
                                    <p className="hover:underline">Features</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <p className="hover:underline">Contact</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-4 gap-8 flex justify-end items-center">
                        <Image src="/icons/cart-icon.svg" alt="Cart" width={30} height={30} />
                        <Button buttonText="LogIn" outline />
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;