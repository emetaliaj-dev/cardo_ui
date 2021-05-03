import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Requirements } from '../components/Requirements';

const stories = storiesOf('App Test', module);

stories.add('App', () => {

  return (
    <div className='form'>
      <h1>Signup</h1>

      <Requirements
      />
    </div>
  );
});
