open Fetch
open Js.Promise2

type content = {
  neme: string,
  link: string,
};

type experience = {
  start: string,
  end: string,
  title: string,
  description: string,
};

type freelance = {
  title: string,
  description: string,
};

type formation = {
 locale: string,
 title: string,
 periodic: string,
 description: string,
};

type profile = {
  name: string,
  description: string,
 skills: array<string>,
  experiences: array<experience>,
 formations: array<formation>
};

type skill = string;

module Codecs = {

  let experience = Jzon.object4(
    ({ start, title, end, description }) => ( start,  title,  end,   description ),
    (( start, title, end, description )) => { start,  title,  end,   description }->Ok,
  
    Jzon.field("start", Jzon.string),
    Jzon.field("title", Jzon.string), 
    Jzon.field("end", Jzon.string),
    Jzon.field("description", Jzon.string),
  );

  let formations = Jzon.object4(
    ({ locale, title, periodic, description }) => ( locale, title, periodic, description ),
    (( locale, title, periodic, description )) => { locale, title, periodic, description }->Ok,
    
    Jzon.field("locale", Jzon.string),
    Jzon.field("title", Jzon.string),
    Jzon.field("periodic", Jzon.string),
    Jzon.field("description", Jzon.string),
  );
/*  
  let freelance = Jzon.object2(
    ({ title, description  }) => ( title,  description ),
    (( title,  description )) => { title,  description }->Ok,
  
    Jzon.field("title", Jzon.string),
    Jzon.field("description", Jzon.string),
  ); 
  
  let content = Jzon.object2(
    ({ name, link }) => (name, link),
    ((name, link)) => { name,link }->Ok,

    Jzon.field("name", Jzon.string),
    Jzon.field("link", Jzon.string),
  ); 
  */ 
  let profile = Jzon.object5(
    ({ name, description, skills, experiences, formations }) => 
    (( name, description, skills, experiences, formations )),  
    
    (( name, description, skills, experiences, formations  )) => {
       name, description, skills, experiences, formations  }->Ok,

    Jzon.field("name", Jzon.string),
    Jzon.field("description", Jzon.string),

    Jzon.field("skills", Jzon.array(Jzon.string)),
    Jzon.field("experiences", Jzon.array(experience)),
    Jzon.field("formations", Jzon.array(formations)),

  )
}

let getData = async ()   => {
  let response = await Fetch.get("/api/data")
  let profileData = await response->Fetch.Response.json
  let json = profileData->Jzon.decodeWith(Codecs.profile)
  Js.log(json)
  json
}


@react.component
let make = () => {
  let data = getData()
  Js.log(data)
    <div className="App">
      <h1>{"Bom dia"->React.string}</h1>
    </div>
}
