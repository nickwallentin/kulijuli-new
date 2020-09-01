import styled from "styled-components"

export const Wrap = styled.div`
  max-width: 980px;
  width: ${props => (props.mobileEdge ? "100%" : "90%")};
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

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p:last-of-type {
      margin-bottom: 0px;
    }
  }

  @media (max-width: 979px) {
    grid-template-columns: ${props => (props.mCols ? props.mCols : "1fr")};
  }
`
export const Message = styled.div`
  padding: 15px;
  color: white;
  background: blue;
  border-radius: 4px;
  text-align: center;

  &.warning {
    background: orange;
  }

  &.danger {
    background: red;
  }
`
