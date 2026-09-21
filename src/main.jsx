import { StrictMode } from 'react';import { createRoot } from 'react-dom/client';import App from './App';import './styles.css';
import '@maersk-global/fonts/maeu/fonts.css';
import '@maersk-global/mds-design-tokens/maersk/light/css/design-tokens-px.css';
import '@maersk-global/mds-foundations/css/foundations.css';import './mds-layout.css';
createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
