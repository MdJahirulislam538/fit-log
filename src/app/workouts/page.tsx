import { IWorkout } from "../types/workoutstypes";
import WorkoutCard from "../components/homepage/card";

const Workouts = async () => {
    const response = await fetch(
        "https://api.abcz.workers.dev/api/fitlog",
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch workouts");
    }

    const workouts: IWorkout[] = await response.json();

    return (
        <main className="min-h-screen bg-[#0b0c0e] px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1360px]">

                {/* ================= Header ================= */}
                <div className="mb-5">
                    <h1 className="text-[24px] font-black uppercase leading-none tracking-[-0.02em] text-white sm:text-[28px]">
                        The Library
                    </h1>

                    <p className="mt-1 text-[11px] text-[#777d87]">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>


                {/* ================= Workout Grid ================= */}
                <div
                    className="
                        grid grid-cols-1 gap-4
                        sm:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {workouts.map((workout) => (
                        <WorkoutCard
                            key={workout.id}
                            workout={workout}
                        />
                    ))}
                </div>

            </div>
        </main>
    );
};

export default Workouts;