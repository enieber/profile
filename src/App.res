open Fetch
open Js.Promise2

@spice
type profile = {
  name: string,
}

let getData = async ()   => {
  let response = await Fetch.get("/api/data")
  let profileData = await response->Fetch.Response.json
  let profile: Belt.Result.t<profile, Spice.decodeError> = profileData->profile_decode
  Js.log(profile)
  profile
}

@react.component
let make = () => {
  getData
    ->Js.Promise.then_((profile) => {
       <div className="App">
          <h1>{"Bom dia"->React.string}</h1>
          <p>{profile.name}</p>
      </div>
    })
    ->Js.Promise.catch(err => {
      
      <div>{"Deu ruim"->React.string}</div>
    })
}
