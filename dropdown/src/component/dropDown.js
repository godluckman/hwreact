import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeDropDown, changeForm} from "../action/indexAct";

const DropDown = () => {
    const dispatch = useDispatch()
    const med = useSelector(state => state.medicine[0].variants)
    const form = useSelector(state => state.medicine[0].formulations.filter(cus => cus.name === "Levothyroxine"))
    console.log(form)

    const selectHandler = (event) => {
        const value = event.target.value
        console.log(value)
        dispatch(changeForm(value))
        // dispatch(changeDropDown(value))
    }

    return (
        <div>
            <label htmlFor="Manufacturers">Manufacturer:</label>

            <select name="Manufacturer" id="Manufacturer" onChange={selectHandler}>
                <option key="Levothyroxine" value="Levothyroxine">Levothyroxine</option>
                {med.map(manufacturer => (
                <option key={manufacturer.id} value={manufacturer.name}>{manufacturer.name}</option>
                    ))}
            </select>
            <label htmlFor="Form">Form:</label>
            <select name="Form" id="Form" onChange={selectHandler}>
                {form.map(item => (
                    <option key={item.id} value={item.form}>{item.form}</option>
                ))}
            </select>

        </div>
    );
};

export default DropDown;