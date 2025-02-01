import styles from '../styles/Top.module.css'
import Link from 'next/link'

export default function Top({name}:{name:string}) {
  return (
    <div className={styles.contactHeader}>
      <div className={styles.container}>
        <h1>{name}</h1>
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span className={styles.separator}> | </span>
          <span>{name}</span>
        </nav>
      </div>
    </div>
  )
}