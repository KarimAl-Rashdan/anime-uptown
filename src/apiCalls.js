function fetchData(path) {
  return fetch(`https://api.jikan.moe/v4/${path}`)
  .then(response => {
    if(response.ok){
      return response.json()
    } else {
      throw new Error(`An error occured: Status ${response.status}`)
    }
  })
}

export default fetchData;