var mathReducer = (state = {
  result: 1,
  lastValues: []
}, action)=>{
  switch(action.type){
    case 'ADD':
    return  Object.assign({},state,{
      result: state.result + action.payload,
      lastValues: [...state.lastValues, action.payload]
    });
      break;
    case 'SUBTRACT':
      return Object.assign({},state,{
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      });
      break;
    default:
      return state; 
  }
  
};

export default mathReducer