import styles from './Tags.module.css';
import { Grid } from "@mui/material";
import TagItem from './TagItem';

function Tags({ level, languages, tools }) {

  const leveTag = {
    type: 'level',
    title: level
  }

  const languagesTags = languages.map((langauge) => {
    return {
      type: 'langauges',
      title: langauge
    } 
  })

  const toolsTags = tools.map((tool) => {
    return {
      type: 'tools',
      title: tool
    } 
  })

  const tagList = [leveTag, ...languagesTags, ...toolsTags];

  return (
    <Grid container spacing={2} justifyContent="right" alignItems="center" className={styles.tags}>
      {
        tagList.map((tag) => { 
          return <TagItem key={tag.type+tag.title} type={tag.type} title={tag.title} />
        })
      }
    </Grid>
  );
}

export default Tags;