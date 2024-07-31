import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editChemical } from "../../global/chemicalSlice";

function EditChemical(prop){
    const { id, name, formula, handleSaveEdit , setAdd} = prop
    const dispatch = useDispatch()

    const [nameEdit,setNameEdit] = useState(name)
    const [formulaEdit,setFormulaEdit] = useState(formula)

    function handleSave(){
        dispatch(editChemical({
            id: id,
            name: nameEdit,
            formula: formulaEdit
        }))
        handleSaveEdit()
        setNameEdit("")
        setFormulaEdit("")
        setAdd(true)
        setAdd(false)
    }


    return(
        <div id="editform" className="edit form">
            <input value={nameEdit} onChange={e=>setNameEdit(e.target.value)}/>
            <input value={formulaEdit} onChange={e=>setFormulaEdit(e.target.value)}/> 
            <button onClick={handleSave}>Edit Chemical</button>
        </div>
    )
}

export default EditChemical