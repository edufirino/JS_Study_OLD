import React, { Component } from "react";

class Genres extends Component {
  render() {
    const { genres: allGenres, currentGenre, onClick } = this.props;

    //const genres =
    return (
      <ul className="list-group">
        {/* <li key="all" className="list-group-item">
          All Genres
        </li> */}
        {allGenres.map((g) => {
          return (
            <li
              onClick={() => onClick(g)}
              key={g.name}
              className={
                g.name === currentGenre
                  ? "list-group-item active"
                  : "list-group-item"
              }
              //className="list-group-item"
            >
              {g.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Genres;
