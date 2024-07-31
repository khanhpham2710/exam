import React, { useState } from "react";
import { addChemical, editChemical, removeChemical } from "../../global/chemicalSlice"; 
import { useDispatch } from "react-redux";
import EditChemical from "../EditChemical/EditChemical";

function ChemicalItem(props){
    const dispatch = useDispatch()
    const { item, setAdd } = props

    const [edit,setEdit] = useState(false)

    const [name,setName] = useState("")
    const [formula,setFormula] = useState("")

    function handleSaveEdit(){
        setName("")
        setFormula("")
        setEdit(false)
    }

    function handleEdit(index){
        setEdit(true)
        setName(item.name)
        setFormula(item.formula)
        setAdd(true)
    }

    function handleRemove(id){
        dispatch(removeChemical(id))
        setAdd(false)
        setAdd(true)
    }

    return (
        <>
            <div className="chemical_item">
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.formula}</p>
            <div className="buttons">
                <button onClick={()=>handleEdit(item.id)}>Edit</button>
                <button onClick={()=>handleRemove(item.id)}>Remove</button>
            </div>
        </div>
        {edit&&<EditChemical id={item.id} name={item.name} formula={item.formula} handleSaveEdit={handleSaveEdit} setAdd={setAdd}/>}
        </>
    )
}

export default ChemicalItem