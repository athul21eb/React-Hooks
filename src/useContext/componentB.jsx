import { useContext } from "react"
import {Context} from "./usecontext"
import C from "./componentB copy"
export default
function B(){
let user = useContext(Context)
    return(
        <div>
{user}
<C/>
        </div>
    )
}