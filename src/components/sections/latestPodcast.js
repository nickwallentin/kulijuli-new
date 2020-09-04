import React from "react"
import loadable from "@loadable/component"
const LatestPodcast = loadable(() => import("../latestPodcastiFrame"))

const SectionLatestPodcast = () => {
  return (
    <React.Fragment>
      <h2>Senaste podcastavsnittet</h2>
      <LatestPodcast />
    </React.Fragment>
  )
}

export default SectionLatestPodcast
