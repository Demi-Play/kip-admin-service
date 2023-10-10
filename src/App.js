/* eslint-disable react/jsx-no-duplicate-props */
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@mui/icons-material/Book';
import { Dashboard } from '../src/components/menuUI/Dashboard';
import MyNotification from './components/MyNotification';
import authProvider from './authProvider';
import { i18nProvider } from './components/i18n_component';
import { MyLayout } from './components/menuUI/MyLayout';
// import PeopleIcon from '@mui/icons-material/People';
import { FilmCreate, FilmEdit, FilmList, FilmShow } from './components/FilmList';
import { ActorCreate, ActorEdit, ActorList, ActorShow } from './components/ActorList';
import { AwardCreate, AwardEdit, AwardList } from './components/AwardList';
import { CensorCreate, CensorEdit, CensorList } from './components/CensorList';
import BookIcon from '@mui/icons-material/Book';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { fetchUtils } from 'react-admin';
import { BrowserRouter} from 'react-router-dom';
import { defaultTheme } from 'react-admin';
const theme = {
    ...defaultTheme,
    sidebar: {
        width: 300, // The default value is 240
        closedWidth: 50, // The default value is 55
        onclick: {backgroundcolor: "green"},
    },
    palette: {
        mode: 'dark', // Switching the dark mode on is a single property value change.
    },
};




const httpClient = (url, options = {}) => {
    if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
    }
    
    
    return fetchUtils.fetchJson(url, options);
  };




export const dataProvider = jsonServerProvider('http://localhost:5002', httpClient);

dataProvider.getOne('film', { id: '6416c7d23d4ca7f6571efb92' });


// dataProvider.create("film", { data: {
//     "ageLimit": 16,
//     "banner": "string",
//     "name": "string",
//     "description": "string",
//     "country": "string",
//     "kindOfFilm": 0,
//     "releaseType": 0,
//     "duration": '00:20:15',
//     "release": "2023-03-19T08:25:49.240Z",
//     "startScreening": "2023-03-19T08:25:49.240Z",
//     "endScreening": "2023-03-19T08:25:49.240Z",
//     "content": "string",
//     "fees": 0,
//   }})


const App = () => (
    <BrowserRouter>
        <Admin
            title="КИП"
            disableTelemetry
            notification={MyNotification}
            layout={MyLayout}
            authProvider={authProvider}
            i18nProvider={i18nProvider}
            dataProvider={dataProvider}
            dashboard={Dashboard}
            theme={theme}
            
        >
            <Resource
                
                name="films"
                list={FilmList}
                edit={FilmEdit}
                show={FilmShow}
                create={FilmCreate}
                icon={PostIcon}
                recordRepresentation="name"
                
            />
            
            <Resource
                name="persons"
                list={ActorList}
                edit={ActorEdit}
                show={ActorShow}
                create={ActorCreate}
                icon={ChatBubbleIcon}
            />
            <Resource 
                name='selections'
                list={AwardList}
                edit={AwardEdit}
                create={AwardCreate}
                icon={BookIcon}
            />
            <Resource 
                name='censors'
                list={CensorList}
                edit={CensorEdit}
                create={CensorCreate}
                icon={BookIcon}
            />
            
        </Admin>
    </BrowserRouter>
);

export default App;