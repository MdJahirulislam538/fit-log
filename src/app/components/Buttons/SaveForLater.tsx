'use client';
import { IWorkout } from '@/app/types/workoutstypes';
import { Bookmark } from 'lucide-react';
import { WorkoutContext } from '@/app/context/WorkoutContext';
import React, { useContext } from "react";
import { toast } from "react-toastify";

const SaveForLater = ({ workout }: { workout: IWorkout }) => {
    const { savedWorkouts, setSavedWorkouts } = useContext(WorkoutContext);

    const handleSaveForLater = () => {
        console.log('Saved Workouts before adding:', savedWorkouts);
        
        setSavedWorkouts([...savedWorkouts, workout]);
        toast.success(`Workout "${workout.name}" saved for later!`);
    }
    
    return (
        <button type="button" className="flex h-11 items-center justify-center gap-2 rounded-lg border border-white/15 bg-transparent px-5 text-xs font-medium text-gray-300 transition hover:border-white/30 hover:bg-white/5 active:scale-[0.98]" onClick={handleSaveForLater}>
            <Bookmark size={15} />
            Save for later
        </button>
    );
};

export default SaveForLater;