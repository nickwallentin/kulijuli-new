import React from "react"
import Loading from "../components/loading"
const PodcastIFrame = React.lazy(() =>
  import("../components/latestPodcastiFrame")
)

const LatestPodcast = () => {
  const isSSR = typeof window === "undefined"

  return (
    <React.Fragment>
      {!isSSR && (
        <React.Suspense fallback={<Loading />}>
          <PodcastIFrame />
        </React.Suspense>
      )}
    </React.Fragment>
  )
}

export default LatestPodcast
