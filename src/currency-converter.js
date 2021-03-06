import React from 'react';
import { _getData, _getCurrencyList } from './repo';
import CurrencyUI from './ui/currency-converter-ui';

class CurrencyConvert extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.getData = this.getData.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  onHandleChange(e) {
    this.state.dollar = parseFloat(e.target.value);
    this.setState(this.state);
  }

  onChange(e) {
    const val = e.target.value;
    const paramCurr = {
      currencies: val,
    };

    _getData(paramCurr).then(rate => {
      console.log('RATE',rate);
      
      Object.keys(rate.quotes).map(r => { 
        this.state.rate = rate.quotes[r];
      });
      this.setState(this.state);
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
      data.timestamp = res.timestamp;
      data.rate = this.state.rate || 0;
      data.total = this.state.total || 0;
      data.dollar = this.state.dollar || 1;
    }
    return data;
  }

  render() {
    const data = this.processData();
    return (
      <CurrencyUI {...data} 
        onChange={this.onChange}
        onHandleChange={this.onHandleChange}
      />
    );
  }
}

export default CurrencyConvert;