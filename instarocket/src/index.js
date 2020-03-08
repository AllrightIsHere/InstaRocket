import React from 'react';
import {YellowBox} from 'react-native';

import Routes from './routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'Deprecation'
])

export default function App() {
  return <Routes/>
}
