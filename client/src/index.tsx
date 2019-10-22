import 'core-js/stable';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
// TEMP - there has to be at least one import of @emotion/core to `css` work properly with TS
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from '@emotion/core';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
