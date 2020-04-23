import React, {Component} from "react";
import hoc from '../../HigherOrderComponent/Hoc/Hoc'
import ToolBar from "../Navigation/ToolBar/ToolBar";
import styles from './Layout.module.css'
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";


class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
           return { showSideDrawer: !prevState.showSideDrawer};
        });
    };


    render() {
        return (
            <hoc>
                <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    handler={this.sideDrawerClosedHandler}
                />

                <main className={styles.content}>
                    {this.props.children}
                </main>
                {/*<footer>ali3</footer>*/}
            </hoc>
        );
    }
}



export default Layout;