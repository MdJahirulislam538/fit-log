'use client';
import React, { createContext } from 'react';
import { IWorkout } from '../types/workoutstypes';

interface IWorkoutContext {
    myPlan: IWorkout[];
    setMyPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    savedWorkouts: IWorkout[];
    setSavedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const WorkoutContext = createContext<IWorkoutContext>({
  myPlan: [],
  setMyPlan: () => {},
  savedWorkouts: [],
  setSavedWorkouts: () => {},
});

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [myPlan, setMyPlan] = React.useState<IWorkout[]>([]);
    const [savedWorkouts, setSavedWorkouts] = React.useState<IWorkout[]>([]);

    return (
        <WorkoutContext.Provider value={{ myPlan, setMyPlan, savedWorkouts, setSavedWorkouts }}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvider;