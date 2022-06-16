
const imgBase = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

const Pokecards = ({id, name, type, base_experience}) => {
    let imgSrc = `${imgBase}${id}.png`
    
    return(
        <div>
            <h4>{name}</h4>
            <img src={imgSrc} alt="poke img"></img>
            <h5>Type: {type}</h5>
            <h5>EXP: {base_experience}</h5>
        </div>
    )
}

export default Pokecards;