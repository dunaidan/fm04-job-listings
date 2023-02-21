import { Box, Card, Grid, Link, ToggleButton } from "@mui/material";
import styles from "./SearchForm.module.css";
import { useContext } from "react";
import SearchContext from "../../context/search-context";

function SearchForm() {
  
  const searchCtx = useContext(SearchContext);

  const clearSearchTagsHandler = () => {
    searchCtx.clearSearchTags();
  }

  return (
    <Box component="section" ml="1em" mr="1em">
      <Card variant="outlined" className={styles.card}>
        <Grid container spacing={4} alignItems="center">
          <Grid item md={11}>
            {searchCtx.searchTags.map((tag) => {return <p key={tag.title}>{tag.title}</p>})}
            <span>Text</span>
            <ToggleButton
            >
              ^
            </ToggleButton>
          </Grid>
          <Grid item md={1}>
            <Link
              component="button"
              variant="body2"
              onClick={clearSearchTagsHandler}
              className={styles.clearBtn}
            >
              Clear
            </Link>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default SearchForm;