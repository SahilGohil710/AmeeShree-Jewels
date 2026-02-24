
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitAppointment } from "./appointment-actions";

const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  preferredDate: z.string().refine((val) => val, "Please select a valid date."),
  preferredTime: z.string().refine((val) => val, "Please select a time."),
  visitType: z.enum([
    "store-visit",
    "video-consultation",
    "custom-design-discussion",
  ]),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export function AppointmentForm() {
  const [dateRange, setDateRange] = useState({ min: '', max: '' });
  const { toast } = useToast();

  useEffect(() => {
    const today = new Date();
    const minDate = today.toISOString().split("T")[0];

    const maxDate = new Date(today);
    maxDate.setMonth(today.getMonth() + 2);
    const maxDateStr = maxDate.toISOString().split("T")[0];
    
    setDateRange({ min: minDate, max: maxDateStr });
  }, []);

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      preferredDate: "",
      preferredTime: "",
      visitType: "store-visit",
    },
  });

  const onSubmit = async (values: AppointmentFormValues) => {
    const result = await submitAppointment(values);

    if (result.success) {
      toast({
        title: "Appointment Request Sent!",
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: result.message || "There was a problem with your request.",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Your Phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="preferredDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} min={dateRange.min} max={dateRange.max} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="preferredTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Time</FormLabel>
                <FormControl>
                  <Input type="time" {...field} min="10:00" max="18:00" step="1800" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="visitType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Visit Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col md:flex-row gap-4"
                >
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem value="store-visit" />
                    </FormControl>
                    <FormLabel className="font-normal">Store Visit</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem value="video-consultation" />
                    </FormControl>
                    <FormLabel className="font-normal">Video Consultation</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem value="custom-design-discussion" />
                    </FormControl>
                    <FormLabel className="font-normal">Custom Design Discussion</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
          {form.formState.isSubmitting ? "Processing..." : "Book Appointment"}
        </Button>
      </form>
    </Form>
  );
}
