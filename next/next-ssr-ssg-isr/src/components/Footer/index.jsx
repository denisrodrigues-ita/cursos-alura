import styles from "../../css/footer.module.css";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer
      className={`${styles.footerCustom} d-flex align-items-center justify-content-center bg-dark text-light h-300`}
    >
      <p>©{currentYear} - All rights reserved</p>
    </footer>
  );
};

export default Footer;
