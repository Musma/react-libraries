import { useState } from "react"
import { DatePicker } from "./components"

const App = () => {
  const [dateTime, setDateTime] = useState<string | undefined>(undefined) 
    return (
      <div className="h-full w-full">
        <div>{dateTime}
        <DatePicker handleDatePick={(date) => setDateTime(date)} />
        </div>
      </div>
    )
  }
  
  export default App
  