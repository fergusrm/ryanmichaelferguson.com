import React from 'react';

import styles from './Home.module.scss';
import photo from '../../assets/images/moraine-lake-edited.jpg';

// TODO: pick better font and update font sizes in nav
// TODO: Add date/copyright into footer?
// TODO: Tablet and Desktop view (plus horizontal phone/tablet)

class Home extends React.Component {
    render() {
        return <div className="App">
        <main className="App-header">
          <section class={styles.bio}>
            <div>
              <img class={styles.myPhoto} src={photo} alt=""/>
            </div>
            <p>Hi!  My name is Ryan Ferguson, and I'm a software engineer currently living and working in Boulder, Colorado.</p>
            <p>I've been working in the field for over 7 years, building numerous front-end sites and back-end services for the financial industry with a variety of different technologies. 
                I'm skilled at picking up new technology quick, and am proud to work in a field that constantly evolves and provides new opportunities to learn!
                Currently, I create responsive, testable, and accessible web applications in Javascript (React, Angular) and C#, along with the back-end service API's that power them (NodeJS via Express).</p>
            <p>For more information, see my resume:</p>
            <a class={[styles.resumeLink, styles.linkButton].join(" ")} href="javascript:void(0);">Resume</a> 
            <p>To connect with me via LinkedIn or send me an email use the links below.
              This website was built to be responsive and accessible using React.  To see the source code, check out my GitHub account.  Thanks!
            </p>
            <div class={styles.linkContainer}>
              <a class={styles.linkButton} href="https://www.linkedin.com/in/ryan-ferguson-55518977/">LinkedIn</a>
              <a class={styles.linkButton} href="mailto:ryanmferguson@pm.me">Send Email</a>
              <a class={styles.linkButton} href="https://github.com/fergusrm">GitHub</a>
            </div>
          </section>
        </main>
      </div>;
    }
}

export default Home;