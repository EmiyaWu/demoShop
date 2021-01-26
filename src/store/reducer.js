const initialState = {
    commodityData: [
        {id:1, commodityName: "原味飯糰", price: 30, singleItemTotalPrice:30, commodityimg:"", commodityAmount: 30, amountValue: [],selectValue: 1},
        {id:2, commodityName: "火腿飯糰", price: 35, singleItemTotalPrice:35, commodityimg:"", commodityAmount: 10, amountValue: [],selectValue: 1},
        {id:3, commodityName: "起司飯糰", price: 40, singleItemTotalPrice:40, commodityimg:"", commodityAmount: 10, amountValue: [],selectValue: 1},
        {id:4, commodityName: "肉球飯糰", price: 55, singleItemTotalPrice:55, commodityimg:"", commodityAmount: 10, amountValue: [],selectValue: 1},
        {id:5, commodityName: "總和飯糰", price: 60, singleItemTotalPrice:60, commodityimg:"", commodityAmount: 10, amountValue: [],selectValue: 1},
        {id:6, commodityName: "蹦丸紅茶", price: 10, singleItemTotalPrice:10, commodityimg:"", commodityAmount: 5, amountValue: [],selectValue: 1}
    ],
    carData: [],
    shopAmount: 0,
};

const initialCarData = [];

export default (state = initialState, action) => {

    switch(action.type) {
        case "GETDATA":
            const identicalProduct = initialCarData.indexOf(action.data);
            if (identicalProduct !== -1) {
                alert("該餐點已在購物車內囉!")
                return {
                    commodityData: state.commodityData,
                    carData: initialCarData,
                    shopAmount: initialCarData.length
                }
            } else {
                for (let i = 1; i <= action.data.commodityAmount; i++) {
                    action.data.amountValue.push({value: i, label: i});
                }
                initialCarData.push(action.data);
                const insertInitialCarData = [...initialCarData];
                return {
                    commodityData: state.commodityData,
                    carData: insertInitialCarData,
                    shopAmount: initialCarData.length
                };
            };
        case "PRICEAMOUNT":
            const findItem = initialCarData.find(x => x.id === action.id);
            findItem.singleItemTotalPrice = action.data*findItem.price;
            findItem.selectValue = action.data;
            const copyArray = [...initialCarData];
            return {
                commodityData: state.commodityData,
                carData: copyArray,
                shopAmount: initialCarData.length
            }
        case "DELETE":
            const findDeleteItem = initialCarData.find(x => x.id === action.id);
            const deleteItemIndex = initialCarData.indexOf(findDeleteItem);
            findDeleteItem.selectValue = 1;
            findDeleteItem.singleItemTotalPrice = findDeleteItem.price*1;
            findDeleteItem.amountValue.length = 0;
            initialCarData.splice(deleteItemIndex,1);
            const newInitialCarData = [...initialCarData];
            return {
                commodityData: state.commodityData,
                carData: newInitialCarData,
                shopAmount: newInitialCarData.length
            }
        default:
            return state;
    };

}