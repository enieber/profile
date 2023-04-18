// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Spice from "../node_modules/@greenlabs/ppx-spice/src/rescript/Spice.bs.js";
import * as React from "react";
import * as Js_dict from "../node_modules/rescript/lib/es6/js_dict.js";
import * as Js_json from "../node_modules/rescript/lib/es6/js_json.js";
import * as Belt_Option from "../node_modules/rescript/lib/es6/belt_Option.js";

function profile_encode(v) {
  return Js_dict.fromArray(Spice.filterOptional([[
                    "name",
                    false,
                    Spice.stringToJson(v.name)
                  ]]));
}

function profile_decode(v) {
  var dict = Js_json.classify(v);
  if (typeof dict === "number") {
    return Spice.error(undefined, "Not an object", v);
  }
  if (dict.TAG !== /* JSONObject */2) {
    return Spice.error(undefined, "Not an object", v);
  }
  var name = Spice.stringFromJson(Belt_Option.getWithDefault(Js_dict.get(dict._0, "name"), null));
  if (name.TAG === /* Ok */0) {
    return {
            TAG: /* Ok */0,
            _0: {
              name: name._0
            }
          };
  }
  var e = name._0;
  return {
          TAG: /* Error */1,
          _0: {
            path: ".name" + e.path,
            message: e.message,
            value: e.value
          }
        };
}

async function getData(param) {
  var response = await fetch("/api/data");
  var profileData = await response.json();
  var profile = profile_decode(profileData);
  console.log(profile);
  return profile;
}

function App(Props) {
  var data = getData(undefined);
  console.log(data);
  return React.createElement("div", {
              className: "App"
            }, React.createElement("h1", undefined, "Bom dia"));
}

var make = App;

export {
  profile_encode ,
  profile_decode ,
  getData ,
  make ,
}
/* react Not a pure module */
