import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Link href="/charms"><h1>Charming</h1></Link>
      <Link href="/sample"><h1>Sample</h1></Link>
    </div>
  )
}