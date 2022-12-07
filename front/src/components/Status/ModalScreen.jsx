import { Text, Modal, Button } from '@mantine/core';
import { useGameContext } from '../../providers/GameProvider';
import { useState } from 'react';

export default function ModalScreen() {
    const { gameStatus, resetGameStatus } = useGameContext();
    const [modalState, setModalState] = useState({ bgColor: gameStatus === "Win" ? "green" : "red", opened: gameStatus !== "Pending" });

    return (
        <Modal
            centered
            size={"600"}
            opened={modalState.opened}
            onClose={resetGameStatus}
        >
            <div style={{ display: "flex", flexDirection: "column", width: "100%"}}>
                <Text sx={{ fontSize: 100, color: modalState.bgColor, margin: "auto" }}> You {gameStatus} </Text>
                <Button style={{ margin: "auto" }} onClick={() => {setModalState({opened: false}); resetGameStatus()}}>Play Again</Button>
            </div>
        </Modal>
    )
}