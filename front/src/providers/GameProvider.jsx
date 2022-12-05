import { useEffect } from "react";
import { useContext, createContext, useState } from "react";

const gameContext = createContext();

export function GameProvider({children}) {
    const [state, setState] = useState();
    const [points, setPoint] = useState(10);
    const [gameStatus, setGameStatus] = useState("Pending");

    function validate(selectedGender) {
        if (state?.gender === selectedGender) {
            setPoint(v => v + 1);
            if (points === 19) {
                setGameStatus("Win");
            }
        } else {
            setPoint(v => v - 1);
            if (points === 1) {
                setGameStatus("Lose");
            }
        }
    }

    function resetGameStatus() {
        setGameStatus("Pending");
        setPoint(10);
    }

    useEffect(() => {
        fetch(`http://localhost:3000/getRandomFirstName`)
            .then(res => res.json())
            .then((result) => setState(result));
    }, [points]);

    return (
        <>
            <gameContext.Provider value={{gameStatus, points, state, resetGameStatus, validate}}>{children}</gameContext.Provider>
        </>
    )
}

export function useGameContext() {
    const context = useContext(gameContext);
    if (!context) {
        throw new Error("noob") 
    }
    return context;
}