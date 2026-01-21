import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { destinations, packages } from "@/lib/data";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  destination: z.string().min(1, "Please select a destination"),
  checkIn: z.string().min(1, "Check-in date is required"),
  guests: z.string().min(1, "Number of guests is required"),
  requests: z.string().optional(),
});

type BookingValues = z.infer<typeof bookingSchema>;

export default function Booking() {
  const { toast } = useToast();
  const form = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      destination: "",
      checkIn: "",
      guests: "",
      requests: "",
    },
  });

  function onSubmit(data: BookingValues) {
    console.log(data);
    toast({
      title: "Request Received",
      description: "Our concierge team will contact you shortly to confirm your booking.",
      className: "bg-primary text-white border-primary",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <div className="bg-primary pt-32 pb-12 px-6">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            Book Your Stay
          </motion.h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Let us arrange the perfect getaway for you. Fill out the form below and our dedicated concierge will handle the rest.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-medium">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-neutral-50 border-neutral-200 h-12" {...field} />
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
                      <FormLabel className="text-primary font-medium">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" className="bg-neutral-50 border-neutral-200 h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-medium">Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 000-0000" className="bg-neutral-50 border-neutral-200 h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-medium">Destination / Package</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-neutral-50 border-neutral-200 h-12">
                            <SelectValue placeholder="Select a destination" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="none" disabled>Select Property</SelectItem>
                          {destinations.map(d => (
                            <SelectItem key={d.id} value={`dest-${d.id}`}>{d.name}</SelectItem>
                          ))}
                          {packages.map(p => (
                            <SelectItem key={p.id} value={`pkg-${p.id}`}>{p.title} (Package)</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="checkIn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-medium">Preferred Check-in Date</FormLabel>
                      <FormControl>
                        <Input type="date" className="bg-neutral-50 border-neutral-200 h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-medium">Number of Guests</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-neutral-50 border-neutral-200 h-12">
                            <SelectValue placeholder="Select guests" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, "7+"].map((num) => (
                            <SelectItem key={num} value={num.toString()}>{num} Guest{num !== 1 && "s"}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="requests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-medium">Special Requests</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Dietary requirements, special occasions, or specific preferences..." 
                        className="bg-neutral-50 border-neutral-200 min-h-[120px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg h-14 rounded-full">
                Submit Request
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
