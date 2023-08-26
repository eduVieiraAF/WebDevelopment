import Layout from "@/components/Layout"
import { useState } from "react"

export default function Integration() {
    const [client, setClient] = useState({})
    const [code, setCode] = useState(1)

    async function getClient() {
        const resp = await fetch(`/api/clients/${code}`)
        const data = await resp.json()
        setClient(data)

        // fetch(`/api/clients/${code}`)
            // .then(res => res.json())
            // .then(data => {
            //     setClient(data)
            // })
    }

    return (
        <Layout>
            <br />
            <div>
                <input type="number" value={code} onChange={e => setCode(e.target.value)} />
                <button onClick={getClient}>Get Client</button>
            </div>
            <ul>
                <li>Id: {client.id}</li>
                <li>Name: {client.name}</li>
                <li>Email: {client.email}</li>
            </ul>
        </Layout>

    )
}