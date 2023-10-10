import * as React from 'react';
import { Menu } from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PeopleIcon from '@mui/icons-material/People';
import LabelIcon from '@mui/icons-material/Label';

export const MyMenu = () => (
    <Menu>
        <Menu.DashboardItem to='/' />
        <Menu.Item to="films" primaryText="Фильмы" leftIcon={<BookIcon />} />
        <Menu.Item to="selections" primaryText="Подборки" leftIcon={<ChatBubbleIcon />}/>
        <Menu.Item to="persons" primaryText="Актеры" leftIcon={<PeopleIcon />}/>
        <Menu.Item to="censors" primaryText="Цензоры" leftIcon={<LabelIcon />}/>
    </Menu>
);