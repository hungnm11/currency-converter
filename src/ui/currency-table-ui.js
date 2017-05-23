import React, { Component } from 'react';

class CurrenciesTable extends Component {
  render() {
    const currencies = this.props.currencies;
    let columns

    if (currencies) {
      columns = Object.keys(currencies).map(key => {
        return (
          <tr key={key}>
            <td><span className="currency-number">{key}</span></td>
            <td>{currencies[key]}</td>
          </tr>
        );
      });
    }

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {columns}
        </tbody>
      </table>  
    );
  }
}

export default CurrenciesTable;