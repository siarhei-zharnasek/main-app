import React from 'react';
import { version } from 'useless-lib';

export const About: React.FC = () => {

  return (
    <>
      <h1>About Page</h1>
      <p>Just another page from the main container app...</p>
      <p>useless-lib version is {version}</p>
    </>
  );
};
