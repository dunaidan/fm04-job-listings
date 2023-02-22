import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import JobList from './components/JobList';
import Header from './components/Header';
import { Box } from '@mui/material';
import theme from './Theme';
import { getAllJobs, searchJobs } from './util/jobs-util'
import { useEffect, useState, useContext } from 'react';
import SearchContext from './context/search-context';
import SearchForm from './components/search/SearchForm';


function App() {
  const [jobs, setJobs] = useState([]);

  const searchCtx = useContext(SearchContext);

  useEffect(() => {
    if (searchCtx.totalTags === 0) {
      setJobs(getAllJobs());
    } else {
      setJobs(searchJobs(searchCtx.searchTags));
    }
    
    
  }, [searchCtx.totalTags, searchCtx.searchTags])

  return (
    <ThemeProvider theme={theme}>
    <Box className="App">
      <Header />
      <Container component="main" maxWidth="lg">
        {searchCtx.totalTags > 0 && <SearchForm />}
        <JobList jobList={jobs}/>
      </Container>
    </Box>
    </ThemeProvider>
  );
}

export default App;
