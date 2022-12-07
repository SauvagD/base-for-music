import { Button, Center, Flex, Text } from "@mantine/core";


export function Home({ startGame }) {
    return (
        <>
            <Center>
                <Flex
                    align
                    direction={"column"}
                    rowGap={30}
                    style={{height: "100vh", width: "100%", justifyContent: "center", alignItems: "center", margin: "auto"}}
                >
                    <Text fw={1000} sx={{fontSize: 40}}>
                        Welcome to the Gender Game !
                    </Text>
                    <Flex direction={"column"}>
                        <Text>The goal is to guess the gender of the name that will appear on the screen</Text>
                        <Text style={{margin:'auto'}}>Good Luck !</Text>
                    </Flex>
                    <Button onClick={startGame}>Play</Button>
                </Flex>
            </Center>
        </>
    )
}