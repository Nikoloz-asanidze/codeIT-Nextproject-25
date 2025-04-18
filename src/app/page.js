"use client"
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [login, setLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleLoginChange = () => {
    return setLogin(!login)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: "m38rmF$",
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.token) {
            router.replace("/products");
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className={styles.main}>
      <form className={styles.container} onSubmit={handleSubmit}>
       {login ? <>
        <h3 className={styles.signin}>Sign In</h3>
        <p className={styles.desc}>please sign in to access market.</p>
        <input onChange={(event) => {
           return setUsername(event.target.value);
        }}
         className={styles.input} 
         placeholder="username" />

        <input
          onChange={(event) => {
            setPassword(event.target.value)
          }}
          className={styles.input}
          type="password"
          placeholder="password"
        />
        
          <button className={styles.button} type="submit">Sign In</button>
        
        <button onClick={handleLoginChange} className={styles.haventAccount}>haven't account? sing up</button>
       </> : <>
       <h3 className={styles.signin}>Sign up</h3>
       <button onClick={handleLoginChange} className={styles.haventAccount}>already have account? sing in</button>
       </>}
      </form>
    </main>
  );
}
