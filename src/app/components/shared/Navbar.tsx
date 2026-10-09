'use client';

import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Logo from "../../assets/logo.png";
import { WorkoutContext } from "@/app/context/WorkoutContext";

const Navbar = () => {
    const { myPlan, savedWorkouts } = useContext(WorkoutContext);
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: "Workouts", href: "/workouts" },
        { name: "My Plan", href: "/myplan" },
    ];

    const isActive = (href: string) => pathname === href;

    const linkClass = (href: string) =>
        `block rounded-lg px-4 py-2 text-sm font-medium transition-colors md:rounded-full md:py-1.5 md:text-[14px] ${
            isActive(href)
                ? "bg-[#17250d] text-[#b6ff00]"
                : "text-[#a3a5aa] hover:bg-[#202226] hover:text-white"
        }`;

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 border-b border-[#1d1e21] bg-[#0d0e10]">
            <nav className="mx-auto flex min-h-[68px] max-w-[1360px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-0">

                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="flex shrink-0 items-center gap-2"
                >
                    <Image
                        src={Logo}
                        alt="FITLOG"
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                    />

                    <span className="text-base font-extrabold tracking-tight text-white">
                        FITLOG
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-1 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={linkClass(item.href)}
                            aria-current={
                                isActive(item.href) ? "page" : undefined
                            }
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Plan & Saved */}
                <div className="hidden shrink-0 items-center gap-4 lg:flex">
                    <div className="flex items-center gap-2 text-[14px] font-medium text-[#b7b8bc] transition hover:text-white">
                        <span>Plan</span>
                        <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#b6ff00] px-1 text-[12px] font-bold text-black">
                            {myPlan.length}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-[14px] font-medium text-[#b7b8bc] transition hover:text-white">
                        <span>Saved</span>
                        <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full border border-[#35383d] px-1 text-[12px] text-[#9b9da2]">
                            {savedWorkouts.length}
                        </span>
                    </div>
                </div>

                {/* Mobile / Tablet Menu Button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#292b2f] bg-[#151619] text-[#b6ff00] transition hover:bg-[#202226] md:hidden"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    {menuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 6l12 12M18 6L6 18"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div
                    id="mobile-navigation"
                    className="border-t border-[#24262a] bg-[#0d0e10] px-4 py-4 shadow-xl md:hidden sm:px-6"
                >
                    <div className="mx-auto flex max-w-[1360px] flex-col gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeMenu}
                                className={linkClass(item.href)}
                                aria-current={
                                    isActive(item.href) ? "page" : undefined
                                }
                            >
                                {item.name}
                            </Link>
                        ))}

                        <div className="my-2 border-t border-[#292b2f]" />

                        <div
                            onClick={closeMenu}
                            className="flex items-center justify-between rounded-lg px-4 py-2 text-sm transition text-[#b7b8bc] hover:text-white"
                        >
                            <span>Plan</span>
                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b6ff00] px-1 text-[10px] font-bold text-black">
                                {myPlan.length}
                            </span>
                        </div>

                        <div 
                            onClick={closeMenu}
                            className="flex items-center justify-between rounded-lg px-4 py-2 text-sm transition text-[#b7b8bc] hover:text-white"
                        >
                            <span>Saved</span>
                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#35383d] px-1 text-[10px]">
                                {savedWorkouts.length}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;