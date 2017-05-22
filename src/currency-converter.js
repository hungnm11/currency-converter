import React from 'react';
import { _getData, _getCurrencyList } from './repo';
import CurrencyUI from './ui/currency-converter-ui';

class CurrencyConvert extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.getData = this.getData.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  onChange(e) {
    console.log('onChange', e);
  }

  getData() {
    const params = {
      access_key: '9af2d5555fd753d5b3fccb3a4c7a3341'
    };
    let obj1 = {}
    _getData(params).then(data => {
      this.setState(
        Object.assign({}, this.state, { res: data })
        );
    });

    _getCurrencyList(params).then(currencyList => {
      console.log('List', currencyList);
      Object.assign({}, ...this.state, { list: currencyList })
    });
    console.log('DATA', obj1);
  }

  processData() {
    const data = {
      
    };

    if (this.state.res) {
      const res = this.state.res;  
      data.quotes = res.quotes;
      data.source = res.source;
    }
    return data;
  }

  render() {
    const data = this.processData();
    return (
      <CurrencyUI {...data} 
        onChange={this.onChange}
      />
    );
  }
}

export default CurrencyConvert;