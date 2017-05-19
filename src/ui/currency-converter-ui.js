import React from 'react';

class CurrencyConvertUI extends React.Component {

  render() {
    console.log('PROPS: ', this.props);
    const obj = this.props.quotes;
    let columns;
    if (obj) {
      columns = Object.keys( obj ).map( (p,i) => {
        return (<div key={p}>{p}  {obj[p]}</div>);
      });
    }
    return (
       <div className="row">
            <div className="col-md-4">
                <p><img className="img-responsive" src="./images/logo.png" /></p>
            </div>
            <div className="col-md-8">
                <div className="page-header">
                    <h1>Currency <small>Converter</small></h1>
                    {columns}
                </div>
            </div>
        </div>
    );
  }
}

export default CurrencyConvertUI;