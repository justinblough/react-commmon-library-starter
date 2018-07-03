import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import {components} from '../../index.js'
console.log(components)

const {Note} = components

storiesOf('Test', module).add('testing import', () => (
  <Note test="hello">
    <Note.Header><h2> My new noteNote</h2></Note.Header>
    <Note.Body>Body</Note.Body>
    <Note.Footer>Footer</Note.Footer>
  </Note>
))
