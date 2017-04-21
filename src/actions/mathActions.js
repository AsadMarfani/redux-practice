export var addNumber = (number) => {
    return {
        type: 'ADD',
        number
    }
}

export var subNumber = (number) => {
    return {
        type: 'SUBTRACT',
        number
    }
}