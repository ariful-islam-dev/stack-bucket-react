import { Router, Redirect } from "@reach/router"
import NotFound from "../pages/404"
import BucketDetailPage from "../pages/bucket-detail"
import BucketPage from "../pages/buckets"

const bucketsRedirect = ()=>{

}

function AppRouter() {
    return (
        <Router>
            <Redirect from="/buckets" to="/" noThrow />
            <BucketPage path="/" />
            
            <BucketDetailPage path="/buckets/:bucketId" />
            <NotFound default />
        </Router>
    )
}
export default AppRouter;