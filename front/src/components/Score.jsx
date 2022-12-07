import { Text } from '@mantine/core';

export default function Score({ points, color }) {
    return (
        <div style={{ 
            padding: 10, 
            display:"flex", 
            flexDirection:"column", 
            margin: "auto", 
            backgroundColor:"#ffd11a", 
            paddingRight: "100px", 
            paddingLeft:"100px", 
            border: "solid 20px #ff8c1a",
            borderTop: "0",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px"
        }}>
            <Text fw={700} sx={{fontSize: 30, margin:"auto"}} style={{ margin:"auto", color: "#ff8c1a" }}>Score</Text>
            <Text fw={700} style={{fontSize: 20, color, margin:"auto" }}> { points } </Text>
        </div>
    )
}