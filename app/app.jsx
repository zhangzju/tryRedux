import React from 'react';
import {render} from 'react-dom';
import Profile from './Profile';

const element = document.createElement('div');
document.body.appendChild(element);

const props = {
  name: 'viking',
  age: 18
};

render(<Profile {...props}/>, element);
