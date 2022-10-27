import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/faq.module.css";

const faq = () => {
  return (
    <Layout>
      <div className={styles.faq}>
        <h1>FAQ</h1>
        <div>
          <h3>De donde eres?</h3>
          <p>Soy de por ahi</p>
        </div>
      </div>
    </Layout>
  );
};

export default faq;
