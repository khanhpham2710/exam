import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  chemicals: [
    {
      id: 1,
      name: "Hydrochloric Acid",
      formula: "HCl"
    },
    {
      id: 2,
      name: "Sodium Chloride",
      formula: "NaCl"
    },
    {
      id: 3,
      name: "Sulfuric Acid",
      formula: "H2SO4"
    },
    {
      id: 4,
      name: "Ammonia",
      formula: "NH3"
    },
    {
      id: 5,
      name: "Ethanol",
      formula: "C2H5OH"
    }
  ]
}

const chemicalSlice = createSlice({
  name: 'chemical',
  initialState,
  reducers: {
    addChemical(state,action){
      const { name , formula } = action.payload;
      const id = state.chemicals.length
      state.chemicals.push({
        id: id,
        name: name,
        formula: formula
      })
    },
    editChemical(state,action){
      const { id, name, formula } = action.payload;
      const index = state.chemicals.findIndex(item => item.id == id)
      state.chemicals[index].name = name;
      state.chemicals[index].formula = formula;
    },
    removeChemical(state,action){
      state.chemicals = state.chemicals.filter((item,index)=>{
        return item.id !== action.payload
      })
    }
  }
})

export const { addChemical, editChemical, removeChemical } = chemicalSlice.actions 
export default chemicalSlice.reducer
