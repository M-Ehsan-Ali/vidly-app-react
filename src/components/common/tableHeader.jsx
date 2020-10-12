import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColum = { ...this.props.sortColum };
    if (sortColum.path === path)
      sortColum.order = sortColum.order === "asc" ? "desc" : "asc";
    else {
      sortColum.path = path;
      sortColum.order = "asc";
    }
    this.props.onSort(sortColum);
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.colum.map((colum) => (
            <th
              key={colum.path || colum.key}
              onClick={() => this.raiseSort(colum.path)}
            >
              {colum.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
