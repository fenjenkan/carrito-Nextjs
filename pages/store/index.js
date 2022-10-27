import React from 'react'
import Layout from '../../components/Layout'
import { getItems } from '../../services/itemServices'
import Image from 'next/image'
import Product from '../../components/Product'
import styles from "../../styles/product.module.css"
const index = ({items}) => {
  return (
    <Layout>
      <h1>Store</h1>
      <div className={styles.items}>
        {
        items && items.map(item => 
          <Product key={item.id} item={item} showAs=""/>
          )
      }
      </div>
      
    </Layout>
  )
}

export async function getStaticProps(){
  const res = await getItems();
  return {
    props: {
      items: res
    }
  }
}
export default index