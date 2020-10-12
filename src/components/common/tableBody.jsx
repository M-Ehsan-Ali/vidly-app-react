import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, colum) => {
    if (colum.content) return colum.content(item);

    return _.get(item, colum.path);
  };
  render() {
    const { data, colum } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr>
            {colum.map((colum) => (
              <td>{this.renderCell(item, colum)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
