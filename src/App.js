import React from "react";
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { Navbar,Nav,Jumbotron,Card,Button } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleAmountCalculate = (commodityInformation) => {
    this.props.dispatch({type: "GETDATA", data: commodityInformation})
  }

  render() {
    const { shopAmount,  commodityData} = this.props;
    
    return (
      <div>
        <HeadContainer>
          <Container>
            <Navbar bg="dark" variant="dark">
              {/* <Navbar.Brand href="/">崩丸家族</Navbar.Brand> */}
              <NavHome to="/">崩丸家族</NavHome>
              <Nav className="mr-auto">
                {/* <Nav.Link href="/ShopCar">ShopCard[{shopAmount}]</Nav.Link> */}
                <NavLink to="/ShopCar">ShopCard[{shopAmount}]</NavLink>
              </Nav>
            </Navbar>
          </Container>
        </HeadContainer>
        
        <Container>
          <CustomizeRow>
            <IntroductionCol col>
              {/* <IntroductionContainer>
                <IntroductionSubject>Hi, Welcome 崩丸家族</IntroductionSubject>
                <IntroductionSubtitle>目前崩丸正在優惠中，買飯糰送飯糰!</IntroductionSubtitle>
              </IntroductionContainer> */}

              <Jumbotron fluid>
                <Container>
                  <h1>崩丸家族</h1>
                  <p>
                  目前崩丸正在優惠中，買飯糰送飯糰!
                  </p>
                </Container>
              </Jumbotron>
            </IntroductionCol>
          </CustomizeRow>
          <Row>
            {commodityData.map((data) =>  
              <Col col={12} sm={6} md={4} lg={3} key={data.id}>
                {/* <CommodityContainer>
                  <CommodityName>{data.commodityName}</CommodityName>
                  <Price>$ {data.price}</Price>
                  <button onClick={()=>this.handleAmountCalculate(data)}>加入購物車!</button>
                </CommodityContainer> */}

                <CustomizeCard>
                  <Card.Img variant="top" src="https://placehold.it/286x180" />
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
        </Container>
      </div>
      
    )
  }
}

const mapStateToProps = state => ({
  commodityData: state.commodityData,
  carData: state.carData,
  shopAmount: state.shopAmount,
})

export default connect(mapStateToProps)(App);

const Price = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
`;

const CommodityName = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const CommodityContainer = styled.div`
  border: solid 1px black;
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 10px;
`;

const IntroductionSubtitle = styled.div`
  margin: 5px 0 0 0;
  font-size: 12px;
`;

const IntroductionSubject = styled.div`
  margin: 0 0 5px 0;
  font-size: 20px;
  font-weight: bold;
`;

const IntroductionContainer = styled.div`
  border: solid 1px gray;
  border-radius: 10px;
  padding: 10px 5px;
`;
const CustomizeCard = styled(Card)`
  margin-bottom: 30px;
`;

const IntroductionCol = styled(Col)``;

const CustomizeRow = styled(Row)`
  margin-bottom: 15px;
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

const HeadContainer = styled.div`
  background-color: #343a40;
`