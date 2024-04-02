/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { Container, Card, CardMedia, Typography} from "@mui/material";

export const ContainerCard = styled.div`
display: flex; 
flex-wrap:wrap;
justify-content: center;
gap:20px;
`;

export const CustomizedContainer = styled(Container)`
background-color:#f8f4f4;
max-width:100%; 
`;

export const CustomizedCard = styled(Card )`
&& {
border-radius:8px;
}
`;

export const CustomizedCardMedia = styled(CardMedia )`
&& {
object-fit: contain;
transition: all .5s;
}
&:hover{
    transform: scale(1.2)
}
` as any;

export const CustomizedPrice = styled(Typography)`
&& {
font-size:18px;
span{
    vertical-align:super;
    font-size:12px;
}
}
` as any;


export const CustomizedCategory = styled(Typography) 
   // eslint-disable-next-line no-unexpected-multiline
   `font-size:11px ;
    color:#682B90;`as any;
 
export const CustomizedDescription = styled(Typography)`
&& {
color:#a3a19b;
}
` as any;
