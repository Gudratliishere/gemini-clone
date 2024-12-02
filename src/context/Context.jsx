import { createContext, useState } from "react";
import runChat from '../config/gemini'

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [previousPrompts, setPreviousPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const onSent = async (prompt) => {
        runChat(prompt)
    }

    onSent("what is react js?")

    const contextValue = {

    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider