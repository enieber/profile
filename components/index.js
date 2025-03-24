import React from "react";
import Image from "next/image";
import { styled } from "styled-components";

import Icons from "./Icons/index.js";

export const ContainerList = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;    
  padding-top: 10vh;
  padding-bottom: 10vh;
  background: ${(props) => (props.dark ? "#8445bc" : "#f7e9e9")};
  color: ${(props) => (props.dark ? "#f7e9e9" : "#8445bc")};  
  @media print {
    padding-top: 0;    
    padding-bottom: 0;
    color: #20134b;
  }
`;

export const LinkContent = styled.a`
  text-decoration: none;
  color: #20134b;
  padding: 5px;
`;

export const ContainerHeaderMobile = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  max-width: 100vw;
  min-height: 10vh;
  flex-direction: row;
  flex-wrap: wrap;
  background: #f7e9e9;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
  color: #20134b;
  justify-content: space-around;
  align-items: center;
  @media print {
    display: none;
  }
`;

export const ContainerHeader = styled.header`
  display: ${({ scrolled }) => (scrolled < 300 ? "none" : "flex")};
  position: sticky;
  left: 0;
  max-width: 100vw;
  min-height: 10vh;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3vh;
  background: #f7e9e9;
  color: #20134b;
  justify-content: space-around;
`;

export const ContainerContent = styled.section`
  display: flex;
  padding: 10vh;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  background: ${(props) => (props.dark ? "#8445bc" : "#f7e9e9")};
  color: ${(props) => (props.dark ? "#f7e9e9" : "#8445bc")};
  justify-content: space-between;

  @media print {
    padding: 0;
    color: #20134b;
  }
`;

export const Circle = styled.div`
  @media print {
    display: none;
  }
  &:before {
    content: "";
    width: 30px;
    height: 30px;
    display: block;
    background: ${(props) => (!props.dark ? "#8445bc" : "#f7e9e9")};
    border-radius: 50%;
    margin-top: 15px;
  }

  &:after {
    content: "";
    display: ${(props) => (props.last ? "none" : "flex")};
    width: 10px;
    height: 40vh;
    background-color: rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-items: center;
    margin-top: -5px;
    margin-bottom: -20px;
    margin-left: 10px;
    background: ${(props) => (!props.dark ? "#8445bc" : "#f7e9e9")};
  }
`;

export const ContainerItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: row;
  @media print {
    border-top: 3px solid #20134b;
  }
`;

export const ListNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
`;

export const LogoTitle = styled.h1`
  padding-left: 10px;
  padding-right: 10px;
`;

export const Container = styled.div``;

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media print{
    display: none;
  }
`;

export function ContentList(props) {
  const { contents } = props;

  return (
    <ContainerContent>
      <h3 style={{textAlign: 'center'}}>Links</h3>    
      <ContainerList>
      {contents.map((content) => {
        return (
            <div key={content.name}>
              <LinkContent href={content.link} target="blank">
                <Icons name={content.name.toLocaleLowerCase()} mode="only-icon">
                  <span>{content.name}</span>
                </Icons>
              </LinkContent>
            </div>
          );
      })}
    </ContainerList>
    </ContainerContent>
        );
}

export function Skills(props) {
  const { skills, description } = props;

  return (
    <>
      <ContainerContent dark={true} id="about">
        <h2> About </h2>
        <p>{description}</p>
      </ContainerContent>
      <ContainerList dark={true}>
        {skills.map((skill) => {
          return (
            <div key={skill}>
              <Icons name={skill} />
            </div>
          );
        })}
      </ContainerList>
    </>
  );
}

export function Experiences(props) {
  const { experiences } = props;
  return (
    <ContainerContent dark={true} id="experience">
      <h2>Experiences</h2>
      {experiences.map((experience, index, array) => {
        return (
          <ContainerItem key={experience.title}>
            <Circle dark={true} last={!!(array[array.length - 1] === experience)} />
            <ContainerItemContent>
              <h3>{experience.title}</h3>
              <span>
                {experience.start}
                {experience.end ? ` - ${experience.end}` : ""}
              </span>
              <p>{experience.description}</p>
              <ContainerList dark={true}>
                {experience.skills.map((skill) => {
                  return (
                    <div key={skill}>
                      <Icons small name={skill} />
                    </div>
                  );
                })}
              </ContainerList>
            </ContainerItemContent>
          </ContainerItem>
        );
      })}
    </ContainerContent>
  );
}

export function Freelances(props) {
  const { freelances } = props;
  return (
    <ContainerContent id="freelance">
      <h2>Freelance</h2>
      {freelances.map((freelance, index, array) => {
        return (
          <ContainerItem key={freelance.title}>
            <Circle last={!!(array[array.length - 1] === freelance)} />
            <ContainerItemContent>
              <h3>{freelance.title}</h3>

              <p>{freelance.description}</p>
              <ContainerList>
                {freelance.skills.map((skill) => {
                  return (
                    <div key={skill}>
                      <Icons small name={skill} />
                    </div>
                  );
                })}
              </ContainerList>
            </ContainerItemContent>
          </ContainerItem>
        );
      })}
    </ContainerContent>
  );
}

export function Formations(props) {
  const { formations } = props;
  return (
    <ContainerContent dark={true} id="formation">
      <h2>Formations</h2>
      {formations.map((formation) => {
        return (
          <div key={formation.title}>
            <h3>{formation.title}</h3>
            <span>{formation.periodic}</span>
            <p>{formation.description}</p>
          </div>
        );
      })}
    </ContainerContent>
  );
}

export function Footer(props) {
  const { name } = props;
  const year = new Date().getFullYear();
  return (
    <ContainerFooter>
      <span>{year}</span> <Icons name="cc" mode="only-icon" />{" "}
      <span>{name}</span>
    </ContainerFooter>
  );
}

export function HeaderMobile(props) {
  const { name } = props;
  return (
    <ContainerHeaderMobile>
      <LinkContent href="#about"> About</LinkContent>
      <LinkContent href="#experience">Experience</LinkContent>
      <LinkContent href="#freelance">Freelance</LinkContent>
      <LinkContent href="#formation"> Formation</LinkContent>
    </ContainerHeaderMobile>
  );
}

export function Header(props) {
  const { name } = props;
  return (
    <ContainerHeader>
      <ContainerLogo>
        <Image
          src="images/logo.svg"
          width={50}
          height={50}
          alt={`image logo from ${name}`}
        />
        <LogoTitle>{name}</LogoTitle>
      </ContainerLogo>
    </ContainerHeader>
  );
}

