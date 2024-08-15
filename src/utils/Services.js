export const filterMoviesByGenre = (movies, targetGenre, limit = 10) => {
    return movies
      .filter(movie => movie.genres.includes(targetGenre))
      .slice(0, limit);
  };


  export const getRandomMovies=(arr, count = 4)=>{
    count = Math.min(count, arr.length);
    const copyArr = [...arr];
    
    const result = [];
    
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * copyArr.length);
      result.push(copyArr.splice(randomIndex, 1)[0]);
    }
    
    return result;
  }