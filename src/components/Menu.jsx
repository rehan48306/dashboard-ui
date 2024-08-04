import { ChevronRight, LunchDiningRounded, MyLocationRounded, RestaurantMenu } from "@mui/icons-material";
import { IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const menuItems = [
    { text: 'Goals', icon: <MyLocationRounded className="text-red-500" />, bgColor: 'bg-red-300' },
    { text: 'Popular Dishes', icon: <LunchDiningRounded className="text-blue-500" />, bgColor: 'bg-blue-300' },
    { text: 'Menus', icon: <RestaurantMenu className="text-teal-500" />, bgColor: 'bg-teal-200' },
];

const Menu = () => {

    return (
        <div className="p-4 text-white rounded-lg">
            <List>
                {menuItems.map((item, index) => (
                    <ListItem key={index} className="flex items-center">
                        <div className="flex items-center flex-grow">
                            <ListItemIcon className="min-w-0 mr-4">
                                <div className={`flex items-center justify-center w-14 h-14 ${item.bgColor} text-white rounded-full text-xl `}>
                                    {item.icon}
                                </div>
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                primaryTypographyProps={{ className: 'font-bold' }} 
                            />
                        </div>
                        <IconButton
                            edge="end"
                            className="text-gray-400 bg-gray-800 p-1 rounded-full"
                            style={{ backgroundColor: '#333', color: '#fff' }}
                        >
                            <ChevronRight />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};
export default Menu