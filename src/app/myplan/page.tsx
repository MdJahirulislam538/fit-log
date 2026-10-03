import type { IWorkout } from './../types/workoutstypes';

type MyPlanProps = {
    workouts: IWorkout[];
};

const MyPlan = ({ workouts }: MyPlanProps) => {
    return (
        <div>
            <h1 className="text-2xl font-bold">My Plan</h1>
        </div>
    );
};

export default MyPlan;