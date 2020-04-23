import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from './NavigationItems.module.css'

const NavigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem ChildText="دسته بندی کالاها"/>
        <NavigationItem ChildText="تخفیف ها و پیشنهادها"/>
        <NavigationItem ChildText="جهیزیه من"/>
        <NavigationItem ChildText="فروشنده شوید"/>
    </ul>
);

export default NavigationItems;