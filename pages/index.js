import { internal_processStyles } from '@mui/styled-engine';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ResponsiveAppBar from './appbar'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCat} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div>
      <ResponsiveAppBar/>
      <Template/>
    </div>
  )
}

function Template() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shin Lee</title>
        <meta name="description" content="Shin Lee's Resume Site!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.profileimage} src="/icon.png" alt="..." />
        <h1 className={styles.title}>
          Shin Lee
        </h1>
        <p className={styles.description}>
          Student, Developer, and <FontAwesomeIcon icon= {faCat}/> Lover
        </p>
      </main>

      <main className={styles.about}  id="aboutme">
        <h1>About Me</h1>
        <p>
        I am an exploring developer mainly focused in mobile and web development involving Flutter and React.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus. Velit dignissim sodales ut eu sem integer vitae justo. Non quam lacus suspendisse faucibus interdum posuere. Nisl suscipit adipiscing bibendum est ultricies integer. Amet porttitor eget dolor morbi non arcu. Ut placerat orci nulla pellentesque dignissim. Nunc sed velit dignissim sodales ut eu sem integer. Est velit egestas dui id ornare arcu odio ut sem. Egestas integer eget aliquet nibh praesent. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Ultricies mi quis hendrerit dolor magna.

Non enim praesent elementum facilisis leo vel fringilla est. Orci sagittis eu volutpat odio facilisis mauris sit. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Nunc lobortis mattis aliquam faucibus. Duis ut diam quam nulla porttitor massa id. Sit amet mattis vulputate enim nulla. Scelerisque felis imperdiet proin fermentum leo vel orci. Sem nulla pharetra diam sit amet nisl. Pulvinar sapien et ligula ullamcorper malesuada. In aliquam sem fringilla ut morbi tincidunt augue interdum. Nisi est sit amet facilisis magna etiam tempor orci. Quisque id diam vel quam elementum pulvinar etiam. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Phasellus vestibulum lorem sed risus ultricies tristique. In iaculis nunc sed augue lacus viverra vitae. Amet luctus venenatis lectus magna.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus. Velit dignissim sodales ut eu sem integer vitae justo. Non quam lacus suspendisse faucibus interdum posuere. Nisl suscipit adipiscing bibendum est ultricies integer. Amet porttitor eget dolor morbi non arcu. Ut placerat orci nulla pellentesque dignissim. Nunc sed velit dignissim sodales ut eu sem integer. Est velit egestas dui id ornare arcu odio ut sem. Egestas integer eget aliquet nibh praesent. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Ultricies mi quis hendrerit dolor magna.

Non enim praesent elementum facilisis leo vel fringilla est. Orci sagittis eu volutpat odio facilisis mauris sit. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Nunc lobortis mattis aliquam faucibus. Duis ut diam quam nulla porttitor massa id. Sit amet mattis vulputate enim nulla. Scelerisque felis imperdiet proin fermentum leo vel orci. Sem nulla pharetra diam sit amet nisl. Pulvinar sapien et ligula ullamcorper malesuada. In aliquam sem fringilla ut morbi tincidunt augue interdum. Nisi est sit amet facilisis magna etiam tempor orci. Quisque id diam vel quam elementum pulvinar etiam. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Phasellus vestibulum lorem sed risus ultricies tristique. In iaculis nunc sed augue lacus viverra vitae. Amet luctus venenatis lectus magna.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus. Velit dignissim sodales ut eu sem integer vitae justo. Non quam lacus suspendisse faucibus interdum posuere. Nisl suscipit adipiscing bibendum est ultricies integer. Amet porttitor eget dolor morbi non arcu. Ut placerat orci nulla pellentesque dignissim. Nunc sed velit dignissim sodales ut eu sem integer. Est velit egestas dui id ornare arcu odio ut sem. Egestas integer eget aliquet nibh praesent. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Ultricies mi quis hendrerit dolor magna.

Non enim praesent elementum facilisis leo vel fringilla est. Orci sagittis eu volutpat odio facilisis mauris sit. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Nunc lobortis mattis aliquam faucibus. Duis ut diam quam nulla porttitor massa id. Sit amet mattis vulputate enim nulla. Scelerisque felis imperdiet proin fermentum leo vel orci. Sem nulla pharetra diam sit amet nisl. Pulvinar sapien et ligula ullamcorper malesuada. In aliquam sem fringilla ut morbi tincidunt augue interdum. Nisi est sit amet facilisis magna etiam tempor orci. Quisque id diam vel quam elementum pulvinar etiam. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Phasellus vestibulum lorem sed risus ultricies tristique. In iaculis nunc sed augue lacus viverra vitae. Amet luctus venenatis lectus magna.
        </p>
      </main>

      <br/>

      <main className={styles.skills}>
        <h1 id="skills">My Skills</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus. Velit dignissim sodales ut eu sem integer vitae justo. Non quam lacus suspendisse faucibus interdum posuere. Nisl suscipit adipiscing bibendum est ultricies integer. Amet porttitor eget dolor morbi non arcu. Ut placerat orci nulla pellentesque dignissim. Nunc sed velit dignissim sodales ut eu sem integer. Est velit egestas dui id ornare arcu odio ut sem. Egestas integer eget aliquet nibh praesent. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Ultricies mi quis hendrerit dolor magna.

Non enim praesent elementum facilisis leo vel fringilla est. Orci sagittis eu volutpat odio facilisis mauris sit. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Nunc lobortis mattis aliquam faucibus. Duis ut diam quam nulla porttitor massa id. Sit amet mattis vulputate enim nulla. Scelerisque felis imperdiet proin fermentum leo vel orci. Sem nulla pharetra diam sit amet nisl. Pulvinar sapien et ligula ullamcorper malesuada. In aliquam sem fringilla ut morbi tincidunt augue interdum. Nisi est sit amet facilisis magna etiam tempor orci. Quisque id diam vel quam elementum pulvinar etiam. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Phasellus vestibulum lorem sed risus ultricies tristique. In iaculis nunc sed augue lacus viverra vitae. Amet luctus venenatis lectus magna.</p>
      </main>

    </div>
  );
}
