import styled from "styled-components";
import { Container, Card, CardMedia, Typography} from "@mui/material";

export const ContainerCard = styled.div`
display: flex; 
flex-wrap:wrap;
gap:20px;
`;

export const CustomizedContainer = styled(Container)`
background-color:#f8f4f4;
max-width:100%; 
`;

export const CustomizedCard = styled(Card )`
border-radius:8px;
`;

export const CustomizedCardMedia = styled(CardMedia)`
object-fit: contain;
`;

export const CustomizedPrice = styled(Typography)`
font-size:18px;
span{
    vertical-align:super;
    font-size:12px;
}
`;
export const CustomizedDescription = styled(Typography)`
color:#a3a19b;
`;