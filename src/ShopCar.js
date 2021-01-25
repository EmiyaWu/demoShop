import React from "react";
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { Navbar,Nav,Jumbotron,Card,Button,select } from 'react-bootstrap';

class ShopCar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange=(id,event)=> {
    this.props.dispatch({type: "PRICEAMOUNT", data: event.target.value, id: id});
  }

  handleDelete=(id)=>{
    this.props.dispatch({type: "DELETE", id: id});
  }

  render() {
    const { carData } = this.props;
    console.log('carData',carData);
    let sum = 0;
    carData.forEach((amountMoney)=>{
      console.log('amountMoney',amountMoney.singleItemTotalPrice);
      sum+=amountMoney.singleItemTotalPrice;
      return sum;
    })
    return (
      <div>
        <HeadContainer>
          <Container>
            <Navbar bg="dark" variant="dark">
              {/* <Navbar.Brand href="/">崩丸家族</Navbar.Brand> */}
              <NavHome to="/">崩丸家族</NavHome>
              {/* <Nav className="mr-auto">
                <Nav.Link href="/ShopCar">ShopCard[{shopAmount}]</Nav.Link>
                <NavLink to="/ShopCar">ShopCard[{shopAmount}]</NavLink>
              </Nav> */}
            </Navbar>
          </Container>
        </HeadContainer>

        <Container>
          {/* <HeadContainer>
            <div>
              <Link to="/">Home</Link>
            </div>
          </HeadContainer> */}

          <CustomizeRow>
            <IntroductionCol col>
              {/* <IntroductionContainer>
                <IntroductionSubject>崩丸廚房出菜</IntroductionSubject>
                <IntroductionSubtitle></IntroductionSubtitle>
              </IntroductionContainer> */}
              <Jumbotron fluid>
                <Container>
                  <h1>崩丸結帳</h1>
                  <p>
                  目前崩丸正在優惠中，買飯糰送飯糰!
                  </p>
                </Container>
              </Jumbotron>
            </IntroductionCol>
          </CustomizeRow>

          <Row>
            <Col col>
              <BuyCommodityContainer>
                <Row>
                  <ListInformation col>商品名稱</ListInformation>
                  <ListInformation col>商品數量</ListInformation>
                  <ListInformation col>單價</ListInformation>
                  <ListInformation col>小計</ListInformation>
                  <ListInformation col>其他</ListInformation>
                </Row>
                <Row>
                  <Col>
                  <ListLine />
                  </Col>
                </Row>
                {carData.map((data) => 
                  <CommodityContainer key={data.id}>
                    <CommodityContent col>{data.commodityName}</CommodityContent>
                    <CommodityContent col>
                      <select value={data.amountValue.value} onChange={(e)=>this.handleChange(data.id,e)}>
                        {data.amountValue.map((amountData) =>
                            <option  key={amountData.value}  value={amountData.label}>{amountData.value}</option>
                        )}
                      </select>
                    </CommodityContent>
                    <CommodityContent col>{data.price}</CommodityContent>
                    <CommodityContent col>{data.singleItemTotalPrice}</CommodityContent>
                    <CommodityContent col>
                      <Button onClick={()=>this.handleDelete(data.id)} variant="outline-danger">取消</Button>{' '}
                    </CommodityContent>
                    
                  </CommodityContainer>
                )}
                <Row>
                  <Col>
                  <ListLine />
                  </Col>
                </Row>
                <Row>
                  <Col col>
                    <div>總計:{sum}</div>
                    <button>送出</button>
                  </Col>
                </Row>
              </BuyCommodityContainer>
            </Col>
          </Row>
          </Container>
      </div>
      
    )
  }
}

const mapStateToProps = state => ({
  carData: state.carData
})
export default connect(mapStateToProps)(ShopCar);

const CommodityContent = styled(Col)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CommodityContainer = styled(Row)`
  /* margin-bottom: 5px; */
`;

const ListLine = styled.div`
  border-bottom: solid 1px gray;
  margin: 5px 0;
`;

const ListInformation = styled(Col)`
  text-align: center;
    
`;

const BuyCommodityContainer = styled.div`
  border: solid 1px gray;
  border-radius: 10px;
  padding: 10px 5px;
  
`

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

const IntroductionCol = styled(Col)``;

const CustomizeRow = styled(Row)`
  margin-bottom: 15px;
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