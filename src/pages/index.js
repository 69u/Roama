import Head from 'next/head';

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import Button from '@components/Button';

import styles from '@styles/Home.module.scss';

const DEFAULT_CENTER = [-31.9523, 115.8613]

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Roama 🦘</title>
        <meta name="description" content="Create mapping apps with Roama 🦘" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Container>
         {/* <h1 className={styles.title}>
            Roama 🦘
          </h1> */}

          <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={12}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={DEFAULT_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>

          {/*<p className={styles.description}>
            <code className={styles.code}>yarn create next-app -e https://github.com/colbyfayock/next-leaflet-starter</code>
            </p> */}

          <p className={styles.view}>
            <Button href="https://github.com/69u/Roama">Vew on GitHub</Button>
          </p>
        </Container>
      </Section>
    </Layout>
  )
}
