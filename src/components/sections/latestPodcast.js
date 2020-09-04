import React from "react"
import loadable from "@loadable/component"
const LatestPodcast = loadable(() => import("../latestPodcastiFrame"))

const SectionLatestPodcast = () => {
  return (
    <React.Fragment>
      <h2>Senaste podcastavsnittet</h2>
      <React.Suspense fallback={<div>Loading</div>}>
        <LatestPodcast />
      </React.Suspense>
    </React.Fragment>
  )
}

export default SectionLatestPodcast
