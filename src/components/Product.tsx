import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
interface Products {
    id: string
    title: string
    description: string
    price: string
    image: string
}

export default function ProductCard(props:Products ) {
    return (
        <Card sx={{ maxWidth: 250 }} id={props.id}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="350"
                    image={props.image}
                    alt="green iguana"
                    className="product__image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                         {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    {props.price}
                </Button>
            </CardActions>
        </Card>
    );
}
