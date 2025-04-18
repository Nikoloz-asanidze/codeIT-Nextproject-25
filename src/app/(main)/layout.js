import styles from "./page.module.css";

function layout ({children}) {
return (
    <div className={styles.container}>
     <nav className={styles.nav}></nav>
     {children}
    </div>
)
}

export default layout;