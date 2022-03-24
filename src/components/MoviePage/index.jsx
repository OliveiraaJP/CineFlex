import { useParams } from "react-router-dom";

function MoviePage(){

    const { idMovie } = useParams()


    return(
        <div>DEU CERTO</div>
    )
}

export default MoviePage;