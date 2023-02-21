import Box from "@mui/material/Box";
import styles from "./Header.module.css";

function Header () {
  return (
    <Box className={styles.header} component="header"></Box>
  );
}

export default Header;