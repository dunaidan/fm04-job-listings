import { Button, Grid } from "@mui/material";
import styles from './TagItem.module.css';
import { useContext } from "react";
import SearchContext from "../context/search-context";

function TagItem({ title, type }) {
  const searchCtx = useContext(SearchContext);
  const tag = {title, type};

  const addToSearchTagsHandler = () => {
    if( !searchCtx.checkSearchTag(tag)) {
      searchCtx.addSearchTag({ title, type });
    }
  }

  return (
    <Grid item>
      <Button 
        variant="contained" 
        disableElevation 
        color="primary" 
        className={styles.tagButton}
        size="small"
        onClick={addToSearchTagsHandler}
      >
        {title}
      </Button>
    </Grid>
  );
}

export default TagItem;