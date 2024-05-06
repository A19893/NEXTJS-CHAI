"use client";
import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: "Expert Instructors",
      description:
        "Learn from experienced musicians who are passionate about teaching. Our instructors have years of experience in the music industry and are dedicated to helping you reach your full potential.",
    },
    {
      title: "Wide Range of Instruments",
      description:
        "Whether you want to learn piano, guitar, drums, violin, or any other instrument, we've got you covered. Choose from our diverse selection of instruments and start your musical journey today.",
    },
    {
      title: "Customized Lessons",
      description:
        "Every student is unique, which is why we offer personalized lesson plans tailored to your individual goals and skill level. Whether you're a beginner or an advanced musician, our instructors will work with you to create a curriculum that suits your needs.",
    },
    {
      title: "Performance Opportunities",
      description:
        "Showcase your talents and gain valuable experience with our performance opportunities. From recitals and concerts to competitions and festivals, we provide various platforms for you to share your music with others and build confidence as a performer.",
    },
    {
      title: "Flexible Scheduling",
      description:
        "We understand that life can be hectic, which is why we offer flexible scheduling options. Whether you prefer weekday evenings or weekend mornings, we'll find a time that works for you. Take control of your schedule and pursue your passion for music on your terms.",
    },
  ];


const WhyChooseUs = () => {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs