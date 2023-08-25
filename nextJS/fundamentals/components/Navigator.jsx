import Link from "next/link"
import styles from "../styles/Navigator.module.css"

export default function Navigator(props) {
    return (
        <>
            <Link
                className={styles.navigator}
                style={{ backgroundColor: props.color ?? 'dodgerblue'}}
                href={props.dest}>
                {props.text}
            </Link>
        </>
    )
}