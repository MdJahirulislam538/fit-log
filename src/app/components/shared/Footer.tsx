import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.png";

const Footer = () => {
    return (
        <footer className="border-t border-[#1d1e21] bg-[#0b0c0e]">
            <div className="mx-auto flex h-[92px] max-w-[1360px] items-center justify-between px-5">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2.5"
                >
                    <Image
                        src={Logo}
                        alt="FITLOG"
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                    />

                    <span className="text-[16px] font-extrabold tracking-tight text-white">
                        FITLOG
                    </span>
                </Link>


                {/* Copyright */}
                <p className="text-right text-[14px] leading-5 text-[#686d77]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;