

const initialState:player = {
    avatarUrl: "",
    birthday: new Date(),
    height: null,
    id: null,
    name: '',
    number: null,
    position: "",
    team: null,
    teamName: "",
    weight: null
}
interface player {
    avatarUrl: string,
    birthday: any,
    height: number | null,
    id: number | null,
    name: string,
    number: number | null,
    position: string,
    team: number | null,
    teamName:string,
    weight: number | null
}

interface Action {
    type: string;
    payload: player
  }

function playerReducer(state:player = initialState, action:Action): player {
    
    if (action.type === "player/set") {
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


export default playerReducer