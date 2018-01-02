import './css/index.css';

import getLogin from './components/login/Login';
import getMailBox from './components/mail/Mailbox';
import getPage from './components/page/Page';
import registerServiceWorker from './config/registerServiceWorker';

getMailBox();
getPage();
getLogin();
registerServiceWorker();
