const path = require('path')

const express = require('express');
const app = express();

const dogBank = require("./dogBank");

app.use(require('morgan')('dev'))

app.use('/assets', express.static(path.join(__dirname, 'assets')))


const nav = () => {
    return `
      <nav>  
        <a href="/">HOME</a>
        <a href="/doggos/1">Basset Hounds</a>
        <a href="/doggos/2">Whippets</a>
        <a href="/doggos/3">Bull Dogs</a>
        <a href="/doggos/4">Labs</a>
      </nav>
  `
}

app.get('/', (req, res) => {
  dogBank.list()
  
  const html = `<!DOCTYPE html>
  <html>
    <head>  
      <title>Louis Dog Page</title>
      <link rel='stylesheet' href='/assets/styles.css'>
      </head>
        <body>
        ${nav()}
          <h1>Louis Dog Club!</h1>
            <div>
              <h3>Welcome to my page about my favorite types of dogs! Click the links up top for some info about my favorite types of dogs!</h3>
              </div>
              <div>
                <img class='home-photo' src='https://images.unsplash.com/photo-1546238232-20216dec9f72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1768&q=80' alt='cute puppies'>
              </div>
        </body>
  </html>`
  res.send(html);
});


app.get('/doggos/:id', (req, res) => {
  const id = req.params.id;
  const doggos = dogBank.find(id);
  if (!doggos.id) {
    throw `This is a bad page. No cute dogs :(`
  } else {
  res.send(`
  <html>
    <head>  
      <title>Louis Dog Page</title>
      <link rel='stylesheet' href='/assets/styles.css'>
      </head>
      <body>
        ${nav()}
        <h1>Louis Dog Club!</h1>
        <h1>${doggos.id}. ${doggos.type}</h1> 
          <div>
            <h3>Size: ${doggos.size}</h3>
            </div>  
          <div>
             <h3>About: ${doggos.about}</h3>
          </div>
          <div>
          <img class="dog-photo"src=${doggos.imgUrl}>
          </div>
      </body>
  </html>
  `);
}});




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`I am listening on port ${port}`));