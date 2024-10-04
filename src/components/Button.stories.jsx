// src/components/Button.stories.js

import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => 
<div>
  <div className='h-fit w-screen flex justify-center items-center py-3'>
    <Button {...args} />
  </div>
</div>

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  bgColor: '#2f404d'
};
