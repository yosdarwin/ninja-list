import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (

    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={styles.title}>Welcome</h1>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum iusto suscipit ad natus fugit. Rem laborum, voluptate pariatur ipsa mollitia temporibus nemo ullam sed? Quo magni inventore odit tempore unde?</p>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum iusto suscipit ad natus fugit. Rem laborum, voluptate pariatur ipsa mollitia temporibus nemo ullam sed? Quo magni inventore odit tempore unde?</p>
      <Link href="/ninjas">
        <a className={styles.btn}>
          Check All Ninjas
        </a>
      </Link>
    </div>
  )
}
