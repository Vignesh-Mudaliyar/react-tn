import React,{useState} from 'react'
import SidebarList from './sidebarList';

export default function Sidebar({setSmallNav}) {

   
    

    return (
       
        <div class={`asidemenus`}>
		 <div class="logo"><a href="home.html"><img src='images/logo.png' alt="" /></a></div> 
		<div class="menuaccord" onClick={() => setSmallNav('smallnav')}></div>
		<div id="menuicon" onClick={() => setSmallNav('')}></div>
		<div id="custnav">
			<ul class="menus">
                <SidebarList id={1} name="Home" path="/"  active="active" />
                <SidebarList id={2} name="Domain" path="/"  />
                <SidebarList id={3} name="User Management" path="/" />
                <SidebarList id={4} name="State" path="/" />
                <SidebarList id={5} name="Custom Field" path="/" />
                <SidebarList id={6} name="Configuration" path="/" />
                <SidebarList id={7} name="Service Provider" path="/" />
                <SidebarList id={8} name="Number Plan" path="/" />
                <SidebarList id={9} name="Block Component" path="/" />
                <SidebarList id={10} name="Number Ownership" path="/" />
			</ul>
		</div>
	</div>
   
       
    )
}
