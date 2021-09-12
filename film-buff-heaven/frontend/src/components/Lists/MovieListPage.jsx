import React, {useContext} from 'react';
import UserContext from '../../context/context.js';


function MovieList (){
    const {userData} = useContext(UserContext);
    return(
        <div>
            <h1>Test</h1>
        </div>
    );
}

export default MovieList;