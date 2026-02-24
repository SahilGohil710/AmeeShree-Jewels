
import { AppointmentForm } from "./appointment-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BookAppointmentPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold tracking-tight">Book an Appointment</CardTitle>
            <p className="text-muted-foreground mt-2">
              We invite you to a personalized consultation with our jewelry experts.
            </p>
          </CardHeader>
          <CardContent>
            <AppointmentForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
