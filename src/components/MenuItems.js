import appetizers from './datacopy.js'

const MenuItems = () => {
    let renderlist = appetizers.map( appetizers=>
      <li>
        <p>{appetizers.name}</p>
        <p>{appetizers.price}</p>
        <p>{appetizers.description}</p>
      </li>   
    )


    return (
        <>
        <h2>These are the menu items</h2>
        <ul>{renderlist}</ul>

        </>
        
    )
}

export default MenuItems