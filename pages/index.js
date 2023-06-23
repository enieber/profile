import React from "react";
import { Option } from '@marionebl/option';
import Image from 'next/image';
import { styled } from 'styled-components';
import { NextSeo } from 'next-seo';

import Icons from '../components/Icons/index.js';

const ContainerList = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 10vh;
  padding-bottom: 10vh;
  background: ${(props) => props.dark ? '#8445bc' : '#f7e9e9'};
  color: ${(props) => props.dark ? '#f7e9e9' : '#8445bc'};
`

const LinkContent = styled.a`
  text-decoration: none;
  color: #20134b;
  padding: 5px;
`

const ContainerHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 10vh;
  flex-direction: row;
  padding-top: 3vh;
  padding-bottom: 3vh;
  background: ${(props) => props.dark ? '#8445bc' : '#f7e9e9'};
  box-shadow: 0 0 .5em rgba(0, 0, 0, .5);
  color:  #20134b;
  justify-content: space-around;
`

const ContainerContent = styled.section`
  display: flex;
  padding: 10vh;
  flex-direction: ${(props) => props.row ? 'row' : 'column'};
  background: ${(props) => props.dark ? '#8445bc' : '#f7e9e9'};
  color: ${(props) => props.dark ? '#f7e9e9' : '#8445bc'};
  justify-content: space-between;
`

const ListNav = styled.nav`
  display: flex;
  align-items: center;
   
`;

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoTitle = styled.h1`
  padding-left: 10px;
  padding-right: 10px;
`;

const Container = styled.div`
  margin-top: 10vh;
`;

const ContainerFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;


function ContentList(props) {
  const { contents } = props;

  return (
        <ContainerList>
          {contents.map(content => {
            if (content.name.toLocaleLowerCase().includes("github")) {
              return (
                <div key={content.name}>
                  <LinkContent href={content.link} target="blank">
                    <Icons name='github' mode='only-icon'>
                     <span>{content.name}</span>
                    </Icons>
                  </LinkContent>
                </div>
              )
            }
            if (content.name.toLocaleLowerCase().includes("youtube")) {
              return (
              <div key={content.name}>
                <LinkContent href={content.link} target="blank">
                  <Icons name='youtube' mode='only-icon'>
                  <span>{content.name}</span>
                  </Icons>
                </LinkContent>

              </div>
              )
            }
            if (content.name.toLocaleLowerCase().includes("blog")) {
              return (
              <div key={content.name}>
                <LinkContent href={content.link} target="blank">
                  <Icons name='rss' mode='only-icon'>
                  <span>{content.name}</span>
                  </Icons>
                </LinkContent>
              </div>
              )
            }

            return (
              <div key={content.name}>
                <a href={content.link} target="blank">
                  {content.name}
                </a>
              </div>
            )
          })}
        </ContainerList>
  )
}

function Skills(props) {
  const { skills, description } = props;

  return (
    <>
        <ContainerContent dark id="about">
          <h2> About </h2>
          <p>{description}</p>
        </ContainerContent>
        <ContainerList dark>
                  {skills.map(skill => {
            return (
              <div key={skill}>
                <Icons name={skill} />
              </div>
            )
          })}
        </ContainerList>
    </>
  )
}


function Experiences(props) {
  const { experiences } = props;
  return (
        <ContainerContent dark id="experience">
          <h2>Experiences</h2>
          {experiences.map(experience => {
            return (
              <div key={experience.title}>
                <h3>{experience.title}</h3>
                <span>{experience.start}{experience.end ? ` - ${experience.end}` : ''}</span>
                <p>{experience.description}</p>
              </div>
            )
          })}
        </ContainerContent>
  )
}

function Freelances(props) {
  const { freelances } = props;
  return (
        <ContainerContent id="freelance">
          <h2>Freelance</h2>
          {freelances.map(freelance => {
            return (
              <div key={freelance.title}>
                <h3>{freelance.title}</h3>
                <p>{freelance.description}</p>
              </div>
            )
          })}
        </ContainerContent>

  )  
}


function Formations(props) {
  const { formations } = props;
  return (
        <ContainerContent dark id="formation">
          <h2>Formations</h2>
          {formations.map(formation => {
            return (
              <div key={formation.title}>
                <h3>{formation.title}</h3>
                <span>{formation.periodic}</span>
                <p>{formation.description}</p>
              </div>
            )
          })}
        </ContainerContent>


  )
}


function Footer(props) {
  const { name } = props;
  const year = new Date().getFullYear();
  return (
        <ContainerFooter>
          <span>{year}</span> <Icons name="cc" mode="only-icon" /> <span>{name}</span>
        </ContainerFooter>


  )
}

function Header(props) {
  const { name } = props;
  return (
    <ContainerHeader>
      <ContainerLogo>
        <Image src="images/logo.svg"
           width={50}
           height={50}
           alt={`image logo from ${name}`}
        />
        <LogoTitle>{name}</LogoTitle>
      </ContainerLogo>
      <ListNav>
        <LinkContent href="#about"> About</LinkContent>
        <LinkContent href="#experience">Experience</LinkContent>
        <LinkContent href="#freelance">Freelance</LinkContent>
          <LinkContent href="#formation"> Formation</LinkContent>
      </ListNav>
    </ContainerHeader>
  )
}

export default function Home() {
  const [data, setData] = React.useState(Option.from(undefined));
  const [error, setError] = React.useState(Option.from(undefined));

  React.useEffect(() => {
    fetch('/api/data')
      .then(result => result.json())
      .then(res => {
        setData(Option.from(res))
      })
      .catch(err => {
        console.log(err)
        setError(Option.from(err))
      })
  }, [])
  
  if (error.isSome()) {
    return (
      <div>
        <h1>Deu erro</h1>
        <p>{error.payload?.message}</p>
      </div>
    )
  }


  if (data.isSome()) {
    const {
      name,
      description,
      username,
      contents,
      skills,
      experiences,
      freelances,
      formations,
    } = data.payload;
    const [firstName, ...rest] = name.split(" ");
    const lastName = rest.join(" ");
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
            type: 'profile',
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
                alt: 'Profile Photo',
              },
            ],
          }}
        />
        <Header name={name} />
        <Skills skills={skills} description={description} />
        <ContentList contents={contents}/>
        <Experiences experiences={experiences} />
        <Freelances freelances={freelances} />
        <Formations formations={formations} />
        <Footer name={name} />
      </Container>
    );
  }

  return <div>Carregando</div>

} 

