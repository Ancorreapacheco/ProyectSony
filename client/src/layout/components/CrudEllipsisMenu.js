import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const CrudEllipsisMenu = (projectId) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <i class="fa fa-ellipsis-v text-xs"></i>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleRead}>Ver</MenuItem>
                <MenuItem onClick={handleClose}>Editar</MenuItem>
                <MenuItem onClick={handleClose}>Borrar</MenuItem>
            </Menu>
        </div>
    );
}

const handleRead = (pid) => {
    alert('Te voy a redirigir al proyecto' + pid.toString());
};