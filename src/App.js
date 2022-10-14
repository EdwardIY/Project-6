import { useEffect, useState } from 'react';
import Search from './Search';
import MakeList from './MakeList';
// import searchIcon from './search.svg'


const URL = 'http://www.omdbapi.com/?apikey=3abefd66'



function App() {
  const [movie, setMovie] = useState('');
  const [list, setList] = useState('');
console.log(movie)
console.log(list)

  function searchMovies(searchMovie){
    fetch(`${URL}&s=${searchMovie}`)
    .then(response => response.json())
    .then(response => setList(response.Search))
    .catch(err => console.error(err));
  }

  useEffect(()=>{
    if(!movie) searchMovies('Harry potter');
    else searchMovies(movie);

  },[movie])

  return(
    <div className='app'>
      <Search setMovie={setMovie}/>
      <MakeList data = {list}/>
    </div>
  )
}
export default App