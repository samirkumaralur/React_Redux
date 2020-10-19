const initialState={
    cards:[{id:"1", Name:"samir", age:32},{id:"2", Name:"mounica", age:27}, {id:"3", Name:"Rima", age: 4}]
}

const rootReducer=(state=initialState, action)=>{
    console.log(action);
    switch(action.type)
    {
        case "DELETE_CARD":
            let newcard= state.cards.filter(card=>{return card.id===action.payload});
            return {
                ...state,
                cards:newcard
            }
        default:
            return state;
    }
}

export default rootReducer;