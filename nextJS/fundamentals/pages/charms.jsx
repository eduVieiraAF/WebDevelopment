import styles from './charms..module.css'
import Link from 'next/link'

export default function Charms() {
    return (
        <div>
            <Link href="/"><h3>← home</h3></Link>
            <br />
            <h1 className= {styles.cherry}>individual charm</h1>
        </div>
    )
}