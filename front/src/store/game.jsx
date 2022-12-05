import { useEffect } from 'react';
import { useState } from 'react';

export const useChangeScoreColor = (points) => {
    const [oldPoints, setOldPoints] = useState(points);
    const [color, setColor] = useState("black");

    function updateColor(color) {
        setColor(color);
        setTimeout(() => {
            setColor("black")
        }, [500])
    }

    useEffect(() => {
        // Perd un point
        if (oldPoints < points) {
            updateColor("green")
        } else {
            updateColor("red")
        }
        setOldPoints(points);
    }, [points]);

    return [color];
}