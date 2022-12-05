import { Text, Modal, Button } from '@mantine/core';
import { useGameContext } from '../../providers/GameProvider';
import { useState } from 'react';

export default function ModalScreen() {
    const { gameStatus, resetGameStatus } = useGameContext();
    const [modalState, setModalState] = useState({ bgColor: gameStatus === "Win" ? "green" : "red", opened: gameStatus !== "Pending" });
    console.log(modalState)
    return (
        <Modal
            centered 
            opened={modalState.opened}
            onClose={resetGameStatus}
            styles={{modal: { backgroundColor: modalState.bgColor }}}
        >
            <Text> You {gameStatus} </Text>
            <Button onClick={() => {setModalState({opened: false}); resetGameStatus()}}></Button>
        </Modal>
    )
}