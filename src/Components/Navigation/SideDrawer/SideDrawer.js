import React from "react";
import hoc from "../../../HigherOrderComponent/Hoc/Hoc";
import styles from './SideDrawer.module.css'
import Logo from "../../UI/LOGO/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from "../../UI/BackDrop/BackDrop";



const SideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    return (
        <hoc>
            <BackDrop show={props.open} handler={props.handler}/>
            <div className={attachedClasses.join(' ')}>
                <div className={styles.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </hoc>
    );
};

export default SideDrawer;