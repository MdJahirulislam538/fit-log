import React from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "../../assets/banner.png";

const Hero = () => {
    return (
        <section className="px-4 py-6 sm:px-6 lg:px-0">
            <div
                className="relative mx-auto flex min-h-[380px] max-w-[1360px] items-center overflow-hidden rounded-2xl border border-[#25282e] bg-[#15171c]">

                <div className="relative z-20 w-full px-7 py-12 sm:px-10 lg:w-[58%] lg:px-12">
                    {/* Small Label */}
                    <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#b6ff00]">
                        Workout Library
                    </p>

                    {/* Heading */}
                    <h1 className="max-w-[600px] text-4xl font-black uppercase leading-[0.9] tracking-[-0.035em] text-white sm:text-5xl lg:text-[52px]">
                        Train with intent. Log
                        <br />
                        every set.
                    </h1>

                    {/* Description */}
                    <p className="mt-5 max-w-[480px] text-[14px] leading-6 text-[#9297a2]">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today&apos;s plan, and watch the week&apos;s work
                        add up.
                    </p>

                    {/* CTA */}
                    <Link href="/workouts" className="mt-6 inline-flex h-[35px] items-center justify-center rounded-md bg-[#b6ff00] px-5 text-[10px] font-extrabold uppercase tracking-wide text-black transition-all duration-200 hover:bg-[#c5ff33] hover:shadow-[0_0_25px_rgba(182,255,0,0.15)]">
                        Browse Workouts
                    </Link>
                </div>


                <div
                    className="
                        pointer-events-none absolute
                        right-6 top-1/2
                        hidden h-[350px] w-[390px]
                        -translate-y-1/2
                        items-center justify-center
                        sm:flex
                        lg:right-10
                    "
                >
                    {/* Soft Glow */}
                    <div
                        className="
                            absolute h-[260px] w-[260px]
                            rounded-full
                            bg-[#b6ff00]/5
                            blur-3xl
                        "
                    />

                    {/* Workout Illustration */}
                    <Image
                        src={Banner}
                        alt="Workout illustration"
                        width={400}
                        height={400}
                        priority
                        className="
                            relative z-10
                            h-[330px] w-[330px]
                            object-contain
                        "
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;