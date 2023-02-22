import { createContext, useState } from 'react';

const SearchContext = createContext({
  searchTags: [],
  totalTags: 0,
  addSearchTag: (tag) => {},
  deleteSearchTag: (tag) => {},
  checkSearchTag: (tag) => {},
  clearSearchTags: () => {}
});

export function SearchContextProvider({ children }) {
  const [searchTags, setSearchTags] = useState([]);

  const addSearchTagHandler = (tag) => {
    setSearchTags((prevSearchTags) => {
      return prevSearchTags.concat(tag);
    });
  }

  const deleteSearchTagHandler = (tag) => {
    setSearchTags((prevSearchTags) => {
      return prevSearchTags.filter(searchTag => searchTag.title !== tag.title);
    });
  }

  const checkSearchTagHandler = (tag) => {
    return searchTags.some((searchTag) => searchTag.title === tag.title);
  }

  const clearSearchTagsHandler = () => {
    setSearchTags([]);
  }



  const context = {
    searchTags,
    totalTags: searchTags.length,
    addSearchTag: addSearchTagHandler,
    deleteSearchTag: deleteSearchTagHandler,
    checkSearchTag: checkSearchTagHandler,
    clearSearchTags: clearSearchTagsHandler
  };

  return (
    <SearchContext.Provider value={context}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;