import { ADD_TASK ,DONE_TASK} from "../connst/ActionTypes"

const initialState= {
    todos:[],
};

  const todoooo = (state=initialState,action) => {
        switch (action.type) {
            case ADD_TASK:
                return { ...state,todos :[...state.todos,action.payload]} ;

                case DONE_TASK:
                    return { ...state,todos :state.todos.map(el=>el.id===action.payload?{...el,isDone:!el.isDone}:el)} ;
            
        
            default:
                return state
        };
    
}
export default todoooo

