import AddPlanButton from '@/app/components/Buttons/AddPlanButton';
import { IWorkout } from '../../types/workoutstypes';
import Image from 'next/image';
import SaveForLater from '@/app/components/Buttons/SaveForLater';

const Page = async ({params}: {params: Promise<{ id: string }>}) => {
  const { id } = await params;

  const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`,{cache: 'no-store',});
  const workout: IWorkout = await response.json();
  
  if (!response.ok) {
    return (
      <main className="min-h-screen bg-[#0d0f12] px-4 py-10 text-white">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[#14171d] p-10 text-center">
          <h1 className="text-2xl font-bold">Workout not found.</h1>
          <p className="mt-2 text-sm text-gray-400">
            The workout you are looking for does not exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d0f12] px-4 py-7 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Main Workout Card */}
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-start">

          {/* ================= IMAGE ================= */}
          <div className="overflow-hidden rounded-xl">
            <Image
              src={workout.image}
              alt={workout.name}
              width={800}
              height={650}
              className="h-auto max-h-[650px] w-full object-cover object-center"
            />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="pt-0 lg:pt-0">

            {/* Title */}
            <h1 className="text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
              {workout.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups?.map((muscle: string) => (
                <span key={muscle} className="rounded-full bg-[#baff00] px-4 py-1 text-xs font-bold text-black">
                  {muscle}
                </span>
              ))}
            </div>

            {/* ================= INFO CARD ================= */}
            <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-[#15181e]">

              {/* Equipment */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                <span className="text-[12px] font-bold uppercase tracking-wider text-gray-400">
                  Equipment
                </span>

                <span className="text-sm text-gray-200">
                  {workout.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                <span className="text-[12px] font-bold uppercase tracking-wider text-gray-400">
                  Difficulty
                </span>

                <span className="text-sm text-gray-200">
                  {workout.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                <span className="text-[12px] font-bold uppercase tracking-wider text-gray-400">
                  Sets
                </span>

                <span className="text-sm text-gray-200">
                  {workout.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                <span className="text-[12px] font-bold uppercase tracking-wider text-gray-400">
                  Reps
                </span>

                <span className="text-sm text-gray-200">
                  {workout.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                <span className="text-[12px] font-bold uppercase tracking-wider text-gray-400">
                  Duration
                </span>

                <span className="text-sm text-gray-200">
                  {workout.duration}
                </span>
              </div>

              {/* Calories */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                <span className="text-[12px] font-bold uppercase tracking-wider text-gray-400">
                  Calories
                </span>

                <span className="text-sm text-gray-200">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between px-4 py-4">
                <span className="text-[12px] font-bold uppercase tracking-wider text-gray-400">
                  Rating
                </span>

                <span className="text-sm text-gray-200">
                  {workout.rating}
                </span>
              </div>

            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <section className="mt-6">
              <h2 className="text-lg font-bold uppercase tracking-wide">
                Instructions
              </h2>

              <ol className="mt-3 space-y-3">
                {workout.instructions?.map(
                  (instruction: string, index: number) => (
                    <li key={index} className="flex gap-3 text-[14px] leading-5 text-gray-400">
                      <span className="min-w-[14px] text-gray-500">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  )
                )}
              </ol>
            </section>

            {/* ================= BUTTONS ================= */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">

              {/* Add Plan */}
              <AddPlanButton workout={workout} />

              {/* Save */}
              <SaveForLater workout={workout} />

            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;