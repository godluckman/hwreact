

const medicine = (state = [], action) => {
    switch (action.type){
        case "CHANGE_DD" :
            console.log('change works');
            console.log(state);
            return state
        default: return state;
    }

}


export default medicine