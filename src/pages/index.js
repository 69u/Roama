import Head from 'next/head';
import dynamic from 'next/dynamic';

import { useState, useEffect } from "react";

import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import Button from '@components/Button';
const LocationButton = dynamic(() => import('@components/LocationButton'), { ssr: false });

const DEFAULT_CENTER = [-31.9523, 115.8613];

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
          <div className="flex-1">
            <Map className="w-[95vw] mx-auto" center={DEFAULT_CENTER} zoom={12}>
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
                  <LocationButton />
                </>
              )}
            </Map>
          </div>

          <div className="mt-8 text-center">
            <Button href="https://github.com/69u/Roama.git">View on GitHub</Button>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}