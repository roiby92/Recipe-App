const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib')

const URL = `https://recipes-goodness.herokuapp.com/recipes/`

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/sanity', function (req, res) {
    res.send(`OK`)
})


app.get('/recipes/:ingredient', function (req, res) {
    const ingredient = req.params.ingredient
    let recipes 
    urllib.request(`${URL}${ingredient}`, function (err, response) {
        recipes = JSON.parse(response.toString()).results
        .map(r => {return{
            title: r.title,
            thumbnail: r.thumbnail,
            href: r.href,
            ingredients: r.ingredients
        }})
        res.send(recipes)
    })
})





const port = 8080
app.listen(port, function () {
    console.log(`Server is runing on port ${port}`);
})