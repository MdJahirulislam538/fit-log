'use client';
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { WorkoutContext } from "@/app/context/WorkoutContext";

const Navbar = () => {
    const { myPlan, savedWorkouts } = useContext(WorkoutContext);

    return (
        <header className="sticky top-0 z-50 border-b border-[#1d1e21] bg-[#0d0e10]">
            <nav className="mx-auto flex h-[68px] max-w-[1360px] items-center justify-between px-5">

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

                <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">

                    <Link
                        href="/workouts"
                        className="rounded-full bg-[#17250d] px-4 py-1.5 text-[11px] font-semibold text-[#b6ff00] transition-all hover:bg-[#203313]"
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/myplan"
                        className="rounded-full px-4 py-1.5 text-[11px] font-medium text-[#92949a] transition-all hover:text-white"
                    >
                        My Plan
                    </Link>

                </div>


                <div className="hidden items-center gap-5 md:flex">

                    <div className="flex items-center gap-2 text-[11px] font-medium text-[#b7b8bc] transition hover:text-white">
                        <span>Plan</span>

                        <span className="flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#b6ff00] px-1 text-[9px] font-bold text-black">
                            {myPlan.length}
                        </span>
                    </div>


                    <div className="flex items-center gap-2 text-[11px] font-medium text-[#b7b8bc] transition hover:text-white" >
                        <span>Saved</span>

                        <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full border border-[#35383d] px-1 text-[9px] text-[#9b9da2]">
                            {savedWorkouts.length}
                        </span>
                    </div>

                </div>


                {/* ================= Mobile Menu ================= */}
                <div className="dropdown dropdown-end md:hidden">
                    <button
                        tabIndex={0}
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#292b2f] bg-[#151619] text-[#b6ff00]"
                        aria-label="Open menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    <ul
                        tabIndex={-1}
                        className="menu dropdown-content z-[1] mt-3 w-52 rounded-xl border border-[#292b2f] bg-[#121315] p-2 shadow-2xl"
                    >
                        <li>
                            <Link
                                href="/workouts"
                                className="text-sm text-[#b6ff00]"
                            >
                                Workouts
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my-plan"
                                className="text-sm text-[#a3a5aa]"
                            >
                                My Plan
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/plan"
                                className="flex justify-between text-sm text-[#a3a5aa]"
                            >
                                Plan
                                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b6ff00] px-1 text-[10px] font-bold text-black">
                                    0
                                </span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/saved"
                                className="flex justify-between text-sm text-[#a3a5aa]"
                            >
                                Saved
                                <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#35383d] px-1 text-[10px]">
                                    0
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;