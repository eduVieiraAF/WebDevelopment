import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function ClientByCode() {
    const router = useRouter()

    return (
        <Layout>
            <h2>Client { router.query.code }</h2>
            <h2>Branch { router.query.branch }</h2>
        </Layout>
    )
}