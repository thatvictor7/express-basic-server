const express = require('express')
const app = express()

// data
const characters = require('./data.json')

app.put('/characters/:id', (req,res) => {
  const id = req.params.id
  const body = req.body

  console.log(body)
  console.log(id)
  //find correct resource by id
  //replace whats in current character array with body
  const updatedCharacters = characters.map(character => {
    if (character.id == id) {
      return body
    }
    return character
  })
  res.json({characters: updatedCharacters})
})

app.delete('/characters/:id', (req,res)=>{
  const id = req.params.id

  // const updatedCharacters = characters.map(character => {
  //   if (character.id !== id) {
  //     return body
  //   }
  //   return character
  // })
  // res.json({characters: updatedCharacters})
  const survivors = characters.filter(character => {
    return character.id != id
  })
  res.json({characters: survivors})
})


app.get('/', (req, res) => {
    res.send("🦖")
  })

app.get('/characters', (req,res) => {
  res.json({characters: characters})
})

app.get('/characters/:id', (req,res) => {
  // res.json({character:  })
  const id = req.params.id
  for (var i = 0; i < characters.length; i++) {
    if (characters[i].id == id) {
    }
    res.json({character: characters[i]})
  }
  // res.json({characters.id})
})

app.listen(4000, () => console.log('server running on 4000'))
