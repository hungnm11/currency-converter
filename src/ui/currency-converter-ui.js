import React, { Component } from 'react';

class CurrencyConvertUI extends Component {

  renderTime(time)  {
    const d = new Date(time * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = d.getFullYear();
    const month = months[d.getMonth()];
    const date = d.getDate();
    const hour = d.getHours() >= 10 ? d.getHours() : `0${d.getHours()}`;
    const min = d.getMinutes() >= 10 ? d.getMinutes() : `0${d.getMinutes()}`;
    const sec = d.getSeconds() >= 10 ? d.getSeconds() : `0${d.getSeconds()}`;
    let timestamp = date + ' ' + month + ', ' + year + ' - ' + hour + ':' + min + ':' + sec ;
    return timestamp;
  }

  render() {
    console.log('PROPS: ', this.props);
    const quotes = this.props.quotes;
    const currencyList = this.props.currencies;
    const rate = this.props.rate || 0;
    const time = this.props.timestamp;
    let columns;
    let currency;
    if (quotes) {
      columns = Object.keys( quotes ).map( (p,i) => {
        const str = p.substring(3);
        return (<li key={p}>USD => {str}:  <span className="currency-number">{quotes[p]}</span></li>);
      });
    }

    if (currencyList) {
      currency = Object.keys(currencyList).map((curr, i) => {
        return (
          <option value={curr} key={i} title={currencyList[curr]}>{curr}: {currencyList[curr]}</option>
        );
      });
    }

    return (
       <div className="row">
            <div className="col-md-4">
                <p><img className="img-responsive" src={require('../images/logo.png')} /></p>
            </div>
            <div className="col-md-8">
              <div className="page-header">
                <h1>Currency <small>Converter</small></h1>
                { this.renderTime(time)}
              </div>
                <form className="form-horizontal">
                  <div className="form-group">
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <input type="text" className="form-control" value="1" readOnly/>
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
                    <ul>
                    {columns}
                    </ul>
            </div>
        </div>
    );
  }
}

export default CurrencyConvertUI;