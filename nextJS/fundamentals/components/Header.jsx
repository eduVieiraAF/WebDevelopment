export default function Header(props) {
console.log(`${props.title} → properties: ${JSON.stringify(props)}`)
// * props is read-only

    return (
        <header>
            <h1>Next.js fundamentals</h1>
            <h2>{ props.title }</h2>
            <h2>{ props.name }</h2>
        </header>
    )
}