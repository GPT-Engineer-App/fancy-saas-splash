import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    quote: "CloudBoost has revolutionized our workflow. It's an indispensable tool for our team.",
    author: "Jane Doe, CEO of TechCorp"
  },
  {
    quote: "The analytics provided by CloudBoost have given us invaluable insights. Highly recommended!",
    author: "John Smith, CTO of DataDrive"
  },
  {
    quote: "Security was our top concern, and CloudBoost exceeded our expectations. We feel safe and efficient.",
    author: "Alice Johnson, CISO of SecureNet"
  }
]

export function TestimonialCarousel() {
  return (
    <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <blockquote className="text-lg text-white text-center mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-sm text-white opacity-75 not-italic">
                  {testimonial.author}
                </cite>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
