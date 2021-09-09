import React from 'react'
import Breadcrumb from '../../Components/Breadcrumb'
import ActionBtn from './ActionBtn'
import NavTab from './navTab'
import SearchBar from './SearchBar'

export default function InnerPage() {
    return (
        <div class="innerconts">
			<Breadcrumb label="Telephone Number Management" />
			<div class="tablinks">
				<NavTab actionTN="Action on TN" order="Orders" bulkAction="Bulk Action" bulkTransaction="Bulk Transaction" />
				<div class="tab-content">
				  	<div class="tab-pane fade show active" id="actiontn">
					  	<div class="topfilter">
					  		<SearchBar label="Search" />
					  		<div class="btns float-right">
                                  <ActionBtn classBtn="tkaction cbtn" dataToggle="modal" dataTarget="#take-action" label="Take an Action" />
                                  <ActionBtn classBtn="optbtn rbtn" dataToggle="tooltip" dataPlacement="top" title="Reset" />
                                  <ActionBtn classBtn="optbtn rbtn" dataToggle="tooltip" dataPlacement="top" title="Reset" />
					  			{/* <a href="#" class="tkaction cbtn" data-toggle="modal" data-target="#take-action">Take an Action</a> */}
					  			{/* <a href="#" class="optbtn rbtn" data-toggle="tooltip" data-placement="top" title="Reset"></a> */}
					  			<span data-toggle="modal" data-target="#addtn"><a href="#" class="optbtn addbtn" data-toggle="tooltip" data-placement="top" title="Add"></a></span>
					  			<a class="optbtn uploadbtn" data-toggle="tooltip" data-placement="top" title="Upload"></a>
					  			<a href="#" class="optbtn dbtn" data-toggle="tooltip" data-placement="top" title="Download"></a>
					  			<a class="optbtn fbtn" data-toggle="tooltip" data-placement="top" title="Filter"></a>
					  		</div>
					  	</div>
					  	<div class="datatable">
							<ul class="tbhead">
								<li class="tbcol1">
									<div class="nkcheckbox">
										<input type="checkbox" class="checkboxbtn" id="allopt" />
		                       			<label for="allopt"></label>
									</div>
								</li>
								<li class="tbcol2"><h5>Number</h5></li>
								<li class="tbcol3"><h5>Category</h5></li>
								<li class="tbcol4"><h5>Service Provider</h5></li>
								<li class="tbcol5"><h5>Associated Resources</h5></li>
								<li class="tbcol6"><h5>State</h5></li>
								<li class="tbcol7"><h5>Action</h5></li>
							</ul>
							<ul>
								<li class="tbcol1">
									<div class="nkcheckbox">
										<input type="checkbox" class="checkboxbtn" id="opt1" />
		                       			<label for="opt1"></label>
									</div>
								</li>
								<li class="tbcol2"><div class="mlabel">Number</div><p data-toggle="tooltip" data-placement="top" title="1234567890">1234567890</p></li>
								<li class="tbcol3"><div class="mlabel">Category</div><p data-toggle="tooltip" data-placement="top" title="Postpaid">Postpaid</p></li>
								<li class="tbcol4"><div class="mlabel">Service Provider</div><p data-toggle="tooltip" data-placement="top" title="Airtel">Airtel</p></li>
								<li class="tbcol5"><div class="mlabel">Associated Resources</div><p data-toggle="tooltip" data-placement="top" title="Lorem Ipsum">Lorem Ipsum</p></li>
								<li class="tbcol6"><div class="mlabel">State</div><a class="remindbtn" href="#" data-toggle="tooltip" data-placement="top" title="State">State</a></li>
								<li class="tbcol7"><div class="mlabel">Action</div>
									<div class="actopt"><a class="showbtn" href="#" data-toggle="tooltip" data-placement="top" title="Action"></a></div>
								</li>
							</ul>
							<ul>
								<li class="tbcol1">
									<div class="nkcheckbox">
										<input type="checkbox" class="checkboxbtn" id="opt2" />
		                       			<label for="opt2"></label>
									</div>
								</li>
								<li class="tbcol2"><div class="mlabel">Number</div><p data-toggle="tooltip" data-placement="top" title="1234567890">1234567890</p></li>
								<li class="tbcol3"><div class="mlabel">Category</div><p data-toggle="tooltip" data-placement="top" title="Postpaid">Postpaid</p></li>
								<li class="tbcol4"><div class="mlabel">Service Provider</div><p data-toggle="tooltip" data-placement="top" title="Airtel">Airtel</p></li>
								<li class="tbcol5"><div class="mlabel">Associated Resources</div><p data-toggle="tooltip" data-placement="top" title="Lorem Ipsum">Lorem Ipsum</p></li>
								<li class="tbcol6"><div class="mlabel">State</div><a class="remindbtn" href="#" data-toggle="tooltip" data-placement="top" title="State">State</a></li>
								<li class="tbcol7"><div class="mlabel">Action</div>
									<div class="actopt"><a class="showbtn" href="#" data-toggle="tooltip" data-placement="top" title="Action"></a></div>
								</li>
							</ul>
							<ul>
								<li class="tbcol1">
									<div class="nkcheckbox">
										<input type="checkbox" class="checkboxbtn" id="opt3" />
		                       			<label for="opt3"></label>
									</div>
								</li>
								<li class="tbcol2"><div class="mlabel">Number</div><p data-toggle="tooltip" data-placement="top" title="1234567890">1234567890</p></li>
								<li class="tbcol3"><div class="mlabel">Category</div><p data-toggle="tooltip" data-placement="top" title="Postpaid">Postpaid</p></li>
								<li class="tbcol4"><div class="mlabel">Service Provider</div><p data-toggle="tooltip" data-placement="top" title="Airtel">Airtel</p></li>
								<li class="tbcol5"><div class="mlabel">Associated Resources</div><p data-toggle="tooltip" data-placement="top" title="Lorem Ipsum">Lorem Ipsum</p></li>
								<li class="tbcol6"><div class="mlabel">State</div><a class="remindbtn" href="#" data-toggle="tooltip" data-placement="top" title="State">State</a></li>
								<li class="tbcol7"><div class="mlabel">Action</div>
									<div class="actopt"><a class="showbtn" href="#" data-toggle="tooltip" data-placement="top" title="Action"></a></div>
								</li>
							</ul>
							<ul>
								<li class="tbcol1">
									<div class="nkcheckbox">
										<input type="checkbox" class="checkboxbtn" id="opt4" />
		                       			<label for="opt4"></label>
									</div>
								</li>
								<li class="tbcol2"><div class="mlabel">Number</div><p data-toggle="tooltip" data-placement="top" title="1234567890">1234567890</p></li>
								<li class="tbcol3"><div class="mlabel">Category</div><p data-toggle="tooltip" data-placement="top" title="Postpaid">Postpaid</p></li>
								<li class="tbcol4"><div class="mlabel">Service Provider</div><p data-toggle="tooltip" data-placement="top" title="Airtel">Airtel</p></li>
								<li class="tbcol5"><div class="mlabel">Associated Resources</div><p data-toggle="tooltip" data-placement="top" title="Lorem Ipsum">Lorem Ipsum</p></li>
								<li class="tbcol6"><div class="mlabel">State</div><a class="remindbtn" href="#" data-toggle="tooltip" data-placement="top" title="State">State</a></li>
								<li class="tbcol7"><div class="mlabel">Action</div>
									<div class="actopt"><a class="showbtn" href="#" data-toggle="tooltip" data-placement="top" title="Action"></a></div>
									</li>
							</ul>
							<ul>
								<li class="tbcol1">
									<div class="nkcheckbox">
										<input type="checkbox" class="checkboxbtn" id="opt5" />
		                       			<label for="opt5"></label>
									</div>
								</li>
								<li class="tbcol2"><div class="mlabel">Number</div><p data-toggle="tooltip" data-placement="top" title="1234567890">1234567890</p></li>
								<li class="tbcol3"><div class="mlabel">Category</div><p data-toggle="tooltip" data-placement="top" title="Postpaid">Postpaid</p></li>
								<li class="tbcol4"><div class="mlabel">Service Provider</div><p data-toggle="tooltip" data-placement="top" title="Airtel">Airtel</p></li>
								<li class="tbcol5"><div class="mlabel">Associated Resources</div><p data-toggle="tooltip" data-placement="top" title="Lorem Ipsum">Lorem Ipsum</p></li>
								<li class="tbcol6"><div class="mlabel">State</div><a class="remindbtn" href="#" data-toggle="tooltip" data-placement="top" title="State">State</a></li>
								<li class="tbcol7"><div class="mlabel">Action</div>
									<div class="actopt"><a class="showbtn" href="#" data-toggle="tooltip" data-placement="top" title="Action"></a></div>
									</li>
							</ul>
							<ul>
								<li class="tbcol1">
									<div class="nkcheckbox">
										<input type="checkbox" class="checkboxbtn" id="opt6" />
		                       			<label for="opt6"></label>
									</div>
								</li>
								<li class="tbcol2"><div class="mlabel">Number</div><p data-toggle="tooltip" data-placement="top" title="1234567890">1234567890</p></li>
								<li class="tbcol3"><div class="mlabel">Category</div><p data-toggle="tooltip" data-placement="top" title="Postpaid">Postpaid</p></li>
								<li class="tbcol4"><div class="mlabel">Service Provider</div><p data-toggle="tooltip" data-placement="top" title="Airtel">Airtel</p></li>
								<li class="tbcol5"><div class="mlabel">Associated Resources</div><p data-toggle="tooltip" data-placement="top" title="Lorem Ipsum">Lorem Ipsum</p></li>
								<li class="tbcol6"><div class="mlabel">State</div><a class="remindbtn" href="#" data-toggle="tooltip" data-placement="top" title="State">State</a></li>
								<li class="tbcol7"><div class="mlabel">Action</div>
									<div class="actopt"><a class="showbtn" href="#" data-toggle="tooltip" data-placement="top" title="Action"></a></div>
								</li>
							</ul>
						</div>
						<div class="cpagination">
							<ul class="float-right">
								<li><a href="#" class="firstpage">First</a></li>
								<li><a href="#" class="prevpage"></a></li>
								<li><a href="#" class="active">10</a></li>
								<li><a href="#">11</a></li>
								<li><a href="#">....</a></li>
								<li><a href="#">25</a></li>
								<li><a href="#">26</a></li>
								<li><a href="#" class="nextpage"></a></li>
								<li><a href="#" class="lastpage">Last</a></li>
							</ul>
						</div>
				  	</div>
				  	<div class="tab-pane fade" id="order">
				  		<div class="topfilter">
					  		<div class="searchbar float-left">
					  			<form>
					  				<div class="seachfield">
						  				<input type="text" name="" class="form-control custfield" id="search1" />
						  				<label for="search1" class="animlable">Search</label>
					  				</div>
					  			</form>
					  		</div>
					  		<div class="btns float-right">
					  			<a href="#" class="optbtn rbtn" data-toggle="tooltip" data-placement="top" title="Reset"></a>
					  			<a href="#" class="optbtn dbtn" data-toggle="tooltip" data-placement="top" title="Download"></a>
					  			<a class="optbtn fbtn" data-toggle="tooltip" data-placement="top" title="Filter"></a>
					  		</div>
					  	</div>
					  	<div class="datatable ordertable">
							<ul class="tbhead">
								<li class="tbcol2"><h5>Number</h5></li>
								<li class="tbcol3"><h5>Quantity</h5></li>
								<li class="tbcol4"><h5>Created on</h5></li>
								<li class="tbcol5"><h5>Last Updated</h5></li>
								<li class="tbcol6"><h5>State</h5></li>
								<li class="tbcol7"><h5>Action</h5></li>
							</ul>
							<ul>
								<li class="tbcol2"><div class="mlabel">Number</div><p data-toggle="tooltip" data-placement="top" title="1234567890">1234567890</p></li>
								<li class="tbcol3"><div class="mlabel">Quantity</div><p data-toggle="tooltip" data-placement="top" title="01034">01034</p></li>
								<li class="tbcol4"><div class="mlabel">Created on</div><p data-toggle="tooltip" data-placement="top" title=""> </p></li>
								<li class="tbcol5"><div class="mlabel">Last Updated</div><p data-toggle="tooltip" data-placement="top" title=""> </p></li>
								<li class="tbcol6"><div class="mlabel">State</div><a class="remindbtn" href="#" data-toggle="tooltip" data-placement="top" title="State">State</a></li>
								<li class="tbcol7"><div class="mlabel">Action</div>
									<div class="actopt"><a class="showbtn" href="#" data-toggle="tooltip" data-placement="top" title="View"></a></div>
									<div class="actopt" data-toggle="modal" data-target="#editorder"><a class="editbtn" href="#" data-toggle="tooltip" data-placement="top" title="Edit"></a></div>
									<div class="actopt"><a class="sendbtn" href="#" data-toggle="tooltip" data-placement="top" title="Send"></a></div>
									<div class="actopt"><a class="completebtn" href="#" data-toggle="tooltip" data-placement="top" title="Complete"></a></div>
									<div class="actopt"><a class="cancelbtn" href="#" data-toggle="tooltip" data-placement="top" title="Cancel"></a></div>
								</li>
							</ul>
							<ul>
								<li class="tbcol2"><div class="mlabel">Number</div><p data-toggle="tooltip" data-placement="top" title="1234567890">1234567890</p></li>
								<li class="tbcol3"><div class="mlabel">Quantity</div><p data-toggle="tooltip" data-placement="top" title="11223344">11223344</p></li>
								<li class="tbcol4"><div class="mlabel">Created on</div><p data-toggle="tooltip" data-placement="top" title=""> </p></li>
								<li class="tbcol5"><div class="mlabel">Last Updated</div><p data-toggle="tooltip" data-placement="top" title=""> </p></li>
								<li class="tbcol6"><div class="mlabel">State</div><a class="remindbtn" href="#" data-toggle="tooltip" data-placement="top" title="State">State</a></li>
								<li class="tbcol7"><div class="mlabel">Action</div>
									<div class="actopt"><a class="showbtn" href="#" data-toggle="tooltip" data-placement="top" title="View"></a></div>
									<div class="actopt" data-toggle="modal" data-target="#editorder"><a class="editbtn" href="#" data-toggle="tooltip" data-placement="top" title="Edit"></a></div>
									<div class="actopt"><a class="sendbtn" href="#" data-toggle="tooltip" data-placement="top" title="Send"></a></div>
									<div class="actopt"><a class="completebtn" href="#" data-toggle="tooltip" data-placement="top" title="Complete"></a></div>
									<div class="actopt"><a class="cancelbtn" href="#" data-toggle="tooltip" data-placement="top" title="Cancel"></a></div>
								</li>
							</ul>
							<ul>
								<li class="tbcol2"><div class="mlabel">Number</div><p data-toggle="tooltip" data-placement="top" title="1234567890">1234567890</p></li>
								<li class="tbcol3"><div class="mlabel">Quantity</div><p data-toggle="tooltip" data-placement="top" title="93469">93469</p></li>
								<li class="tbcol4"><div class="mlabel">Created on</div><p data-toggle="tooltip" data-placement="top" title=""> </p></li>
								<li class="tbcol5"><div class="mlabel">Last Updated</div><p data-toggle="tooltip" data-placement="top" title=""> </p></li>
								<li class="tbcol6"><div class="mlabel">State</div><a class="remindbtn" href="#" data-toggle="tooltip" data-placement="top" title="State">State</a></li>
								<li class="tbcol7"><div class="mlabel">Action</div>
									<div class="actopt"><a class="showbtn" href="#" data-toggle="tooltip" data-placement="top" title="View"></a></div>
									<div class="actopt" data-toggle="modal" data-target="#editorder"><a class="editbtn" href="#" data-toggle="tooltip" data-placement="top" title="Edit"></a></div>
									<div class="actopt"><a class="sendbtn" href="#" data-toggle="tooltip" data-placement="top" title="Send"></a></div>
									<div class="actopt"><a class="completebtn" href="#" data-toggle="tooltip" data-placement="top" title="Complete"></a></div>
									<div class="actopt"><a class="cancelbtn" href="#" data-toggle="tooltip" data-placement="top" title="Cancel"></a></div>
								</li>
							</ul>
							<ul>
								<li class="tbcol2"><div class="mlabel">Number</div><p data-toggle="tooltip" data-placement="top" title="1234567890">1234567890</p></li>
								<li class="tbcol3"><div class="mlabel">Quantity</div><p data-toggle="tooltip" data-placement="top" title="6372647">6372647</p></li>
								<li class="tbcol4"><div class="mlabel">Created on</div><p data-toggle="tooltip" data-placement="top" title=""> </p></li>
								<li class="tbcol5"><div class="mlabel">Last Updated</div><p data-toggle="tooltip" data-placement="top" title=""> </p></li>
								<li class="tbcol6"><div class="mlabel">State</div><a class="remindbtn" href="#" data-toggle="tooltip" data-placement="top" title="State">State</a></li>
								<li class="tbcol7"><div class="mlabel">Action</div>
									<div class="actopt"><a class="showbtn" href="#" data-toggle="tooltip" data-placement="top" title="View"></a></div>
									<div class="actopt" data-toggle="modal" data-target="#editorder"><a class="editbtn" href="#" data-toggle="tooltip" data-placement="top" title="Edit"></a></div>
									<div class="actopt"><a class="sendbtn" href="#" data-toggle="tooltip" data-placement="top" title="Send"></a></div>
									<div class="actopt"><a class="completebtn" href="#" data-toggle="tooltip" data-placement="top" title="Complete"></a></div>
									<div class="actopt"><a class="cancelbtn" href="#" data-toggle="tooltip" data-placement="top" title="Cancel"></a></div>
								</li>
							</ul>
							<ul>
								<li class="tbcol2"><div class="mlabel">Number</div><p data-toggle="tooltip" data-placement="top" title="1234567890">1234567890</p></li>
								<li class="tbcol3"><div class="mlabel">Quantity</div><p data-toggle="tooltip" data-placement="top" title="212366">212366</p></li>
								<li class="tbcol4"><div class="mlabel">Created on</div><p data-toggle="tooltip" data-placement="top" title=""> </p></li>
								<li class="tbcol5"><div class="mlabel">Last Updated</div><p data-toggle="tooltip" data-placement="top" title=""> </p></li>
								<li class="tbcol6"><div class="mlabel">State</div><a class="remindbtn" href="#" data-toggle="tooltip" data-placement="top" title="State">State</a></li>
								<li class="tbcol7"><div class="mlabel">Action</div>
									<div class="actopt"><a class="showbtn" href="#" data-toggle="tooltip" data-placement="top" title="View"></a></div>
									<div class="actopt" data-toggle="modal" data-target="#editorder"><a class="editbtn" href="#" data-toggle="tooltip" data-placement="top" title="Edit"></a></div>
									<div class="actopt"><a class="sendbtn" href="#" data-toggle="tooltip" data-placement="top" title="Send"></a></div>
									<div class="actopt"><a class="completebtn" href="#" data-toggle="tooltip" data-placement="top" title="Complete"></a></div>
									<div class="actopt"><a class="cancelbtn" href="#" data-toggle="tooltip" data-placement="top" title="Cancel"></a></div>
								</li>
							</ul>
							<ul>
								<li class="tbcol2"><div class="mlabel">Number</div><p data-toggle="tooltip" data-placement="top" title="1234567890">1234567890</p></li>
								<li class="tbcol3"><div class="mlabel">Quantity</div><p data-toggle="tooltip" data-placement="top" title="5352435">5352435</p></li>
								<li class="tbcol4"><div class="mlabel">Created on</div><p data-toggle="tooltip" data-placement="top" title=""> </p></li>
								<li class="tbcol5"><div class="mlabel">Last Updated</div><p data-toggle="tooltip" data-placement="top" title=""> </p></li>
								<li class="tbcol6"><div class="mlabel">State</div><a class="remindbtn" href="#" data-toggle="tooltip" data-placement="top" title="State">State</a></li>
								<li class="tbcol7"><div class="mlabel">Action</div>
									<div class="actopt"><a class="showbtn" href="#" data-toggle="tooltip" data-placement="top" title="View"></a></div>
									<div class="actopt" data-toggle="modal" data-target="#editorder"><a class="editbtn" href="#" data-toggle="tooltip" data-placement="top" title="Edit"></a></div>
									<div class="actopt"><a class="sendbtn" href="#" data-toggle="tooltip" data-placement="top" title="Send"></a></div>
									<div class="actopt"><a class="completebtn" href="#" data-toggle="tooltip" data-placement="top" title="Complete"></a></div>
									<div class="actopt"><a class="cancelbtn" href="#" data-toggle="tooltip" data-placement="top" title="Cancel"></a></div>
								</li>
							</ul>
						</div>
				  	</div>
				  	<div class="tab-pane fade" id="bulkaction">
				  		<div class="uploadfilbox">
				  			<div class="text">Don’t have files to show. Please upload file(s)</div>
				  			<div class="uploadfile">
				  				<div class="uploadlabel">
				  					<p><span>Upload file(s)* here</span> Drag and drop, or click to select</p>
				  				</div>
						        <input type="file" class="form-control custfileupload" multiple="" />
						    </div>
						    <div class="downloadrow text-right">
						    	<a href="#" class="downtemplate">Download Template</a>
						    </div>
						    <div class="uploadfilelists">
						    	<h4>Attach Files*</h4>
						    	<div class="filelists mCustomScrollbar">
						    		<ul>
						    			<li><p>AddTN_Files1.csv</p><div class="deletfile"></div></li>
						    			<li><p>AddTN_Files2.csv</p><div class="deletfile"></div></li>
						    			<li><p>AddTN_Files2.csv</p><div class="deletfile"></div></li>
						    		</ul>
						    	</div>
						    </div>
						    <div class="rowbtns text-center">
					    		<a href="#" class="bbtn resetbtn">Clear</a>
                        		<a href="#" class="cbtn tkaction visibbtn">Take an Action</a>
					    	</div>
				  		</div>
				  	</div>
				  	<div class="tab-pane fade" id="bulktrans"></div>
				</div>
			</div>
		</div>
    )
}
