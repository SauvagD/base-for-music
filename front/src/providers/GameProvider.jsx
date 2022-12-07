import { useEffect } from "react";
import { useContext, createContext, useState } from "react";

const gameContext = createContext();

export function GameProvider({children}) {
    const [nameInfo, setNameInfo] = useState();
    const [points, setPoint] = useState(10);
    const [gameStatus, setGameStatus] = useState("Pending");

    // Gestion de la couleur du score
    const [oldPoints, setOldPoints] = useState(points);
    const [scoreColor, setScoreColor] = useState("black");

    // Change la couleur du score en fonctiond de la réponse
    function updateColor(color) {
        setScoreColor(color);
        setTimeout(() => {
            setScoreColor("black")
        }, [500])
    }

    // Change le score
    function validate(selectedGender) {
        console.log(selectedGender, nameInfo)
        if (nameInfo?.gender === selectedGender) {
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

    // Remet à 10 le score
    function resetGameStatus() {
        setGameStatus("Pending");
        setPoint(10);
    }

    /* 
        A chaque fois que l'utilisateur donne une réponse bonne ou mauvaise, on va chercher un nouveau prénom 
    */
    useEffect(() => {
        fetch(`http://localhost:3000/getRandomFirstName`)
            .then(res => res.json())
            .then((result) => setNameInfo(result));
    }, [points]);

    useEffect(() => {
        // Perd un point
        if (oldPoints < points) {
            updateColor("green")
        } else {
            updateColor("red")
        }
        setOldPoints(points);
    }, [points]);

    return (
        <>
            <gameContext.Provider value={{gameStatus, points, nameInfo, scoreColor,  resetGameStatus, validate}}>{children}</gameContext.Provider>
        </>
    )
}

// Permet de récupérer les valeurs du jeu depuis n'importe quel composant enfant à gameProvider
export function useGameContext() {
    const context = useContext(gameContext);
    if (!context) {
        throw new Error("noob") 
    }
    return context;
}