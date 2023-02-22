import { Box, Card, Grid, Link } from "@mui/material";
import styles from "./SearchForm.module.css";
import { useContext } from "react";
import SearchContext from "../../context/search-context";
import SearchTag from "./SearchTag";

function SearchForm() {
  
  const searchCtx = useContext(SearchContext);

  const clearSearchTagsHandler = () => {
    searchCtx.clearSearchTags();
  }

  const searchTags = searchCtx.searchTags.map((tag) => {
    return (
      <Grid item key={tag.title}>
        <SearchTag tag={tag}/>
      </Grid>
    );
  });

  return (
    <Box component="section" ml="1em" mr="1em">
      <Card variant="outlined" className={styles.card}>
        <Grid container spacing={4} alignItems="center">
          <Grid item md={11}>
            <Grid
              container
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              {searchTags}
            </Grid>
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