import React from "react";
import { IWorkout } from '../../types/workoutstypes';
import Image from "next/image";
import Link from "next/link";

const WorkoutCard = ({ workout }: { workout: IWorkout }) => {
    return (
        <Link
            href={`/workouts/${workout.id}`}
            className="group block overflow-hidden rounded-[24px] border border-[#272a30] bg-[#15171c] transition-all duration-300 hover:-translate-y-1 hover:border-[#3a3e45]"
        >
            {/* ================= Image ================= */}
            <div className="relative h-[295px] w-full overflow-hidden">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* ================= Content ================= */}
            <div className="px-9 pb-8 pt-9">

                {/* Muscle Groups */}
                <div className="mb-6 flex flex-wrap gap-3">
                    {workout.muscleGroups.map((muscle: string) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-[#b6ff00] px-4 py-1.5 text-[13px] font-extrabold uppercase tracking-wide text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Workout Name */}
                <h2 className="text-[28px] font-black uppercase leading-none tracking-[-0.02em] text-white">
                    {workout.name}
                </h2>

                {/* Equipment */}
                <p className="mt-3 text-[18px] text-[#969ba5]">
                    {workout.equipment}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-[#292c32]" />

                {/* Workout Stats */}
                <div className="flex items-center gap-7 text-[#9da3ae]">

                    {/* Duration */}
                    <div className="flex items-center gap-2">
                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 7v5l3 2" />
                        </svg>

                        <span className="text-[17px]">
                            {workout.duration} min
                        </span>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center gap-2">
                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M13.5 2.5c.4 3.2-1.2 5.2-2.8 6.7-1.3 1.2-2.4 2.5-2.4 4.5 0 2.4 1.7 4.3 3.9 4.3 2.7 0 4.8-2.2 4.8-5.1 0-2.1-1-4-3.5-5.9.1 1.6-.5 2.7-1.3 3.4.3-2.7.1-5.2-2.7-7.9Z" />
                            <path d="M7.5 15.3c-.4 2.8 1.5 5.2 4.5 5.2 2.4 0 4.5-1.5 5.1-3.8.5 3.9-2.3 6.8-6.1 6.8-4.3 0-7-3.4-6.2-7.2.3-1.6 1.3-2.8 2.7-3.8Z" />
                        </svg>

                        <span className="text-[17px]">
                            {workout.caloriesBurned} kcal
                        </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
                        </svg>

                        <span className="text-[17px]">
                            {workout.rating}
                        </span>
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;