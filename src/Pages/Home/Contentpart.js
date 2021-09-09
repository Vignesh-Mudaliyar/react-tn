import React from 'react'
import Navvbar from '../../Components/Navbar'
import InnerPage from './InnerPage'

export default function ContentPart() {
    return (
        <div class="contentpart">
		<Navvbar title="Total Number Management" />
        <InnerPage />
		
		<div class="filterbtn">
			<div class="filtertext">Filter</div>
		</div>
	</div>
    )
}
