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
    console.log('onChange', e.target.value);
    const val = e.target.value;
    const paramCurr = {
      currencies: val,
    };

    _getData(paramCurr).then(rate => {
      console.log('RATE',rate);
    });
  }

  getData() {
    const params = {
      // access_key: '9af2d5555fd753d5b3fccb3a4c7a3341',
    };

    _getData(params).then(data => {
      this.setState(
        Object.assign({}, this.state, { res: data })
        );
      _getCurrencyList().then(currencyList => {
        const newState = this.state;
        const currencies = currencyList.currencies;
        newState.res.currencies = currencies;
        this.setState(newState);
      });
    });
  }

  processData() {
    const data = {};

    if (this.state.res) {
      const res = this.state.res;  
      data.quotes = res.quotes;
      data.source = res.source;
      data.currencies = res.currencies;
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