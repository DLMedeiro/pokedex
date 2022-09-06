# Pokedex Project
Practice with React components and properties

## Launching the application

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Project Setup

### App
This should just render a single __Pokedex__.

### Pokecard

Shows a single Pokemon, with their name, image, and type.

### Pokedex
Is provided, via props, an array of objects describing different pokemon, and renders a sequence of __Pokecard__ components.

Use the defaultProps feature of __Pokedex__ to provide a default list of Pokemon characters to show. You can use this list for a good set of defaults:

```
[
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
]
```

For each pokemon, their image source should be: 
``` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png. ```
