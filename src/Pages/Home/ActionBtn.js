import React from 'react'

export default function ActionBtn({classBtn,dataToggle,dataTarget='',label,dataPlacement='',title=''}) {
    return (
        <a href="#" class={classBtn} data-toggle={dataToggle} data-placement={dataPlacement} title={title} data-target={dataTarget}>{label}</a>
    )
}
