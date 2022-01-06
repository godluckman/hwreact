import React from 'react';
import {useDispatch} from "react-redux";
import {changeDropDown} from "../action/indexAct";

const DropDown = () => {
    const dispatch = useDispatch()

    const selectHandler = (event) => {
        const value = event.target.value
        console.log(value)
        dispatch(changeDropDown(value))
        const nameA = value[0].name
        console.log(nameA)
        return(
            <div>{nameA}</div>
        )
    }

    return (
        <div>
            <label htmlFor="cars">Choose a car:</label>

            <select name="cars" id="cars" onChange={selectHandler}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    );
};

export default DropDown;