import { Card, Grid } from "@mui/material";
import styles from "./JobItem.module.css";
import Logo from "./Logo";
import JobDescription from "./JobDescription";
import Tags from "./Tags";

function JobItem({ jobDetails }) {
  return (
    <Card variant="outlined" className={styles.card}>
      <Grid container spacing={4} alignItems="center">
        <Grid item md={2} sm={3} xs={12} textAlign="center">
          <Logo url={jobDetails.logo} alt={jobDetails.company}/>
        </Grid>
        <Grid item md={3} sm={9} xs={12}>
          <JobDescription 
            company={jobDetails.company}
            isNew={jobDetails.new}
            isFeatured={jobDetails.featured}
            position={jobDetails.position}
            postedAt={jobDetails.postedAt}
            contract={jobDetails.contract}
            location={jobDetails.location}
          />
        </Grid>
        <Grid item md={7} sm={12} xs={12}>
          <Tags level={jobDetails.level} languages={jobDetails.languages} tools={jobDetails.tools}/> 
        </Grid>
      </Grid>
    </Card>
  );
}

export default JobItem;