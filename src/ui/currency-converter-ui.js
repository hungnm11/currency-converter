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
                <p><img className="img-responsive" src={require('../images/logo.png')} /></p>
            </div>
            <div className="col-md-8">
              <div className="page-header">
                <h1>Example page header <small>Subtext for header</small></h1>
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
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                      <select className="form-control">
                        <option value='USD' title='US Dollar'>USD</option>
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