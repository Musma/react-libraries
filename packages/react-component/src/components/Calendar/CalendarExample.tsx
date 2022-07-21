import { useState } from "react"
import { Calendar } from "./Calendar"

export const CalendarExample = () => {
    const [selectedDay, setSelectedDay] = useState<string | undefined>()
return (
    <div>
        <>selected Day: {selectedDay ? selectedDay.toString(): '-'}</>
        <Calendar handleDatePick={(date) => {setSelectedDay(date)}} />
    </div>
)
}