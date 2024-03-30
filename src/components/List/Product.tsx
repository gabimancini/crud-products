import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import {
    CustomizedCard,
    CustomizedCardMedia,
    CustomizedDescription,
    CustomizedPrice
} from './styledProduct';

interface Products {
    id: string
    title: string
    description: string
    price: string
    image: string
}

export default function ProductCard(props: Products) {
    return (
        <CustomizedCard sx={{ maxWidth: 250, paddingTop: 5 }}>
            <CustomizedCardMedia
                component="img"
                height="250"
                image={props.image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {props.title}
                </Typography>
                <CustomizedPrice gutterBottom component="div">
                    <span>US$</span> {props.price}
                </CustomizedPrice>
                <CustomizedDescription variant="body2" color="text.secondary" component="div">
                    {props.description}
                </CustomizedDescription>
            </CardContent>
        </CustomizedCard>
    );
}
