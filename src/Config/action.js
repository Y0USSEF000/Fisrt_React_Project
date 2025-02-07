export const AddAnimal =(animal)=> {
    return{type : 'Add_Animal' , payload:animal }
}
export const UpdateAnimal = (newanimal) => {
    return{type : 'Update_Animal'  , payload:newanimal}
}
export const DeleteAnimal = (id) => {
    return{type : 'Delete_Animal'  , payload:id}
} 