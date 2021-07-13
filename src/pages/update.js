import React, { useEffect } from "react"

const Update = () => {
  useEffect(async () => {
    const res = await fetch(
      "https://api.netlify.com/build_hooks/60ed42e1599273c77dfc2ba5",
      { method: "POST" }
    )
  }, [])
  return <p>sidan uppdateras</p>
}

export default Update
