import React, { Component } from "react";
import Like from "../navbar/liked";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

class MoviesTable extends Component {
  colum = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onLike, onDelete, onSort, sortColum } = this.props;
    return (
      <table className="table">
        <TableHeader colum={this.colum} onSort={onSort} sortColum={sortColum} />
        <TableBody data={movies} colum={this.colum} />
      </table>
    );
  }
}

export default MoviesTable;
