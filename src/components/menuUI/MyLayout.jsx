import { Layout } from 'react-admin';
import MyError from '../../MyError';

import { MyMenu } from './MyMenu';

export const MyLayout = props => <Layout {...props} menu={MyMenu} error={MyError}/>;
// sx={{background: "#232023"}}