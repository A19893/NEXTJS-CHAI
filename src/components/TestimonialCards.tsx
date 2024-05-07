"use client"

import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const TestimonialCards = () => {
    const musicSchoolTestimonials = [
        {
            quote:
                "Joining the music school was the best decision I've ever made. The instructors are incredibly talented and passionate about teaching. I've grown so much as a musician and performer thanks to their guidance.",
            name: "Sarah Johnson",
            title: "Piano Student",
        },
        {
            quote:
                "The music school has been a second home to me. The sense of community here is amazing, and I've made lifelong friends through my classes and performances. I highly recommend it to anyone looking to explore their musical talents.",
            name: "Michael Lee",
            title: "Guitar Student",
        },
        {
            quote:
                "I've always been interested in music, but I never had the confidence to pursue it until I joined the music school. The instructors are so supportive and encouraging, and they've helped me discover a passion I never knew I had.",
            name: "Emily Chen",
            title: "Voice Student",
        },
        {
            quote:
                "Studying music at this school has been an incredible journey. Not only have I improved my technical skills, but I've also gained a deeper appreciation for music as an art form. I'm grateful for the opportunities and experiences I've had here.",
            name: "Daniel Ramirez",
            title: "Drums Student",
        },
        {
            quote:
                "The music school has provided me with the tools and resources I need to pursue my dreams in the music industry. From theory and composition to performance and production, I've received a well-rounded education that has prepared me for a career in music.",
            name: "Jessica Patel",
            title: "Music Production Student",
        },
    ];

    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
    )
}

export default TestimonialCards