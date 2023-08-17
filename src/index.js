import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Auth0Provider
    domain="dev-n2t2uqe2eg8tpsly.us.auth0.com"
    clientId="wPOVRqC9VmfVAHi82avssTq4XzxCwGRD"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <App />
  </Auth0Provider>
 
);


