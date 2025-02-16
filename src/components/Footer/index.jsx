import { Link } from "react-router-dom"
import styles from "./Footer.module.css"
import Button from "../Button"

const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
        <img src="/img/Logo.png" alt="Logo ALura Flix" />
        <div className={styles.containerButtonsFooter}>
        <Link className={styles.link} to={"/"}>
            <Button classIcon="buttonIcon" text="HOME" icon="/icons/home-white.png" />
        </Link>
        <Link className={styles.link} to={"/new"}>
            <Button classIcon="buttonIcon" className="buttonAddPhone" text="" icon="/icons/add-white.png" />
        </Link>
        </div>
    </footer>
  )
}

export default Footer