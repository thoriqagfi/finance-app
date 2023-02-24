import React, { HtmlHTMLAttributes, ReactElement, ReactHTML, TextareaHTMLAttributes } from "react";

type Achievement = {
  key: number;
  image: string;
  background: string;
  title: string;
  description?: string;
}

type Testimonial = {
  key: number;
  image: string;
  name: string;
  position: string;
}

export type CardProps = {
  key: number;
  image?: string;
  title: string;
  background?: string;
  description?: string;
  parentClassName?: string;
}

export const achievementsCard: Achievement[] = [
  {
    key: 1,
    image: "/document-code.png",
    background: "#2A5EE4",
    title: "Made for developers",
    description: `" Transfer business money easily through \n finance app without any hassle. This app can \n help you control.Transfer business money \n easily through finance "`
  },
  {
    key: 2,
    image: "/video.png",
    background: "#EACB29",
    title: "Helpful video tutorials",
    description: `" Transfer business money easily through \n finance app without any hassle. This app can \n help you control.Transfer business money \n easily through finance "`
  },
  {
    key: 3,
    image: "/scroll.png",
    background: "#AC1FDD",
    title: "120+ coded blocks",
    description: `" Transfer business money easily through \n finance app without any hassle. This app can \n help you control.Transfer business money \n easily through finance "`
  }
]

export const testimonialsCard: Testimonial[] = [
  {
    key: 1,
    image: '/testimonials-1.png',
    name: 'Thariq Agfi Hermawan',
    position: 'From Sepuluh Nopemeber Institute of Technology',
  },
  {
    key: 2,
    image: '/testimonials-2.png',
    name: 'Thariq Agfi Hermawan',
    position: 'From Sepuluh Nopemeber Institute of Technology',
  },
  {
    key: 3,
    image: '/testimonials-3.png',
    name: 'Thariq Agfi Hermawan',
    position: 'From Sepuluh Nopemeber Institute of Technology',
  }
]