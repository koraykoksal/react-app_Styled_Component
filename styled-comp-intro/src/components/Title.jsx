import styled from "styled-components"

const Title = styled.h1`
    color:${({renk})=>renk || "black"};
    background-color:${(bgColor) => bgColor || "transparent"};


`
export default Title