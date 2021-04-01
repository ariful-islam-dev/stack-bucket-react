
// Import Assests
import brnagLogo from '../../assets/brand-logo/brand-logo.svg'
import moreMenu from '../../assets/icons/more-menu.png'
import plusIcon from '../../assets/icons/plus-icon.png';
import editIcon from '../../assets/icons/edit-icon.png'
import deleteIcon from '../../assets/icons/delete-icon.png'
import printerIcon from '../../assets/icons/printer-icon.png'
import Nav from '../../components/nav';

function BucketPage (){
    return (
    <div>
        {/* Navigation Bar */}
		<Nav/>
        {/* Main content Body */}
        <main className="container __margin--ylg">
            {/* Add New Bucket Section */}
            <div className="section add-item __shadow--sm">
				<div className="add-item__relative">
					<div className="add-item__input">
						<img
							className="add-item__icon"
							src={plusIcon}
							alt="Create New Bucket"
						/>
						<input
							className="add-item__input-field"
							type="text"
							placeholder="Create New Bucket"
						/>
					</div>
				</div>
			</div>
            {/* Bucket List Table */}
            <div className="section table __shadow--sm">
				<table className="table__table">
					<thead className="table__thead">
						<tr>
							<th>Bucket</th>
							<th>Created</th>
							<th>Costs</th>
							<th className="align-right">Action</th>
						</tr>
					</thead>
					<tbody className="table__tbody">
						<tr>
							<th>Holiday Shopping</th>
							<th className="text-secondary">4 April 2020</th>
							<th>4850 BDT</th>
							<th className="align-right">
								<button className="icon-button">
									<img
										className="icon-button__icon"
										src={editIcon}
										alt="Edit"
									/>
								</button>
								<button className="icon-button">
									<img
										className="icon-button__icon"
										src={deleteIcon}
										alt="delete"
									/>
								</button>
								<button className="icon-button">
									<img
										className="icon-button__icon"
										src={printerIcon}
										alt="Printer"
									/>
								</button>
							</th>
						</tr>
						<tr>
							<th>Holiday Shopping</th>
							<th className="text-secondary">4 April 2020</th>
							<th>4850 BDT</th>
							<th className="align-right">
								<button className="icon-button">
									<img
										className="icon-button__icon"
										src={editIcon}
										alt="Edit"
									/>
								</button>
								<button className="icon-button">
									<img
										className="icon-button__icon"
										src={deleteIcon}
										alt="delete"
									/>
								</button>
								<button className="icon-button">
									<img
										className="icon-button__icon"
										src={printerIcon}
										alt="Printer"
									/>
								</button>
							</th>
						</tr>
						<tr>
							<th>Holiday Shopping</th>
							<th className="text-secondary">4 April 2020</th>
							<th>4850 BDT</th>
							<th className="align-right">
								<button className="icon-button">
									<img
										className="icon-button__icon"
										src={editIcon}
										alt="Edit"
									/>
								</button>
								<button className="icon-button">
									<img
										className="icon-button__icon"
										src={deleteIcon}
										alt="delete"
									/>
								</button>
								<button className="icon-button">
									<img
										className="icon-button__icon"
										src={printerIcon}
										alt="Printer"
									/>
								</button>
							</th>
						</tr>
					</tbody>
				</table>
			</div>
        </main>
    </div>
    )
}

export default BucketPage