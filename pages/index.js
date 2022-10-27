import Layout from "../components/Layout";
import { getLatestItem } from "../services/itemServices";
import Product from "../components/Product";
import styles from "../styles/product.module.css";
import style from "../styles/Home.module.css";
import Image from "next/image";

export default function Home({items}) {
  return (
    <Layout title="bienvenido">
      <div className={style.banner}>
        <div className={style.bannerBackground}>
          <div className={style.bannerInfo}>
              <h2>TIENDA DE PRUEBA CREADA CON NEXT.JS</h2>
              <p>¡Buenas noticias! Si eres fan de shows como Futurama, Doctor Who, Dexter y Monty Python, Fillerama es el generador de lorem ipsum perfecto. Saca el fan de las series que llevas dentro y diviértete con ellos.</p>
          </div>
        </div>
      </div>
      <h3>Lo ultimo en guarachas</h3>
      <div className={styles.items} >
        {items && items.map(item =>(
          <Product key={item.id} item={item} showAs="item"/>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps () {
  const res = await getLatestItem();
  return {
    props:{
      items: res
    }
  }
}