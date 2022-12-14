const initialState:team = {
    name: "",
    foundationYear: null,
    division: '',
    conference: '',
    imageUrl: '',
}
interface team {
    name: string,
    foundationYear: number | null,
    division: string,
    conference: string,
    imageUrl: string,
}

interface Action {
    type: string;
    payload: team
  }

function teamReducer(state:team  = initialState, action:Action): team {
    
    if (action.type === "team/set") {
        return {
            ...state, 
            ...action.payload
        }
    } 
    // else if (action.type === 'auth/logout') {
    //     return {
    //         ...state,
    //         ...action.payload
            
    //     }
    // }

    return state
}


export default teamReducer