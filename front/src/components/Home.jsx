import { Button } from "@mantine/core";

export function Home({ startGame }) {
    return (
        <>
            <Button onClick={startGame}>Play</Button>
        </>
    )
}