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

function fetchMainList() {
  return fetch("https://api.jikan.moe/v4/anime")
  .then(response => {
    if(response.ok){
      return response.json()
    } else {
      throw new Error(`An error occured: Status ${response.status}`)
    }
  })
}

export default fetchMainList;