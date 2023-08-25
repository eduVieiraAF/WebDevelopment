export default function Jsx() {
    //* pure JS
    const a = 1
    const b = 'hello'
    const obj = <p>{ JSON.stringify({ nome: "Bill", idade: 30 }) }</p>
    const title = <h1>Hello JSX</h1>

    console.log(a, b)

    function subtitle() {
        return <h2>{ "awesome".toUpperCase() }</h2>
    }

    return (
        //* JSX
        <div>
            { title }
            { subtitle() }
            {/* I can use JS with {} */}
            <p>{ a + b }</p>
            { obj }
        </div>
    )
}