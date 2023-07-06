import { useState } from "react";
import { Drawer, IconButton,List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function DrawerComp(){
    const [open, setOpen] = useState(false);
    return(
        <>
        <Drawer open={open} onClose={()=> setOpen(false)}>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                     <ListItemText>
                        SignIn
                     </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Drawer>
        <IconButton sx={{color:'white', marginLeft:'auto'}} onClick={()=>setOpen(!open)}>
            <MenuIcon/>
        </IconButton>
        </>
    )
}
export default DrawerComp;