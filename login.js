const express = require("express");
const rbx = require("noblox.js");
const app = express();

app.use(express.static("public"));

const cookie = "ez"

app.use(express.static("public"));

async function(){=
  await rbx.setCookie(cookie)
}
