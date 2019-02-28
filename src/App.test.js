import React from 'react';
// import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from './App';

describe('<App />', ()  => {
  let tree;
  beforeEach(() => {
    tree = mount(<App/>);
  });

  it('renders without crashing', () => {
      expect(tree).toMatchSnapshot();
  });

  it('test the fetch countries function', () => {
    return tree.instance().fetchCountries().then(() => {
      expect(tree.state().items).toEqual([])
    });
  });
  it('tests get country', () => {
    tree.instance().getCountries('asia');
    expect(tree.state().region).toEqual('asia');
  });
  it('when it\'s loading', () => {
    tree.setState({loading: true});
    expect(tree).toMatchSnapshot();
  })
});
