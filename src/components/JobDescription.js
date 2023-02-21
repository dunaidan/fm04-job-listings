import styles from './JobDescription.module.css';
import { Breadcrumbs, Grid, Typography } from "@mui/material";

function JobDescription({ company, isNew, isFeatured, position, postedAt, contract, location }) {
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item className={styles.header}>
        <Typography component="h3" className={styles.role}>
          {company}
        </Typography>  
        {isNew && <Typography component="p" className={styles.badge} bgcolor="primary.dark">NEW!</Typography>}
        {isFeatured && <Typography component="p" className={styles.badge} bgcolor="#000">FEATURED</Typography>}
        
        
      </Grid>
      <Grid item>
        <Typography component="h2" color="#252F2E" fontWeight={700} className={styles.title}>{position}</Typography>
      </Grid>
      <Grid item>
        <Breadcrumbs separator="*" component="div" className={styles.crumbs}>
          <Typography component="p">{postedAt}</Typography>
          <Typography component="p">{contract}</Typography>
          <Typography component="p">{location}</Typography>
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
}

export default JobDescription;