import { databaseGames, Game } from '../db/index'

// READ
function getAllGames() {
  return databaseGames
}

//---------
function getGame(id: string) {
  const gameFound = databaseGames.find(game => game.id === id)

  return gameFound
}
//---------

// CREATE
function addGame({ name, valor, multiplayer, reviews }: Game) {
  const newGame: Game = {
    name, //Js permite omitir se os valore da direita e esquerda sao os mesmos
    valor: valor,
    multiplayer: multiplayer,
    reviews: reviews
  }

  if (!newGame?.id) {
    gerarId(newGame)
  }

  // -----------
  if (!newGame.name) {
    throw new Error('Jogo precisa de um nome')
  }

  // Se algum jogo dentro do databaseGames tiver nome igual ao name que esta tentando criar
  if (databaseGames.some(games => games.name === name)) {
    throw new Error('Jogo já está na lista')
  }

  // ------------

  databaseGames.push(newGame)

  return newGame
}
// ------------
// UPDATE
function updateGame(id, { name, valor, multiplayer, reviews }: Game) {
  // acha jogo antigo
  const game = getGame(id)

  const index = databaseGames.findIndex(game => game.id === id)

  const updatedGame: Game = {
    id,
    name: name || game.name,
    valor: valor || game.valor,
    multiplayer: multiplayer || game.multiplayer,
    reviews: reviews || game.reviews
  }

  databaseGames[index] = updatedGame

  return databaseGames[index]
}
// -----------

// DELETE
function deleteGame(id: string) {
  const index = databaseGames.findIndex(game => game.id === id)

  if (index < 0) {
    throw new Error('Jogo não encontrado')
  }

  return databaseGames.splice(index, 1)
}
// -----------

function gerarId(jogo) {
  jogo.id = Math.random().toString(32).slice(2)
}

export { getAllGames, addGame, updateGame, deleteGame, getGame }
