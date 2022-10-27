import React from 'react'
import Layout from '../../components/Layout'
import Product from '../../components/Product'
import { getItemData, getPathsFromIds } from '../../lib/utils'

const ProductPage = ({productInfo}) => {
  return (
    <Layout>
        <Product showAs="Page" item={productInfo}/>
    </Layout>
    
  )
}
export async function getStaticPaths(){
    const paths = await getPathsFromIds()
    return{
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps({params}){
    const id = params.id;
    const product = await getItemData(id);
    return {
        props: {
            productInfo: product
        }
    }
}

export default ProductPage