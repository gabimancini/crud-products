import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, CardMedia } from '@mui/material';
interface Products {
    id: string
    title: string
    description: string
    price: string
    image: string
}

export default function ProductCard(props: Products) {
    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={props.image}
                    alt="green iguana"
                    className="product__image"
                />
                <CardContent>
                    <Typography gutterBottom  component="div">
                        {props.title}
                    </Typography>
                    <Typography gutterBottom component="div">
                        {props.description}
                    </Typography>
                    <Typography gutterBottom component="div">
                        {`$ ${props.price}`}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                {/* <Button size="small" color="primary">
                    {props.price}
                </Button>*/}
            </CardActions>
        </Card>
    );
}
