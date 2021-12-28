import { configure, shallow, mount } from 'enzyme';
import NavBar from './navBar';
import React from 'react';
import {render, screen} from '@testing-library/react'
import App from '../../App'

describe('Heading', () => {
  it('renders the site title', () => {
    const wrapper = mount(
      <NavBar title='My Cool Site'/>
    );

    const heading = wrapper.find('.site-title');
    expect(heading.text()).toBe('My Cool Site')
  })
})

describe('Menu', () => {
  it('renders menu options', () => {
    const wrapper = mount(
      <NavBar title='My Cool Site'/>
    );

    const menu = wrapper.find('.menu');

    expect(menu).toBeDefined();
  });

  it('has correct links', () => {
    render(<NavBar />)
    const home = screen.getByRole('link', {name: /home/})

    expect(home).toHaveAttribute('href', '/')
  })
})