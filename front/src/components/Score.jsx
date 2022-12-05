import { Text } from '@mantine/core';

export default function Score({ points, color }) {
    return (
        <div style={{ padding: 10, display:"flex", flexDirection:"column", margin: "auto", backgroundColor:"yellow", paddingRight: "100px", paddingLeft:"100px", border: "solid 3px black"}}>
            <Text style={{margin:"auto"}}>Score</Text>
            <Text fw={700} style={{ color, margin:"auto" }}> { points } </Text>
        </div>
    )
}