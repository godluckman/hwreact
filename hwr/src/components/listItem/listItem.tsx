import React, {useState} from 'react';
import "./listItem.css"

type ListProps = {
    ingredientName: string,
    onCheck: (ingredientName: string, checked: boolean | number) => void,
    type?: string
}

const ListItem = ({ingredientName, onCheck, type}: ListProps ) => {

    const [checked, setChecked] = useState(false);
    const [count, setCount] = useState(0);

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked);
        onCheck(ingredientName, e.currentTarget.checked)
    }

    const handleClick = (e: React.MouseEvent) => {
        if (e.currentTarget.innerHTML === '+') {
            if (count < 10) {
                setCount(prevCount => prevCount + 1)
                onCheck(ingredientName, count + 1)
            }
        }
        else if (e.currentTarget.innerHTML === '-') {
            if (count > 0){
                setCount(prevCount => prevCount - 1)
                onCheck(ingredientName, count - 1)
            }
        }
    }

    return (
        type === 'checkbox' ?
        <ul>
            <li className="listel card-panel" key={ingredientName}>
                <label>
                    <input type="checkbox" checked={checked} onChange={onChange}/>
                    <span>{ingredientName}</span>
                </label>
            </li>
        </ul>
        :
         <ul>
             <li className="listel card-panel" key={ingredientName}>
                 <label>
                     <a className="waves-effect waves-light btn-small" onClick={handleClick}>-</a>
                     <span className="counter cc">{count}</span>
                     <a className="waves-effect waves-light btn-small" onClick={handleClick}>+</a>
                     <span className="cc">{ingredientName}</span>
                 </label>
             </li>
         </ul>
    );
};

export default ListItem;