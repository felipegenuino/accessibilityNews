import Head from 'next/head'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
   <>
    <Head> 
      <title>Início | Accessibility News</title> 
    </Head>
    <h1 className={styles.title}>Olá <span>Mundo</span></h1>
   </>
  )
}
