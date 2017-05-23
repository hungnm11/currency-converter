import React, { Component } from 'react';

class CurrencyForm extends Component {
  render() {
    const currencyList = this.props.currencies;
    const rate = this.props.rate || 0;
    let currency;

    if (currencyList) {
      currency = Object.keys(currencyList).map((curr, i) => {
        return (
          <option value={curr} key={i} title={currencyList[curr]}>{curr}</option>
        );
      });
    }

    return (
      <form className="form-horizontal">
        <div className="form-group">
        <div className="col-md-6 col-sm-6 col-xs-6">
          <input type="text" className="form-control" defaultValue="1" />
        </div>
        <div className="col-md-6 col-sm-6 col-xs-6">
          <select className="form-control" disabled>
            <option value='USD' title='US Dollar'>USD</option>
          </select>
        </div>
        </div>
        <div className="form-group">
          <div className="col-md-6 col-sm-6 col-xs-6">
            <input type="text" className="form-control" value={rate} />
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6">
            <select className="form-control" onChange={this.props.onChange.bind(this)} >
              <option value="">Select currency</option>
              { currency }
            </select>
          </div>
        </div>
      </form>
    );
  }
}

export default CurrencyForm;