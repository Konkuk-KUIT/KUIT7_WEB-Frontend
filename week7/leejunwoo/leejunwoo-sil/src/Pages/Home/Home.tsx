import { Link } from "react-router-dom"
import Foodcard from "../../Components/Foodcard"

export const Home = () => {
  return (
    <div>Home
      <Foodcard/>
      <Foodcard/>
      <Foodcard/>
      <Foodcard/>
      <Link to={"page1"}>page1 으로 이동하기</Link>
    </div>
  )
}
