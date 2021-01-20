import React from "react";
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const commodityData = [
  {id:1, commodityName: "原味飯糰", price: 30, commodityimg:""},
  {id:2, commodityName: "火腿飯糰", price: 35, commodityimg:""},
  {id:3, commodityName: "起司飯糰", price: 40, commodityimg:""},
  {id:4, commodityName: "肉球飯糰", price: 55, commodityimg:""},
  {id:5, commodityName: "總和飯糰", price: 60, commodityimg:""}
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {amount: 0};
  }
  handleAmountCalculate = (commodityName) => {
    const { amount } = this.state;
    console.log("commodityName", commodityName);
    this.setState({amount: amount + 1});
  }

  render() {
    const { amount } = this.state;
    
    return (
      <div>
        <Container>
          <HeadContainer>
            <a>
              <Link to="/">Home</Link>
            </a>
            <div>
              <Link to="/ShopCar">ShopCard[{amount}]</Link>
            </div>
          </HeadContainer>

          <CustomizeRow>
            <IntroductionCol col>
              <IntroductionContainer>
                <IntroductionSubject>Hi, Welcome 我的商城</IntroductionSubject>
                <IntroductionSubtitle>目前商城正在特價中，所有商品一律八折!</IntroductionSubtitle>
              </IntroductionContainer>
            </IntroductionCol>
          </CustomizeRow>

          <Row>
            {commodityData.map((data) =>  
              <Col col={3} key={data.id}>
                <Test>
                  <CommodityName>{data.commodityName}</CommodityName>
                  <Price>$ {data.price}</Price>
                  <button onClick={()=>this.handleAmountCalculate(data)}>加入購物車!</button>
                </Test>
            </Col>
            )}
          </Row>
        </Container>
      </div>
      
    )
  }
}

export default App;

const Price = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
`;

const CommodityName = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Test = styled.div`
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

const IntroductionCol = styled(Col)``;

const CustomizeRow = styled(Row)`
  margin-bottom: 15px;
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`