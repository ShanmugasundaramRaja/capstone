import axios from "axios";
import React from "react";

export default function Fav() {
  var axios = require("axios");

  var config = {
    method: "get",
    url: "https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=pizza%20near%20par&language=fr&key=AIzaSyDUHuPPzwN-8fCOaw-hhtpZkvs9Stnp83s",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  return <></>;
}
