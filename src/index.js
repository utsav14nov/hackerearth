import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import Provider  from './Provider'

ReactDOM.render((
  <Provider>
  	<Router>
  		<Routes/>
  	</Router>
  </Provider>
  ),
  document.getElementById('root')
)