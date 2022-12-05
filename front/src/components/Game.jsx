import { Container, createStyles, Text } from '@mantine/core';
import PendingScreen from './Status/PendingScreen'
import ModalScreen from './Status/ModalScreen';
import Score from './Score';
import { useGameContext } from '../providers/GameProvider';
import { useChangeScoreColor } from '../store/game';

const useStyles = createStyles((theme, _params, getRef) => ({
  coreGame: {
    display: "flex", flexDirection: "column", width: "100%", height: "100%"
  },
}));

export default function Game() {
    const { gameStatus, points } = useGameContext();
    const [color] = useChangeScoreColor(points);
    const { classes } = useStyles();

    return (
        <Container>
            <div className={classes.coreGame}>
                <Score points={points} color={color} />
                <div style={{ width: "100%", height: "100%"}}>
                    {gameStatus === "Pending" 
                    ? 
                        <PendingScreen />
                    :
                        <ModalScreen />
                    }
                </div>
            </div>
        </Container>
    )
}