import  {INCREMENT}  from "./actions"


export interface IAppState{
    counter:number;
}

export function RootReducer(state:IAppState, action) : IAppState{
    
    switch (action.type){
        case INCREMENT: 
            return {counter: state.counter + 1}
    }
    
    return state;
}
