// function fetchData(id) {
//   return fetch(`https://api.jikan.moe/v4/anime/${id}`)
//   .then(response => {
//     if(response.ok) {
//       return response.json()
//     } else {
//       throw new Error(`An error occured: Status ${response.status}`)
//     }
//   })
// }
// https://api.jikan.moe/v4/anime?rating=%22r17%22&genre=%221%22
function fetchData(path) {
  return fetch(`https://api.jikan.moe/${path}`)
  .then(response => {
    if(response.ok){
      return response.json()
    } else {
      throw new Error(`An error occured: Status ${response.status}`)
    }
  })
}

export default fetchData;