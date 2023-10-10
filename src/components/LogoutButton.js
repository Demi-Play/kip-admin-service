import * as React from 'react';
import { forwardRef } from 'react';
import { useLogout } from 'react-admin';
import MenuItem from '@mui/material/MenuItem';
import ExitIcon from '@mui/icons-material/PowerSettingsNew';

const LogoutButton = forwardRef((props, ref) => {
    const logout = useLogout();
    const handleClick = () => logout('/custom-login');
    return (
        <MenuItem
            onClick={handleClick}
            ref={ref}
            
        >
            <ExitIcon /> Выйти
        </MenuItem>
    );
});

export default LogoutButton;