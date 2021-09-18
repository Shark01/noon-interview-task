import { NextPage } from "next";
import styles from '@styles/home/AdsBlock.module.css';

/**
 * Layout for Advertisement
 * 
*/
interface AdsBlockProps {
    customClass?: string
}

const AdsBlock: NextPage<AdsBlockProps> = ({ customClass }) => {
    const cClass = customClass ? styles.story : styles.non_story;
    return (
        <div className={`${styles.ads_block} ${cClass}`}>
            <p>CALL US FOR ADVERTISEMENTS<br />Tel: 077 506 9877</p>
        </div>
    );
}

export default AdsBlock;