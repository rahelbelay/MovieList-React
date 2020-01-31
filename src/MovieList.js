

import React from 'react';


function _handleMouseOver() {
    console.log('ouch')

}
// const movies = [
//     'The Goonies',
//     'E.T',
//     'Gleaming the Cube',
// ]

//movieList is the react component
class MovieList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [
                'The Goonies',
                'E.T',
                'Gleaming the Cube',

            ]
        };
    }

    render() {
        return (
            <ul>
                {
                    this.state.movies.map((movie, i) => (
                        <li onClick={() => { this._handleClick(i) }}>{movie}</li>
                    ))
                }

            </ul>
        )
    };
    _handleClick = (index) => {
        console.log(index);
        const newMovies = [
            ...this.state.movies
        ];
        newMovies[index] += '!';

        this.setState({
            movies: newMovies

        });
    }
}

// function CatList() {
//     return (
//         <ul>
//             <li>Oakley</li>
//             <li>kitty</li>
//             <li>Mill</li>
//         </ul>
//     )
// }

export default MovieList;
//export default CatList