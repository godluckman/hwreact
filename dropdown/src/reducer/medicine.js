

const medicine = (state = [], action) => {
    switch (action.type){
        case "CHANGE_DD" :
            console.log(state)
            return state;
        case "CHANGE_F" :
            return {...state, medic: state[0].formulations.filter(cus => cus.name === action.payload)};

        default: return state;
    }
}


export default medicine