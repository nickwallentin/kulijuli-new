import React from "react"
import styled from "styled-components"
import LoadingIcon from "../assets/loading.svg"

const Loading = () => {
  return <Spinner />
}

export default Loading

const Spinner = styled(LoadingIcon)`
  animation: spinner 2s infinite;
  width: 44px;
  height: 44px;
`
