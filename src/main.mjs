import { TestimonialsCard } from "./components/TestimonialsCard.mjs";
import { getFreelancesTestimonies } from "./services/userService.mjs";

const testimonies = await getFreelancesTestimonies();

console.log(testimonies);
