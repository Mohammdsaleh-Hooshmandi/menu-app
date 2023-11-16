import { createContext, useReducer } from "react";

const ListContext = createContext({
    foods: [],
    totalPrice: 0,
    addFood: food => { },
    removeFood: id => { },
    changeAmount: (id, amount) => { },
});

const reducer = (state, action) => {
    if (action.type === 'REMOVE') {
        const newFoods = state.foods.filter(food => food.id !== action.id);
        const newTotalPrice = newFoods.map(food => food.price * food.amount).reduce((curr, acc) => curr + acc, 0);

        return { foods: newFoods, totalPrice: newTotalPrice };
    }

    if (action.type === 'ADD') {
        const isExistFood = state.foods.find(food => food.id === action.newFood.id);

        if (isExistFood) {
            const newAmount = isExistFood.amount + action.newFood.amount;
            const updateExsitFood = { ...isExistFood, amount: newAmount };
            const newFoods = [
                ...state.foods.filter(food => food.id !== isExistFood.id),
                updateExsitFood
            ];
            const newTotalPrice = newFoods.map(food => food.price * food.amount).reduce((curr, acc) => curr + acc)

            return { foods: newFoods, totalPrice: newTotalPrice };
        }

        const newFoods = [...state.foods, action.newFood];
        const newTotalPrice = newFoods.map(food => food.price * food.amount).reduce((curr, acc) => curr + acc)

        return { foods: newFoods, totalPrice: newTotalPrice };
    }

    if (action.type === 'CHANGE_AMOUNT') {
        const foodIndex = state.foods.findIndex(food => food.id === action.id);
        state.foods[foodIndex].amount = action.changedAmount;

        const newFoods = [...state.foods];
        const newTotalPrice = newFoods.map(food => food.price * food.amount).reduce((curr, acc) => curr + acc);
        return { foods: newFoods, totalPrice: newTotalPrice };
    }
    return { foods: [], totalPrice: 0 };
};

const ListContextProvider = ({ children }) => {
    const [orderedFoods, dispatchOrderedFoods] = useReducer(reducer, { foods: [], totalPrice: 0 });

    const addFoodHandler = food => {
        dispatchOrderedFoods({ type: 'ADD', newFood: food });
    };
    const removeFoodHandler = id => {
        dispatchOrderedFoods({ type: 'REMOVE', id: id });
    };
    const changeFoodAmountHandler = (id, amount) => {
        dispatchOrderedFoods({ type: 'CHANGE_AMOUNT', id: id, changedAmount: amount });
    };

    const contextValue = {
        foods: orderedFoods.foods,
        totalPrice: orderedFoods.totalPrice,
        addFood: addFoodHandler,
        removeFood: removeFoodHandler,
        changeAmount: changeFoodAmountHandler,
    };

    return (
        <ListContext.Provider value={contextValue}>
            {children}
        </ListContext.Provider>
    );
};

export default ListContext;
export { ListContextProvider };