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
} from '../../components/index.js'
import axios from 'axios'

export default function Home({ data, error }) {
  const errorOption = Option.from(error);
  const dataOption = Option.from(data);

 if (errorOption.isSome()) {
    return (
      <div>
        <h1>Deu erro</h1>
        <p>{errorOption.payload?.message}</p>
      </div>
    );
  }


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
    const [firstName, ...rest] = name?.split(" ");
    const lastName = rest.join ? rest.join(" ") : name;
    const url = 'https://profile-enieber.vercel.app';

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

  return <div>Carregando...</div>;
}

function return_url(context) {
  return process.env.BASE_URL
}

export const getStaticProps = async (context) => {
  const revalidateTime = 60 * 60 * 2; // 2h
  try {
    const baseUrl = return_url(context);
    const result = await axios.get(`${baseUrl}/api/data-pt`);

    console.log(result.data)
    return {
      props: {
        data: result.data,
      },
      revalidate: revalidateTime,
    }
  } catch (err) {
    console.warn(err)
    return {
      props: {
        error: err.message,
      },
      revalidate: revalidateTime,
    }
  }
}
