import "./header.css"

interface header {
    onClick?: () => void;
}

function Header(props:header) {
    const {onClick} = props
  return (
    <header>
        <h1>Where in the world?</h1>
        <button onClick={onClick}>
            <img style={{width:16,height:16}} src="/src/assets/moon.svg" alt="ss" />
            <p>Dark Mode</p>
        </button>
    </header>
  )
}

export default Header
