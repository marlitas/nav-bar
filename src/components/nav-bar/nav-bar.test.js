import { configure, shallow, mount } from 'enzyme';
import NavBar from './nav-bar';
import React from 'react';

describe('Heading', () => {
  it('renders the site title', () => {
    const wrapper = mount(
      <NavBar title='My Cool Site'/>
    );

    const heading = wrapper.find('.site-title');
    expect(heading.text()).toBe('My Cool Site')
  })
})