const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const DataAccessObject = require("./dataAccessObject");
const Comment = require("./comment");

const app = express();
const port = process.env.PORT || 3001;

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/generateHotTake", async (_, res) => {
  const prompt = "generate a random hot take.";
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 1,
    prompt,
  });

  res.send(completion.data.choices[0].text);
});

const dataAccessObject = new DataAccessObject("./database.sqlite3");
const comment = new Comment(dataAccessObject);

comment.createTable().catch((error) => {
  console.log(`Error: ${JSON.stringify(error)}`);
});

app.post("/createComment", function (request, response) {
  const { body } = request;
  comment.createComment(body).then((result) => {
    response.send(result);
  });
});

app.get("/getComment", function (request, response) {
  const { id } = request.query;
  comment.getComment(Number(id)).then((result) => {
    response.send(result);
  });
});

app.get("/getComments", function (request, response) {
  comment.getComments().then((result) => {
    response.send(result);
  });
});

app.delete("/deleteComment", function (request, response) {
  const { id } = request.query;
  comment.deleteComment(Number(id)).then((result) => {
    response.send(result);
  });
});

app.delete("/deleteComments", function (request, response) {
  comment.deleteComments().then((result) => {
    response.send(result);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  const rootDir = __dirname.replace("/server", "");
  response.sendFile(`${rootDir}/src/index.html`);
});
