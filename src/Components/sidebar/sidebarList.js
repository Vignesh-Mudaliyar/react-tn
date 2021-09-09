import React from 'react'

export default function SidebarList({name,path,id,active=""}) {
    return (
        <li class={active}>
		    <div class={`micon${id}`}>{name}</div>
        </li>
    )
}
