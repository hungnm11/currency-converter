import React from 'react';
import { _getData } from './repo';
import CurrencyUI from './ui/currency-converter-ui';

class CurrencyConvert extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const params = {
      access_key: '9af2d5555fd753d5b3fccb3a4c7a3341'
    };
    _getData(params).then(data => {
      this.setState(
        Object.assign({}, this.state, { res: data })
      );
    });
  }

  processData() {
    if (this.state.data) this.setState({ res: {} });
    return this.state.res;
  }

  render() {
    const data = this.processData();
    return (
      <CurrencyUI {...data} />
    );
  }
}

export default CurrencyConvert;