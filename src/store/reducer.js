const initialState = {
    commodityData: [
        {id:1, commodityName: "原味飯糰", price: 30, commodityimg:"", commodityAmount: 30, amountValue: []},
        {id:2, commodityName: "火腿飯糰", price: 35, commodityimg:"", commodityAmount: 10, amountValue: []},
        {id:3, commodityName: "起司飯糰", price: 40, commodityimg:"", commodityAmount: 10, amountValue: []},
        {id:4, commodityName: "肉球飯糰", price: 55, commodityimg:"", commodityAmount: 10, amountValue: []},
        {id:5, commodityName: "總和飯糰", price: 60, commodityimg:"", commodityAmount: 10, amountValue: []},
        {id:6, commodityName: "蹦丸紅茶", price: 10, commodityimg:"", commodityAmount: 5, amountValue: []}
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
                alert("已經重複囉!")
            } else {
                for (let i = 1; i <= action.data.commodityAmount; i++) {
                    action.data.amountValue.push({value: i, label: i});
                }
                initialCarData.push(action.data);
                return {
                    commodityData: state.commodityData,
                    carData: initialCarData,
                    shopAmount: initialCarData.length
                };
            };
            break;
        case "CALCULATEAMOUNT":
            
            break;
        default:
            return state;
    };

}