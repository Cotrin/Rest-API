import { Router } from 'express'
import { addGame, deleteGame, getAllGames, getGame, updateGame } from './controllers/games.controller'


const routes = Router()

// faz rota GET na home que manda um 'oi'
routes.get('/', (req, res) => {
  res.json('Dummy test server')
})

routes.get('/games', (req, res) => {
  const allGames = getAllGames()
  res.json(allGames)
})

// -------------
routes.get('/games/:id', (req, res) => {
  const { id } = req.params

  const game = getGame(id)  

  if (!game) {
    return res.status(404).json({message : 'Id do jogo não encontrado'})
  }
 
  res.json(game)
})

// ------------

routes.post('/addGame', (req, res) => {
  // pegar as infos do jogo
  const { name, valor, multiplayer, reviews } = req.body
  
  // chamar a funcao de add game
  try {
    const addedGame = addGame({ multiplayer, name, valor, reviews })

    // retorna o jogo criado
    res.status(201).json(addedGame)
    
  } catch (error) {
    return res.status(409).json({error: error.message})
  }

})

// ----------------
routes.put('/games/:id', (req, res) => {
  const { id } = req.params

  const { name, valor, multiplayer, reviews } = req.body
  
  const updatedGame = updateGame(id, {name, valor, multiplayer, reviews})

  res.json(updatedGame)

})  
// -----------------

// -------------

routes.delete('/games/:id', (req, res) => {
  const { id } = req.params

  try {
    deleteGame(id)
    
  } catch (error) {
    return res.status(404).json({error: error.message})
  }

  res.json({message: 'Jogo deletado com Sucesso'})
})
// -------------- ????????????



export { routes }
