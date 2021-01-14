import React from "react";
import styled from "styled-components";

class App extends React.Component {
  render() {
    return (
      <div>
        <HeadText>123</HeadText>
      </div>
    )
  }
}

export default App;

const HeadText = styled.span`
    color: #000;
`;