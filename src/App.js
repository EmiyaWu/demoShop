import React from "react";
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from "styled-components";

class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <HeadContainer>
            <a>Home</a>
            <div>ShopCard</div>
          </HeadContainer>

          <Row row>
            <TestCol col>1-1</TestCol>
          </Row>
        </Container>
      </div>
      
    )
  }
}

export default App;


const TestCol = styled(Col)`
  border: solid 1px black;
`

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`