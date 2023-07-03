import React from "react";
import { Option } from "@marionebl/option";
import Image from "next/image";
import { NextSeo } from "next-seo";
import {
  Header,
  HeaderMobile,
  Skills,
  ContentList,
  Experiences,
  Formations,
  Freelances,
  Footer,
  Container,
} from '../components/index.js'

export default function Home({ data, error }) {
  const errorOption = Option.from(error);
  const dataOption = Option.from(data);
 
  if (dataOption.isSome()) {
    const {
      name,
      description,
      username,
      contents,
      skills,
      experiences,
      freelances,
      formations,
    } = dataOption.payload;
    const [firstName, ...rest] = name.split(" ");
    const lastName = rest.join(" ");
    const url = "https://profile-enieber.vercel.app";

    return (
      <Container>
        <NextSeo
          title={`Profile - ${name}`}
          description={description}
          openGraph={{
            url,
            title: `Profile - ${name}`,
            description: description,
            siteName: name,
            type: "profile",
            profile: {
              firstName,
              lastName,
              username,
            },
            images: [
              {
                url: `${url}/logo.svg`,
                width: 50,
                height: 50,
                alt: "Profile Photo",
              },
            ],
          }}
        />
        <Header name={name} />
        <HeaderMobile name={name} />

        <Skills skills={skills} description={description} />
        <ContentList contents={contents} />
        <Experiences experiences={experiences} />
        <Freelances freelances={freelances} />
        <Formations formations={formations} />
        <Footer name={name} />
      </Container>
    );
  }

 if (errorOption.isSome()) {
    return (
      <div>
        <h1>Deu erro</h1>
        <p>{errorOption.payload?.message}</p>
      </div>
    );
  }


  return <div>Carregando...</div>;
}

export const getStaticProps = async (context) => {
  const revalidateTime = 60 * 60 * 12; // 12h
  try {
    const baseUrl = process.env.VERCEL_URL;
    const res = await fetch(`${baseUrl}/api/data`);
    const result = await res.json()
    return {
      props: {
        data: result,
      },
      revalidate: revalidateTime,
    }
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
      revalidate: revalidateTime,
    }
  }
}
