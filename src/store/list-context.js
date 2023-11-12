import { createContext, useReducer } from "react";

const ListContext = createContext({
    foods: [],
    totalAmount: 0,
    addFood: food => { },
    removeFood: id => { },
});

const reducer = (state, action) => {
    return { foods: [], totalAmount: 0 }
};

const ListContextProvider = ({ children }) => {
    const [orderedFoods, dispatchOrderedFoods] = useReducer(reducer, { foods: [], totalAmount: 0 });

    const addFoodHandler = food => {
        dispatchOrderedFoods({ type: 'ADD', newFood: food })
    };
    const removeFoodHandler = id => {
        dispatchOrderedFoods({ type: 'REMOVE', id: id })
    };

    const contextValue = {
        foods: orderedFoods.foods,
        totalAmount: orderedFoods.totalAmount,
        addFood: addFoodHandler,
        removeFood: removeFoodHandler,
    };

    return (
        <ListContext.Provider value={contextValue}>
            {children}
        </ListContext.Provider>
    );
};

export default ListContext;
export { ListContextProvider };