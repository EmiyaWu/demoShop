import React from "react";
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class ShopCar extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      carData: this.props.carData,
    }
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange=(id,event)=> {
    const { carData } = this.props;
    // this.props.dispatch({type: "PRICEAMOUNT", data: event.target.value, id: id})
    this.setState({carData: carData})
  }

  handleDelete=(id)=>{
    console.log('id',id);
  }

  render() {
    const { carData } = this.state;
    console.log('carData',carData);
    return (
      <div>
        <Container>
          <HeadContainer>
            <div>
              <Link to="/">Home</Link>
            </div>
          </HeadContainer>

          <CustomizeRow>
            <IntroductionCol col>
              <IntroductionContainer>
                <IntroductionSubject>崩丸廚房出菜</IntroductionSubject>
                <IntroductionSubtitle></IntroductionSubtitle>
              </IntroductionContainer>
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
                    <CommodityContent col onClick={()=>this.handleDelete(data.id)}>取消</CommodityContent>
                  </CommodityContainer>
                )}
                <Row>
                  <Col>
                  <ListLine />
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

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`