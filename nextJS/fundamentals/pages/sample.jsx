import Header from "@/components/Header";
import Link from 'next/link'

export default function Sample() {
    return (
        <div>
            <Link href="/"><h3>← home</h3></Link>
            <Header name="sample" age={30} isActive={true} title="Next.js & React"/>
            <p>more than one element</p>
        </div>
    )
}