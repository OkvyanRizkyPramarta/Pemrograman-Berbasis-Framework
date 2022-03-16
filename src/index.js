import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

import BlogPost from './container/BlogPost/BlogPost.jsx'
import TableMahasiswa from './container/DataMahasiswa/TableMahasiswa';

ReactDOM.render(<TableMahasiswa />, document.getElementById('content'));

serviceWorker.unregister();
