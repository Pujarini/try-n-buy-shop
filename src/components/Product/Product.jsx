import React from 'react';
import {Card, CardActions,CardMedia,CardContent, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './styles'

const Product = ({product}) => {
    const classes= useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image="" titlte="dummy"/>
            <CardContent>
                <div className={classes.CardContent}>
                <Typography variant="h5" gutterBottom>
                {product.productName}
                </Typography>
                <Typography variant="h5">
                    {product.price}
                </Typography>
                </div>
                <Typography variant="h2" color="textSecondary">
            {product.description}
            </Typography>
            </CardContent>
           <CardActions disableSpacing className={classes.CardActions}>
               <IconButton aria-label="Add to Cart">
                   <AddShoppingCart/>
               </IconButton>
           </CardActions>
        </Card>
    )
}

export default Product

