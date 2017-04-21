export var setName = (name) => {
    return {
         type: 'SET_NAME',
        payload: name
    }
}
export var setAge = (age) => {
    return {
        type: 'SET_AGE',
        payload: age
    }    
}

export var setNameAndAge = (nameAgeObject) => {
    return (dispatch, getState) => {
        setTimeout(()=>{
            dispatch({
                type : 'SET_NAME_AND_AGE',
                payload: nameAgeObject
            });
        },3000);
    }
}