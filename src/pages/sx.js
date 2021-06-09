import background from "../images/background.png"

const sx = {
    pageStyles: {
        minWidth: "100%",
        minHeight: "100%",
    },
    titleStyles: {
        color: "#880000",
        textDecoration: "none",
        fontFamily: "Girassol",
    },
    headingStyles: {
        background: "#880000",
        fontFamily: "Girassol",
    },
    headerImage: {
        width: "96px",
        left: "0",
        marginRight: "32px",
    },
    listStyles: {
        marginBottom: "96px",
        paddingLeft: "0",
    },
    linkStyles: {
        color: "#8954A8",
        fontWeight: "bold",
        fontSize: "16pt",
        padding: "16px",
        marginLeft: "1em",
        "& > a": {
            color: "#ddeeff",
            textDecoration: "none",
            margin: "16px"
        },
    },
    raceImage: {
        float: "right",
        width: "30vw",
    },
    sidebar: {
        margin: "16px",
        display: "inline",
        float: "left",
        background: "#aa0000",
        border: '4px solid #990000',
        borderRadius: "16px",
        "& > ul": {
            "& > a": {
                color: "#ddeeff",
                textDecoration: "none",
                margin: "16px",
                marginLeft: "-16px",
            },
        },
    },
    main: {
        minWidth: "75vw",
        minHeight: "100vh",
        maxWidth: "75vw",
        display: "inline-block",
        fontFamily: "Lobster",
        backgroundImage: `url(${background})`,
        borderRadius: "16px",
        backgroundRepeat: "repeat",
        padding: "16px",
        "& p": {
            fontFamily: "Helvetica",
        }
    },
    traitStyles: {
        background: "#ffffff66",
        width: "50%",
        borderRadius: "16px",
        margin: "8px",
        padding: "8px",
    },
}

export default sx