const GenresList=({genresArray}) =>{
    const GenresListItems = genresArray.map(genre=>(<li key={genre.id}>{genre.name}</li>))
return <ul>
    {GenresListItems}
</ul>}
export default GenresList
