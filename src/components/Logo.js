import styles from './Logo.module.css';

function Logo({ url, alt }) {
  return (
    <img 
      alt={alt}
      src={url}
      className={styles.logo}
    />
  );
}

export default Logo;