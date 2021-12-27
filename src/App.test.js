import { render, screen } from '@testing-library/react';
import { configure, shallow, mount } from 'enzyme';
import App from './App';
import React from 'react';

it('renders without crashing', () => {
  shallow(<App />);
});
