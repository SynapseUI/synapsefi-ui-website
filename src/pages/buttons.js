import React from 'react';
import Link from 'gatsby-link';

import Button from '../components/Button';

const Buttons = () => (
  <div>
    <Button> Default </Button>
    <Button primary> Primary </Button>
    <Button secondary> Secondary </Button>
    <Button tertiary> Tertiary </Button>
    <Button isDisable> Disable </Button>
    <Button isLoading> Loading </Button>
  </div>
);

export default Buttons;
