import { Link } from "react-router-dom"
import "./navigation.css"

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link to={"/private"}>
            Private
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation