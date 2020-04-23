import React from "react";
import styles from './ToolBar.module.css'
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../UI/LOGO/Logo";
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import hoc from "../../../HigherOrderComponent/Hoc/Hoc";
import SearchBox from "../../UI/SearchBox/SearchBox";

const ToolBar = (props) => {
    return (
        <hoc>
            <div className={styles.SearchBox}>
                <div className={styles.Logo}>
                    <Logo/>
                </div>
                <SearchBox/>
            </div>
            <header className={styles.Toolbar}>
                <DrawerToggle clicked={props.drawerToggleClicked}/>
                <nav className={styles.DesktopOnly}>
                    <NavigationItems/>
                </nav>
            </header>
        </hoc>
    );
};

export default ToolBar;