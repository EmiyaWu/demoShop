import React from "react";
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
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
        <Container>
          <HeadContainer>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/ShopCar">ShopCard[{shopAmount}]</Link>
            </div>
          </HeadContainer>

          <CustomizeRow>
            <IntroductionCol col>
              <IntroductionContainer>
                <IntroductionSubject>Hi, Welcome 崩丸家族</IntroductionSubject>
                <IntroductionSubtitle>目前崩丸正在優惠中，買飯糰送飯糰!</IntroductionSubtitle>
              </IntroductionContainer>
            </IntroductionCol>
          </CustomizeRow>

          <Row>
            {commodityData.map((data) =>  
              <Col col={3} key={data.id}>
                <CommodityContainer>
                  <CommodityName>{data.commodityName}</CommodityName>
                  <Price>$ {data.price}</Price>
                  <button onClick={()=>this.handleAmountCalculate(data)}>加入購物車!</button>
                </CommodityContainer>
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

const IntroductionCol = styled(Col)``;

const CustomizeRow = styled(Row)`
  margin-bottom: 15px;
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`