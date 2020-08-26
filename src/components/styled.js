import styled from "styled-components"

export const Wrap = styled.div`
  max-width: 980px;
  width: ${props => (props.mobileEdge ? "100%" : "95%")};
  margin: 0 auto;
`

export const Section = styled.section`
  background: ${props => (props.bg ? props.bg : "initial")};
  padding: ${props => (props.space ? props.space : "30px 0px")};
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: ${props => (props.cols ? props.cols : "1fr 1fr")};

  @media (max-width: 979px) {
    grid-template-columns: ${props => (props.mCols ? props.mCols : "1fr")};
  }
`
