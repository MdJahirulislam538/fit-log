import { IWorkout } from '../../types/workoutstypes';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if (!response.ok) {
    return <div>Workout not found.</div>;
  }

  const workout: IWorkout = await response.json();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">{workout.name}</h1>
      <p className="mt-4 text-gray-700">{workout.description}</p>
    </main>
  );
};

export default page;