import Link from "next/link";
import styles from "./page.module.css";

async function Page({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const item = await res.json();

  return (
    <main>
      <h5 className={styles.details}>Product Details</h5>

      <p className={styles.descript}>{item.description}</p>

      <div className={styles.meta}>
        <p><strong>price:</strong> {item.price} $</p>
        <p><strong>rate:</strong> ⭐ {item.rating.rate} ({item.rating.count} total)</p>
      </div>

      <div className={styles.idText}>ID: {params.id}</div>


     <Link href="/products">
        <button className={styles.backButton}>Back to products</button>
      </Link>
    </main>
  );
}

export default Page;


