
// Import Assests

import Nav from '../../components/nav';
import Create from '../../components/create';
import Table from '../../components/table';

function BucketPage (){
    return (
    <div>
        {/* Navigation Bar */}
		<Nav/>
        {/* Main content Body */}
        <main className="container __margin--ylg">
            {/* Add New Bucket Section */}
           <Create label="Create New Item"/>
            {/* Bucket List Table */}
            <div className="section table __shadow--sm">
				<Table/>
			</div>
        </main>
    </div>
    )
}

export default BucketPage