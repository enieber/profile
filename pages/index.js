import React from "react";
import { Option } from '@marionebl/option';
import Icons from '../components/Icons/index.js'

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
      contents,
      skills,
      experiences,
      freelances,
      formations,
    } = data.payload;

    return (
      <div>
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      
        <div>
          {contents.map(content => {
            return (
              <div key={content.name}>
                <a href={content.link} target="blank">
                  {content.name}
                </a>
              </div>
            )
          })}
        </div>
       
        <div>
           {skills.map(skill => {
            return (
              <div key={skill}>
                <Icons name={skill} />
              </div>
            )
          })}
        </div>

        <div>
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
        </div>

        <div>
          <h2>Freelance</h2>
          {freelances.map(freelance => {
            return (
              <div key={freelance.title}>
                <h3>{freelance.title}</h3>
                <p>{freelance.description}</p>
              </div>
            )
          })}
        </div>


        <div>
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
        </div>


      </div>
    );
  }

  return <div>Carregando</div>

} 

