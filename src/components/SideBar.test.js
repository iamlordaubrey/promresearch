import React from 'react';
import { mount } from 'enzyme';
import SideBar from './SideBar';

describe('<SideBar />', ()  => {
  let tree
  const onClickSpy = jest.fn();
  const continents = ['asia', 'africa'];
  const props = {
    onClick: onClickSpy,
    continents
  };

  beforeEach(() => {
    tree = mount(<SideBar {...props}/>);
  });

  it('renders sidebar', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should call the mock method', () => {
    tree.find('li').first().simulate('click');
    expect(props.onClick.mock.calls.length).toEqual(1)
  })
});
