"use client";

import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";


type EditProps = {
  task: {
    id: string;
    title: string;
    status: string;
    label: string;
    priority: string;
    due_date: Date | null;
  };
};

export default function EditDialog({ task }: EditProps) {
  const form = useForm({
    defaultValues: {
      id: task.id,
      title: task.title,
      status: task.status,
      label: task.label,
      priority: task.priority,
      due_date: task.due_date,
    },
  });

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Edit Task Details</DialogTitle>
      </DialogHeader>
      <div className="py-4">
   
      </div>
    </>
  );
}
