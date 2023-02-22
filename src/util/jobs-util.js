import data from '../data/data.json'

export function getAllJobs() {
  return data;
}

export function searchJobs(seatchTags) {

  const filteredJobs = data.filter((job) => {
    let res = true;
    for(let tag of seatchTags) {
      if(tag.type === 'languages') {
        res = job.languages.includes(tag.title)
        //if at leat one is false exit loop
        if(!res) break;
      }
      else if (tag.type === 'tools') {
        res = job.tools.includes(tag.title)
        if(!res) break;
      }
      else if (tag.type === 'level') {
        res = job.level === tag.title;
        if(!res) break;
      }
    }
    return res;
  })

  return filteredJobs;
}