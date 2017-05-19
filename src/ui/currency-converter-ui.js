import React from 'react';

class CurrencyConvertUI extends React.Component {

  render() {
    console.log('PROPS: ', this.props);
    const quotes = this.props.quotes;
    let columns;
    if (quotes) {
      columns = Object.keys( quotes ).map( (p,i) => {
        const str = p.substring(3);
        return (<li key={p}>USD => {str}:  <span className="currency-number">{quotes[p]}</span></li>);
      });
    }

    return (
       <div className="row">
            <div className="col-md-4">
                <p><img className="img-responsive" src="./images/logo.png" /></p>
            </div>
            <div className="col-md-8">
                <div className="page-header">
                    <h1>Currency <small>Converter 1 USD</small></h1>
                    <ul>
                    {columns}
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default CurrencyConvertUI;