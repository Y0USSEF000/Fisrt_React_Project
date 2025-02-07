const initialState = {
    id:0,
    Animal_type : '',
    Animal_Age : '',
    Animal_Status:'',
    Animal_Sex:'',
    User_Name:'',
    Array_Animal : [
        {id : 1 , Animal_type : 'cat' , Animal_Age : 'baby animal' , Animal_Status :'good' , Animal_Sex:'Male' , User_Name:'Youssef'},
        
    ]
}
const Reducer = (state = initialState , action) => {
    switch(action.type){
        case 'Add_Animal' : 
            return{...state , Array_Animal:[...state.Array_Animal , action.payload]};
        case 'Update_Animal' :
            const animal = state.Array_Animal.find((u)=>u.id===parseInt(action.payload.id))
            if(animal){
                animal.Animal_type = action.payload.Animal_type
                animal.Animal_Age = action.payload.Animal_Age
                animal.Animal_Status = action.payload.Animal_Status
                animal.Animal_Sex = action.payload.Animal_Sex
                animal.User_Name = action.payload.User_Name
            }
            return state
        case 'Delete_Animal' :
            return{...state , Array_Animal:[...state.Array_Animal.filter((u)=>u.id!==parseInt(action.payload))]};
        default :
            return state
        }
}
export default Reducer