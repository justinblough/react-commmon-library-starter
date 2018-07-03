import React from 'react'
import {
  configure as reactConfigure, setAddon, addDecorator
} from '@storybook/react'


//import {configure} from 'enzyme'
//import Adapter from 'enzyme-adapter-react-16'

//configure({ adapter: new Adapter() });
const shellStyle = {
  display: 'flex',
  height: 100 + '%',
  backgroundColor: '#f3f3f3',
  justifyContent: 'center',
}
const innerShellStyle ={
  maxWidth: 1024 + 'px',
  padding: 25 + 'px',
  display: 'flex',
  margin: 25 + 'px',
  flexFlow: 'column',
  justifyContent: 'center',
  //alignItems: 'center',
  backgroundColor: '#fefefe',
  flex: 1
}
addDecorator(story => (
  <div style={shellStyle}>
    <div style={innerShellStyle}>
      {story()}
    </div>
  </div>
))

const req = require.context('../../src/components',
 true, /\.story\.js$/)

function loadStories() {
    // You can require as many stories as you need.
    req.keys().forEach((filename) => req(filename))
}

reactConfigure(loadStories, module)
