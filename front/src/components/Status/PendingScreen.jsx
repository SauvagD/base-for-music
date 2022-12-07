import { Text, Flex, Grid  } from '@mantine/core';
import { useGameContext } from '../../providers/GameProvider';
import man from '../../assets/man-sign.png';
import woman from '../../assets/woman-sign.png';
import Symbol from '../Symbol';

export default function PendingScreen() {
    const {validate, nameInfo} = useGameContext();
    return (
        <>
            <Flex       
                mih={50}
                gap="md"
                justify="flex-center"
                align="flex-center"
                direction="column"
                style={{margin: "50px"}}
                >
                <Text fw={700} tt="uppercase" sx={{fontSize: 50, lineHeight: 1.4, margin:"auto"}}>{ nameInfo?.firstName }</Text>
                <Grid>
                    <Grid.Col span={6}> <Symbol onClick={validate.bind(null, "male")} src={man} alt="man" /> </Grid.Col>
                    <Grid.Col span={6}> <Symbol onClick={validate.bind(null, "female")} src={woman} alt="woman" /> </Grid.Col>
                </Grid>
            </Flex>
        </>
    )
}