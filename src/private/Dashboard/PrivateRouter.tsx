import { Route } from "react-router-dom"
import { Dashboard } from "./Dashboard"
import { RoutesWithNotFound } from "../../components/RoutesWithNotFound/RoutesWithNotFound"

export const PrivateRouter = () => {
    return (
        <RoutesWithNotFound>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/about" element={<Dashboard />}></Route>
            <Route path="/user" element={<Dashboard />}></Route>
        </RoutesWithNotFound>
    )
}