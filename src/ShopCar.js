import React from "react";
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from "styled-components";
import { Link } from 'react-router-dom';




class ShopCar extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    
    return (
      <div>
        <Container>
          <HeadContainer>
            <a>
              <Link to="/">Home</Link>
            </a>
          </HeadContainer>
          </Container>
      </div>
      
    )
  }
}

export default ShopCar;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`