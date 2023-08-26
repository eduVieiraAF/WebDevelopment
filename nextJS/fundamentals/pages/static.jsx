import Layout from "@/components/Layout";

export async function getStaticProps() {
    return {
        props: {
            number: Math.random(),
            name: 'Static Context'
        }
    }
}

export default function Static(props) {
    return (
        <Layout>
            <div>{ props.number }</div>
        </Layout>
    )
}