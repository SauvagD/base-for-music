import { Container, createStyles, Text } from '@mantine/core';
import PendingScreen from './Status/PendingScreen'
import ModalScreen from './Status/ModalScreen';
import Score from './Score';
import { useGameContext } from '../providers/GameProvider';

const useStyles = createStyles((theme, _params, getRef) => ({
  coreGame: {
    display: "flex", flexDirection: "column", width: "100%", height: "100%"
  },
}));

export default function Game() {
    const { gameStatus, points, scoreColor } = useGameContext();
    const { classes } = useStyles();

    return (
        <Container>
            <div className={classes.coreGame}>
                <Score points={points} color={scoreColor} />
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