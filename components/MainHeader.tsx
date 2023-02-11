import { SanityProvider } from '../hooks/SanityContext';
import { client } from '../lib/sanity.client';
import Header from './Header';
import { NextPage } from 'next';

const MainHeader= ()=> {
  return (
<div>
  <SanityProvider>
      <Header/>
     </SanityProvider>
    </div>
  )
}

export default MainHeader
