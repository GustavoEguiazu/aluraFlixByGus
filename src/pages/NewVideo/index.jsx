import styles from "./NewVideo.module.css"
import FormVideos from "../../components/FormVideos"

const NewVideo = () => {
  return (
    <section className={styles.containerSection}>
      <div className={styles.containerTitles}>
        <h3>NUEVO VIDEO</h3>
        <h5>Llena el formulario para crear una nueva tarjeta de video</h5>
      </div>
      <div className= {styles.containerForm}>
        <h4>Crear Tarjeta</h4>
        <FormVideos colorBorder="#262626" />
      </div>
    </section>
  )
}

export default NewVideo