import styles from "./NotFound.module.css"

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <img className={styles.notFoundImage} src="/src/assets/movie-search.png" alt="Busca el video" />
      <h1 className={styles.notFoundTitle}>404</h1>
      <p className={styles.notFoundText}>¡Oh, No! Esa página no está aquí</p>
    </div>
  )
}

export default NotFound