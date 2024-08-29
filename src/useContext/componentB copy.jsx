import { useContext } from "react"
import {Context} from "./usecontext"
export default
function C (){
let user = useContext(Context)
    return(
        <div>
{user}
        </div>
    )
}