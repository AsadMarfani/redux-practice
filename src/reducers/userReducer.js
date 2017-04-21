var userReducer = (state =  {
  name: 'Asad',
  age: 20
}, action)=>{
  switch(action.type){
    case 'SET_NAME':
    return  Object.assign({},state,{
      name: action.payload  
     });
      break;
    case 'SET_AGE':
      return Object.assign({},state,{
        age: action.payload
      });
      break;
    case 'SET_NAME_AND_AGE':
      return Object.assign({},state, {
        name: action.payload.name,
        age: action.payload.age
      });
    default:
      return state; 
  }
  
};
export default userReducer