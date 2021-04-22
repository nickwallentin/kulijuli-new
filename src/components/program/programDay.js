import "dayjs/locale/sv"

import React, { useState } from "react"

import ProgramItem from "./programItem"
import dayjs from "dayjs"

const ProgramDay = ({ day }) => {
  const [isOpen, setIsOpen] = useState(
    !dayjs().isAfter(day.node.data.Datum, "day")
  )
  const date = dayjs(day.node.data.Datum).locale("sv")
  const prettyDate = dayjs(date).subtract(2, "hour").format("D MMMM kl HH.mm")
  console.log("Date past today =>", dayjs().isAfter(day.node.data.Datum, "day"))

  const prettyDay = dayjs(date).format("dddd")
  return (
    <div className="program-day">
      <div className="head">
        <strong>{prettyDate}</strong>
      </div>
      {isOpen && (
        <div className="section">
          <h2>Innehåll</h2>
          <ul>
            {day.node.data.Program.map(item => {
              return <ProgramItem item={item} />
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ProgramDay
