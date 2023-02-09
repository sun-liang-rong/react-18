import {useContext, useRef } from 'react'
import { ContentContext } from '@/context/index'

const Home = () => {
    const { state, dispatch} = useContext(ContentContext)
    const handler = () => {
        dispatch({type: 'add', payload: 1})
    }
    return(
        <>
        <button onClick={() => handler()}>数字加一</button>
            home
            {state.age} - {state.name}
        </>
    )
}
export default Home;