import { Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import styles from './SearchTag.module.css';
import { useContext } from "react";
import SearchContext from "../../context/search-context";

function SearchTag({ tag }) {

  const searchCtx = useContext(SearchContext);

  const removeClickHandler = () => {
    searchCtx.deleteSearchTag(tag);
  }

  return (
    <div className={styles.tag}>
      <Typography component="p" className={styles.role}>{tag.title}</Typography>
      <ClearIcon className={styles.clearIcon} fontSize="small" onClick={removeClickHandler}/>
    </div>  
  );
}

export default SearchTag;