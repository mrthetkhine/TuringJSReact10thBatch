export default async function MoviesPage()
{
    let url = "http://localhost:3000/api/movies";
    let resp = await fetch(url);
    let movies = await resp.json();
    return(<div>
        Movie Page
        {
            movies && movies.map(movie=><div key={movie._id}>
                {movie.title}
            </div>)
        }
    </div>)
}