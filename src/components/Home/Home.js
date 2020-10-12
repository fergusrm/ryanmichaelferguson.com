import React from "react";

import Resume from "../../assets/resume/ferguson_resume.pdf";
import styles from "./Home.module.scss";
import photo from "../../assets/images/moraine-lake-edited.jpg";

class Home extends React.Component {

  componentDidMount() {
    document.title = "Ryan Ferguson";
  }

  render() {
    return (
      <div className="App">
        <main className="App-header">
          <section className={styles.photo}>
            <div>
              <img className={styles.myPhoto} src={photo} alt="" />
            </div>
          </section>
          <section className={styles.bio}>
            <p>
              Hi! My name is Ryan Ferguson, and I'm a software engineer
              currently living and working in Boulder, Colorado.
            </p>
            <p>
              I've been working in the web-dev field for over 7 years, building
              numerous front-end sites and back-end services for the financial
              industry with a variety of different technologies.
            </p>
            <p>
              I'm skilled at mastering new technology quick, and am proud to
              work in a field that constantly evolves and provides new
              opportunities to learn! Currently, I create responsive, testable,
              and accessible web applications using modern Javascript frameworks
              (mainly React, but also Angular with some knowledge of Vue) along
              with the back-end service API's that power them (NodeJS via
              Express). In the past, I have also build and maintained accessible
              web apps using .NET (C#).
            </p>
            <p>For more information, see my resume:</p>
            <a
              className={[styles.resumeLink, styles.linkButton].join(" ")}
              href={Resume}
            >
              Resume
            </a>
            <p>
              To connect with me via LinkedIn or send me an email use the links
              below. This website was built to be responsive and accessible
              using React. To see the source code, check out my GitHub account.
              Thanks!
            </p>
            <div className={styles.linkContainer}>
              <a
                className={styles.linkButton}
                href="https://www.linkedin.com/in/ryan-ferguson-55518977/"
              >
                LinkedIn
              </a>
              <a
                className={styles.linkButton}
                href="mailto:ryanmferguson@pm.me"
              >
                Send Email
              </a>
              <a
                className={styles.linkButton}
                href="https://github.com/fergusrm"
              >
                GitHub
              </a>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
