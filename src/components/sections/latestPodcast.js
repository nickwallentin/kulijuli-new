import React from "react"
import loadable from "@loadable/component"

const SectionLatestPodcast = () => {
  const LatestPodcast = loadable(() => import("../latestPodcastiFrame"))
  return (
    <React.Fragment>
      <h2>Senaste podcastavsnittet</h2>
      <LatestPodcast />
    </React.Fragment>
  )
}

export default SectionLatestPodcast
