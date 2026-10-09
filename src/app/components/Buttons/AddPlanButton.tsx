'use client';
import { CalendarPlus } from "lucide-react";
import { IWorkout } from '@/app/types/workoutstypes';
import { WorkoutContext } from "@/app/context/WorkoutContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";


const AddPlanButton = ({ workout }: { workout: IWorkout }) => {
    const { myPlan, setMyPlan } = useContext(WorkoutContext);

    const handleAddToPlan = () => {
        setMyPlan([...myPlan, workout]);
        toast.success(`Workout "${workout.name}" added to today's plan!`);
    }
    
    return (
        <button type="button" className="flex h-11 items-center justify-center gap-2 rounded-lg bg-[#baff00] px-5 text-xs font-bold text-black transition hover:bg-[#c8ff33] active:scale-[0.98]" onClick={handleAddToPlan}>
        
            <CalendarPlus size={15} />
            Add to today&apos;s plan

        </button>
    );
};

export default AddPlanButton;