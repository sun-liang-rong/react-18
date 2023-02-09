import { useReducer, createContext } from 'react'
interface IState {
    age?: number;
    name?: string;
}
const reducer = (state: IState, action: any) => {
    console.log(state, 'state')
    const { type, payload } = action
    switch( type ){
        case 'add':
            return {
                ...state, age: state.age + payload
            }
        default: 
            return state
    }
}
export type ChildrenElement = {
    children: JSX.Element | JSX.Element []
}
export const ContentContext = createContext<any>({} as any)

export const ContextProvide = ({children}: ChildrenElement) => {
    const [state, dispatch] = useReducer(reducer, {age: 18,name: 'slr'})
    return(
        <ContentContext.Provider value={{state, dispatch}} >
            {children}
        </ContentContext.Provider>
    )
}
