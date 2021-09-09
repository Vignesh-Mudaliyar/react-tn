import React from 'react'

export default function Breadcrumb({label}) {
    return (
        <div class="breadcrumbs">
        <ul>
            <li><a href="#" class="home"></a></li>
            <li>{label}</li>
        </ul>
    </div>
    )
}
