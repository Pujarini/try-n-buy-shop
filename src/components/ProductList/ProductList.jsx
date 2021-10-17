import React, { Component } from 'react';
import {Grid} from '@material-ui/core'
import Product from '../Product';

const products=[
    {id:1, productName:"Shoe", description:"I am gym running shoes",price:"10"},
    {id:2, productName:"Tshirt", description:"I am gym tshirt",price:"20"},
    {id:3, productName:"iPhone", description:"I am iPhone",price:"50"},
    {id:4, productName:"lamp", description:"I am study lamp",price:"100"}
]

export default class ProductList extends Component {
    render() {
        return (
           <Grid container spacing={4} justify="center">
            {products.map(product=>{
               return( <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <Product product={product}/>
                </Grid>)
            })}
           </Grid>
        )
    }
}
