import Head from 'next/head'
import style from '../../styles/Ninjas.module.css'
import Link from 'next/link'
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) => {
    return (
        <div>
            <Head>
                <title>Archive</title>
            </Head>
            <h2>All Ninjas</h2>
            {ninjas.map(ninja => (
                <Link href={`/ninjas/${ninja.id}`} key={ninja.id} >
                    <a className={style.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>

            ))
            }
        </div >
    );
}

export default Ninjas;