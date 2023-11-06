import { initialState } from "./Store";

export const Context = React.Context()

const ContextProvider = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider