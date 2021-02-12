export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/')
    const data = await res.json()

    const paths = data.map(ninja => {
        return {
            params: {
                id: ninja.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return {
        props: { data: data }
    }
}




const Detail = ({ data }) => {
    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.email}</p>
            <p>{data.address.city}</p>
        </div>
    );
}

export default Detail;