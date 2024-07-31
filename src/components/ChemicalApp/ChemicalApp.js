import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addChemical, editChemical, removeChemical } from "../../global/chemicalSlice";
import AddChemical from "../AddChemical/AddChemical"
import ChemicalItem from "../ChemicalItem/ChemicalItem";
import SearchBar from "../SearchBar/SearchBar";

function ChemicalApp() {
    const chemicals = useSelector(state => state.chemical.chemicals)
    console.log(chemicals)
    // const dispatch = useDispatch()

    const [ref,setRef] = useState("")
    const [filterList,setfilterList] = useState(chemicals)

    const [refresh,setRefresh] = useState(false)

    const [add,setAdd] = useState(false)


    useEffect(()=>{
        setfilterList(chemicals)
    },[chemicals])
    
    useEffect(()=>{
        if(ref){
            setfilterList(chemicals.filter((item,id)=>{
                return item.name === ref
            }))
        }
    },[ref])

    return (
        <div className="chemicalapp">
            <div>
                {!add && <SearchBar setRef={setRef} setAdd={setRefresh}/>}
            </div>
            <div id="chemical_items">
                {!add && filterList&&filterList.map((item, index) => {
                    return <ChemicalItem key={index} item={item} setAdd={setRefresh}/>
                })}
            </div>
                {add?<AddChemical setAdd={setAdd}/>:<button onClick={()=>setAdd(true)}>Add Chemical</button>}
        </div>
    )
}
export default ChemicalApp