import React from "react"

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      src="//rum-static.pingdom.net/pa-5f59e032146aea0015000ad2.js"
      async
    ></script>,
  ])
}
