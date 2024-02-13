import { useState } from "react";
import data from "./data";
import './styles.css'

// single selection
export default function Accordian(){

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);


    function handleSingleSelection(getCurrentId){
        getCurrentId === selected ? setSelected(null) : setSelected(getCurrentId);
    }

    function handleMultiSelection(getCurrentId){
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentID = cpyMultiple.indexOf(getCurrentId);

        findIndexOfCurrentID === -1 ? cpyMultiple.push(getCurrentId) : cpyMultiple.splice(findIndexOfCurrentID, 1);
        setMultiple(cpyMultiple);
        console.log(multiple);
    }

    function resetEnableMultiSelection(){
        setEnableMultiSelection(!enableMultiSelection);
        if (enableMultiSelection) 
           setMultiple([]);
        else 
        {
            multiple.push(selected);
            setSelected(null);
        }
    }

    return <div className="wrapper"> 
        <button onClick={() => resetEnableMultiSelection()}>{ enableMultiSelection ? "Enable single selection" : "Enable multi selection" }</button>
        <div className="accordian">
            {
                data && data.length > 0 ?  
                data.map(dataItem => 
                    <div className="item">
                        <div onClick={ enableMultiSelection ? 
                                () => handleMultiSelection(dataItem.id) :
                                () => handleSingleSelection(dataItem.id)} 
                                className="title"> 
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? 
                            <div className="content"> {dataItem.answer} </div>
                            : null
                        }
                    </div>)
                : <div> No data found! </div>
            }
        </div>
    </div>;
}
 
//multiple selection