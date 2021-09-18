import { NextPage } from "next";
import MobileHeader from "@components/MobileHeader";
import Meta from "@components/Meta";
import LeftPanel from "@components/LeftPanel";
import BottomBar from "@components/BottomBar";
import styles from '@styles/common/Layout.module.css';

/**
 * This is the main layout for the `App`
 *
 * 
 * @param {children} App right side layout.
*/
const Layout: NextPage = ({ children }) => {
    return (
        <>
            <Meta />
            <MobileHeader />
            <div className={styles.wrapper}>
                <LeftPanel />
                {children}
            </div>
            <BottomBar />
        </>
    );
}

export default Layout;