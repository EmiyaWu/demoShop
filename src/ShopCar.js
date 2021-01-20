import React from "react";
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class ShopCar extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const { carData } = this.props;
    console.log("carData", carData)
    return (
      <div>
        <Container>
          <HeadContainer>
            <div>
              <Link to="/">Home</Link>
            </div>
          </HeadContainer>
          </Container>
      </div>
      
    )
  }
}

const mapStateToProps = state => ({
  carData: state.carData
})
export default connect(mapStateToProps)(ShopCar);

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`