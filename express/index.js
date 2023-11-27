const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Home')
})

const usersData = [
    {
        id: 1,
        username: "raffa",
        password: "1234"
    },
    {
        id: 2,
        username: "Raphonkzy",
        password: "1234"
    }
]

app.get('/users', (req, res) => {
  res.json({
    status: 200,
    data: usersData.map(item => ({id: item.id, username: item.username}))
  })
})

app.post('/users', (req, res) => {
    const userData = req.body

    const response = usersData.filter(data => {
        if (data.username == userData.username && data.password == userData.password){
            return data
        }
    })

    let message;
    if (response.length == 1){
        message = "login success"
    }
    else {
        message = "login failed"
    }

    res.json({
        message: message
    })
})

app.listen(port, () => {
  console.log(`Running localhost:${port}`)
})