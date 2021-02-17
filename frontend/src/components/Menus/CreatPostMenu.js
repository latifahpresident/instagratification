import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHighlighter, faSpinner, faTh, faTv} from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle, faMap } from '@fortawesome/free-regular-svg-icons';
import { MenuWrapper, MenuHeader, MenuItems, MenuItem } from './Menus.styles';
import { Link } from 'react-router-dom';


const CreateMenu = () => {
    const menuItems = [
        {
            name: 'Post',
            icon: faTh,
            path: "/newpost"
        },
        {
            name: 'Story',
            icon: faSpinner,
            path: "/newpost"
        },
        {
            name: 'Story Highlight',
            icon: faHighlighter,
            path: "/newpost"
        },
        {
            name: 'IGTV Video',
            icon: faTv,
            path: "/newpost"
        },
        {
            name: 'Reel',
            icon: faPlayCircle,
            path: "/newpost"
        },
        {
            name: 'Guide',
            icon: faMap,
            path: "/newpost"
        },
    ];

    return (
        <MenuWrapper>
            <MenuHeader>Create</MenuHeader>
            <MenuItems>
                {menuItems.map(menuitem => (
                    <MenuItem key={menuitem.name}>
                        <div className='icon'>
                            <FontAwesomeIcon  icon={menuitem.icon} size='lg'/>
                            <Link to={`${menuitem.path}`} className='link'>{menuitem.name}</Link>
                        </div>
                        <hr className='divider'/>
                    </MenuItem>
                ))}
            </MenuItems>
        </MenuWrapper>
    )
};

export default CreateMenu;