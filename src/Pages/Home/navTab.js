import React from 'react'

export default function NavTab({actionTN,order,bulkAction,bulkTransaction}) {

    return (
        <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="tab" href="#actiontn">{actionTN}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#order">{order}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link show-filter" data-toggle="tab" href="#bulkaction">{bulkAction}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link show-filter" data-toggle="tab" href="#bulktrans">{bulkTransaction}</a>
        </li>
      </ul>  
    )
}
