import Link from "next/link"
import styles from "../styles/Layout.module.css"

export default function Layout(props) {
    console.log(props)

    return (
        <div className={styles.layout}>
            <Link href='/'>home</Link>
            {props.children}
        </div>
    )
}