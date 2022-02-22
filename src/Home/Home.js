import React from "react";
import { Container, Row, Col, media } from 'styled-bootstrap-grid';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { Navbar,Nav,Jumbotron,Card,Button } from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleAmountCalculate = (commodityInformation) => {
    this.props.dispatch({type: "GETDATA", data: commodityInformation})
  }

  render() {
    const { shopAmount,  commodityData} = this.props;
    
    return (
      <HomeContainer>
        <HeadContainer>
          <Container>
            <Row>
              <Col col>
                <CustomizeNavbar bg="dark" variant="dark">
                  <NavHome to="/">崩丸家族</NavHome>
                  <Nav>
                    <NavLink to="/ShopCar">購物車[{shopAmount}]</NavLink>
                  </Nav>
                </CustomizeNavbar>
              </Col>
            </Row>
          </Container>
        </HeadContainer>

        <Jumbotron fluid>
          <Container>
            <Row>
              <Col col>
                <h1>崩丸家族</h1>
                <p>目前崩丸正在優惠中，買飯糰送飯糰!</p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        
        <CustomizeContainer>
          <Row>
            {commodityData.map((data) =>  
              <Col col={12} sm={6} md={4} lg={3} key={data.id}>
                <CustomizeCard>
                  <Card.Img variant="top" src={data.commodityimg} />
                  <Card.Body>
                    <Card.Title>{data.commodityName}</Card.Title>
                    <Card.Text>
                      $ {data.price}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>this.handleAmountCalculate(data)}>加入購物車</Button>
                  </Card.Body>
                </CustomizeCard>
            </Col>
            )}
          </Row>
        </CustomizeContainer>
        <WebFooter>
          <FooterText>2021-EmiyaWu製作</FooterText>
        </WebFooter>
      </HomeContainer>
      
    )
  }
}

const mapStateToProps = state => ({
  commodityData: state.commodityData,
  carData: state.carData,
  shopAmount: state.shopAmount,
})

export default connect(mapStateToProps)(Home);

const FooterText = styled.div`
  text-align: center;
`;

const WebFooter = styled.div`
  background-color: gray;
  width: 100%;
`;

const CustomizeCard = styled(Card)`
  margin-bottom: 30px;
`;

const CustomizeContainer = styled(Container)`
  flex:1;
`;


const NavLink = styled(Link)`
  color: rgba(255,255,255,.5);
  padding: 0, .5rem;
  
  :hover {
    color: rgba(255,255,255,.75);
    text-decoration: none;
  }
`;

const NavHome = styled(Link)`
  color: #fff;
  font-size: 1.25rem;
  white-space: nowrap;
  line-height:inherit;
  margin-right: 20px;
  :hover {
    text-decoration: none;
    color: #fff;
  }
`;

const CustomizeNavbar = styled(Navbar)`
  padding: 5px 0;
  justify-content: space-between;
`;

const HeadContainer = styled.div`
  background-color: #343a40;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;