import React from "react"
import AchievementCard from "@/components/card/AchievementCard"
import { achievementsCard } from "@/constant/landing"
export default function Form() {
  return (
    <div className="flex">
      {
        achievementsCard.map(({
          key,
          image, title, background, description}) => (
          <AchievementCard
            key={key}
            image={image}
            title={title}
            background={background}
            description={description}
            parentClassName="mx-auto px-4 py-5"
          />
        ))
      }
    </div>
  )
}