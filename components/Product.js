import Image from "next/image";
import Link from "next/link";
import React from "react";
import { convertToPath } from "../lib/utils";
import styles from "../styles/product.module.css";
import CartButton from "./CartButton";
import { useAppContext } from "./stateWrapper";


const Product = ({ item, showAs, qty }) => {
  const cart = useAppContext();
  function handleDelete (id) {
    cart.deleteItem(id);
  }
  
  if (showAs === "Page") {
    return (
      <div className={styles.page}>
        <div className={styles.image}>
          <Image
            src={item.data.image}
            alt={item.data.description}
            width="800"
            height="800"
          />
        </div>
        <div>
          <div className={styles.info}>
            <h2>{item.data.title}</h2>
          </div>
          <div className={styles.price}>${item.data.price}</div>
          <div>{item.data.description}</div>
          <div>
            <CartButton item={item.data} />
          </div>
        </div>
      </div>
    );
  }

  if (showAs == "ListItem") {
    return (
      <div className={styles.ListItem}>
        <div>
          <Image
            src={item.image}
            alt={item.description}
            width="100"
            height="100"
          />
        </div>
        <div>
          <div>
            <h3>{item.title}</h3>
          </div>
          <div>{item.price}</div>
          {qty == 0 ? "" : <div>{qty} units</div>}
          {qty == 0 ? "" : <div>Subtotal : ${qty * item.price}</div>}
          <button type="button" onClick={() => handleDelete(item.id)}>-</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.item}>
      <div>
        <Link href={`/store/${convertToPath(item.title)}`}>
          <a>
            <Image
              src={item.image}
              alt={item.description}
              width="500"
              height="500"
            />
          </a>
        </Link>
      </div>
      <div>
        <h3>
          <Link href={`/store/`}>
            <a>{item.title}</a>
          </Link>
        </h3>
      </div>
      <div>${item.price}</div>
      <div>
        <CartButton item={item} />
      </div>
    </div>
  );
};

export default Product;
