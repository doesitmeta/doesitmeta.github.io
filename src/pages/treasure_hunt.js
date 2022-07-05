import React from 'react';
import Layout from '@theme/Layout';


export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          height: '95vh',
          width: '95vw',
          fontSize: '20px',

        }}>
        <p> 

          Explore a whole new perspective of your surrounding at our AR Pavilion.
          Experience the role of architecture in the digital environment and see its potential within the merging of both realities.
          The only thing you need is your Phone.
        
        </p>

      </div>
    </Layout>
  );
}