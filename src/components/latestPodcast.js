import React from "react"
const PodcastIFrame = React.lazy(() =>
  import("../components/latestPodcastiFrame")
)

const LatestPodcast = () => {
  const isSSR = typeof window === "undefined"

  return (
    <React.Fragment>
      {!isSSR && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <PodcastIFrame />
        </React.Suspense>
      )}
    </React.Fragment>
  )
}

export default LatestPodcast
