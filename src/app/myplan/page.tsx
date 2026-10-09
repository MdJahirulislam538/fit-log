'use client';

import { useContext, useMemo, useState } from "react";
import type { IWorkout } from "./../types/workoutstypes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { WorkoutContext } from "../context/WorkoutContext";

type MyPlanProps = {
  workouts?: IWorkout[];
};

type SortOption = "duration" | "calories";

const MyPlan = ({ workouts = [] }: MyPlanProps) => {
  const router = useRouter();
  const { myPlan, savedWorkouts, setMyPlan, setSavedWorkouts } =
    useContext(WorkoutContext);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const activeWorkouts = activeTab === "today" ? myPlan : savedWorkouts;

  const onRemove = (workoutId: IWorkout["id"]) => {
    if (activeTab === "today") {
      setMyPlan?.((prev) => prev.filter((item) => item.id !== workoutId));
      return;
    }

    setSavedWorkouts?.((prev) =>
      prev.filter((item) => item.id !== workoutId)
    );
  };

  // =========================
  // Statistics
  // =========================
  const stats = useMemo(() => {
    const list = activeWorkouts ?? [];

    const exercises = list.length;

    const minutes = list.reduce(
      (total, workout) => total + (workout.duration ?? 0),
      0
    );

    const calories = list.reduce(
      (total, workout) => total + (workout.caloriesBurned ?? 0),
      0
    );

    return { exercises, minutes, calories };
  }, [activeWorkouts]);

  // =========================
  // Sort workouts
  // =========================
  const sortedWorkouts = useMemo(() => {
    const list = [...(activeWorkouts ?? [])];

    return list.sort((a, b) => {
      if (sortBy === "duration") {
        return (b.duration ?? 0) - (a.duration ?? 0);
      }

      if (sortBy === "calories") {
        return (b.caloriesBurned ?? 0) - (a.caloriesBurned ?? 0);
      }

      return 0;
    });
  }, [activeWorkouts, sortBy]);

  return (
    <div className="min-h-screen bg-[#0d0f12] px-6 py-8 text-white">
      <div className="mx-auto max-w-[1360px]">
        {/* ================= HEADER ================= */}
        <div className="mb-5">
          <h1 className="text-2xl font-extrabold uppercase">My Plan</h1>

          <p className="mt-1 text-sm text-[#8b929d]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* ================= STATS ================= */}
        <div className="mb-7 rounded-2xl border border-[#242932] bg-[#13161c] px-5 py-7">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="border-b border-[#242932] pb-5 md:border-b-0 md:border-r md:pb-0">
              <p className="text-[14px] text-[#8b929d]">Exercises</p>
              <p className="mt-1 text-3xl font-bold text-[#c4ff00]">
                {stats.exercises}
              </p>
            </div>

            <div className="border-b border-[#242932] px-0 pb-5 pt-5 md:border-b-0 md:border-r md:px-7 md:py-0">
              <p className="text-[14px] text-[#8b929d]">Minutes</p>
              <p className="mt-1 text-3xl font-bold">{stats.minutes}</p>
            </div>

            <div className="pt-5 md:px-7 md:py-0">
              <p className="text-[14px] text-[#8b929d]">Calories</p>
              <p className="mt-1 text-3xl font-bold">{stats.calories}</p>
            </div>
          </div>
        </div>

        {/* ================= FILTER BAR ================= */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex h-[34px] rounded-xl border border-[#252a33] bg-[#15181e] p-[3px]">
            <button
              type="button"
              onClick={() => setActiveTab("today")}
              className={`rounded-lg px-4 text-[14px] ${
                activeTab === "today"
                  ? "bg-[#222730] text-white"
                  : "text-[#8b929d]"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-lg px-5 text-[14px] ${
                activeTab === "saved"
                  ? "bg-[#222730] text-white"
                  : "text-[#8b929d]"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[14px] text-[#858c97]">Sort By</span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="h-[31px] rounded-lg border border-[#2a2f38] bg-[#14171c] px-3 text-[14px] text-white outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
            </select>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        {sortedWorkouts.length === 0 ? (
          <div className="flex min-h-[255px] items-center justify-center rounded-2xl border border-dashed border-[#292e36]">
            <div className="text-center">
              <h2 className="text-lg font-extrabold uppercase">
                Nothing Here Yet
              </h2>

              <p className="mt-1 text-[14px] text-[#858c97]">
                {activeTab === "today"
                  ? "Browse the library and add a lift to get today moving."
                  : "Save a workout to keep it for later and come back to it anytime."}
              </p>

              <button
                type="button"
                className="mt-5 rounded-full bg-[#c4ff00] cursor-pointer px-6 py-2.5 text-[12px] font-bold text-black"
                onClick={() => router.push("/workouts")}
              >
                Go to workouts
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {sortedWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="flex min-h-[96px] items-center gap-4 rounded-2xl border border-[#252a32] bg-[#13161c] px-4 py-3"
              >
                <Image
                  src={workout.image}
                  alt={workout.name}
                  width={122}
                  height={68}
                  className="h-[68px] w-[122px] shrink-0 rounded-xl object-cover"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-extrabold uppercase tracking-tight text-white">
                    {workout.name}
                  </h3>

                  <p className="mt-0.5 text-[12px] text-[#858c97]">
                    {workout.equipment ?? "Workout"}
                  </p>

                  <div className="mt-2 flex items-center gap-3 text-[12px] text-[#a4aab3]">
                    <span className="flex items-center gap-1">
                      <span className="text-[#c4ff00]">◷</span>
                      {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1">
                      <span className="text-[#c4ff00]">♨</span>
                      {workout.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1">
                      <span className="text-[#c4ff00]">☆</span>
                      {workout.rating ?? "4.1"}
                    </span>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <button
                    type="button"
                    className="h-8 rounded-full cursor-pointer border border-[#303744] px-4 text-[12px] text-white transition hover:bg-[#20252d]"
                    onClick={() => router.push(`/workouts/${workout.id}`)}
                  >
                    View Details
                  </button>

                  <button
                    type="button"
                    className="flex h-8 items-center gap-1.5 rounded-full cursor-pointer bg-[#c4ff00] px-4 text-[12px] font-bold text-black transition hover:bg-[#d1ff33]"
                  >
                    <span>✓</span>
                    Mark as Done
                  </button>

                  <button
                    type="button"
                    className="ml-1 text-lg leading-none text-[#69717c] cursor-pointer transition hover:text-white"
                    aria-label={`Remove ${workout.name}`}
                    onClick={() => onRemove(workout.id)}
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlan;