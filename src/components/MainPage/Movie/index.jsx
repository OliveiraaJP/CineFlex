import { Link } from 'react-router-dom';

import { MovieEl } from './styles';



function Movie({id, posterURL}){

    return(
        <MovieEl>
            <Link to={`/filme/${id}`}>
            <img src={posterURL} alt={posterURL} />
            </Link>
        </MovieEl>
    )
}

export default Movie;