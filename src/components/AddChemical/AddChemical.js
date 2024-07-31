import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addChemical } from "../../global/chemicalSlice";
import EditChemical from "../EditChemical/EditChemical";

function AddChemical(prop){
    const { setAdd } = prop
    const dispatch = useDispatch()
    const [name,setName] = useState("")
    const [formula,setFormula] = useState("")

    function handleAdd(){
        dispatch(addChemical({
            name: name,
            formula: formula
        }))
        setName("")
        setFormula("")
        setAdd(false)
        setAdd(true)
        setAdd(false)
    }


    return (
            <div id="addform" className="add form">
            <h1>Chemical form</h1>
            <h4>Enter chemical name</h4>
            <input type="text" value={name} placeholder="" onChange={e=>setName(e.target.value)}/>
            <h4>Enter chemical formula</h4>
            <input type="text" value={formula} placeholder="" onChange={e=>setFormula(e.target.value)}/>
            <button onClick={handleAdd}>Add Chemical</button>
            </div>
    )
}

export default AddChemical