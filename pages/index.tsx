import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PlantUML Live by codingpot</title>
        <meta name="description" content="PlantUML Live" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>PlantUML Live by codingpot</h1>
      </main>
    </div>
  )
}

export default Home
