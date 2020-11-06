import React from "react";

import styles from "./Footer.module.scss";

function Footer() {
    var currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footerBar}>
            <div className={styles.copyright}>
            {`\u00A9${currentYear} All rights reserved.`}
            </div>
        </footer>
    );
};

export default Footer;