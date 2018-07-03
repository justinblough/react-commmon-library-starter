import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import Note from './Note'

storiesOf('Note', module).add('usage', () => (
  <Note>
  <Note.Header>
    <h2>Note</h2>
  </Note.Header>
  <Note.Body>testing</Note.Body>
  <Note.Footer>
    <div>
      <span className="cardModule__footer--brown">Note Date:</span>
      <span>
        somedate
      </span>
    </div>
    <div>
      <span className="cardModule__footer--brown">Created By:</span>
      James Smith
    </div>
  </Note.Footer>
</Note>
))
