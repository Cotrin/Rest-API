export type Game = {
  id?: string
  name: string
  valor: number
  multiplayer: boolean
  reviews?: {
    nota: number
    qtdUsuarios: number
  }
}

export const databaseGames:Game[] = [
  {
    id: Math.random().toString(32).slice(2),
    name: 'Vampire Survivors',
    valor: 10.0,
    multiplayer: false,
    reviews: {
      nota: 9.1,
      qtdUsuarios: 8000
    }
  },
  {
    id: Math.random().toString(32).slice(2),
    name: 'Destiny 2',
    valor: 160.0,
    multiplayer: true,
    reviews: {
      nota: 9.5,
      qtdUsuarios: 9500
    }
  },
  {
    id: Math.random().toString(32).slice(2),
    name: 'Warframe',
    valor: 0.0,
    multiplayer: true,
    reviews: {
      nota: 9.8,
      qtdUsuarios: 7800
    }
  },
  {
    id: Math.random().toString(32).slice(2),
    name: 'Evolve',
    valor: 110.0,
    multiplayer: false,
    reviews: {
      nota: 1.3,
      qtdUsuarios: 20
    }
  }
]
