import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Card, Grid, Text, Link } from "@nextui-org/react";

export default function index() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Class 9 Guide</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo1.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className='mySpan'>Welcome To Class 9 Guide!</span>
        </h1>
        <div className={styles.imageWrap}>
          <img className={styles.myImg} src="/Kensri.jpg" width={300} height={150} alt="class-9-guide" />
        </div>

        <div>
          <div>
            <h1 className={styles.h1}>Subjects</h1>
            <p>Click on this button for the guide on the subjects!</p>
            <button className={styles.btn} onClick={event => window.location.href = `/subjects`}>Read More</button>
          </div>
        </div>

        <div style={{ padding: "3rem" }}>
          <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
              <img
                alt="logo"
                src="/logo1.png"
                width="45px"
                height="45px"
              />
              <Grid.Container css={{ pl: "$8" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Chat App
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$6" }}>
              <Text>
                Chat App For The Students To Talk About Studies In Their user-to-user End Encrypted Personal Chat :P
              </Text>
            </Card.Body>
            <Card.Footer>
              <Link
                icon
                color="primary"
                target="_blank"
                href="https://school-chat-app-vibe.netlify.app"
              >
                Click Here.
              </Link>
            </Card.Footer>
          </Card>
        </div>
      </main>
    </div>
  )
}
