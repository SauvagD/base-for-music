import { createStyles, Image, UnstyledButton } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => ({
  symbol: {
    transition: 1,
    backgroundColor: "blue",
    margin: "auto",
    width: '120px', height: '120px', borderRadius: "180px", display: "flex",
    transition: "0.3s",
    '&:hover': {
        width: '150px',
        height: '150px'
    }
  },
}));

export default function Symbol({src, alt, onClick}) {
    const { classes } = useStyles();
    return (
        <UnstyledButton className={classes.symbol} style={{backgroundColor: alt === "man" ? "cyan" : "pink" }} onClick={onClick} >
            <div style={{ width: 50, margin: "auto" }}>
                <Image
                    radius="md"
                    src={src}
                    alt={alt}
                />
            </div>
        </UnstyledButton>
    )
}