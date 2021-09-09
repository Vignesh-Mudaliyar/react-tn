import React from 'react'

export default function Navvbar({title}) {
    return (
        <div class="topheader">
        <h4 class="ctitle float-left">{title}</h4>
        <div class="dropdown float-right profilebtn">
            <a href="#" class="profilebox" id="settingopts" data-toggle="dropdown">
                <div class="profileimg"><img src="images/profile-icon.svg" alt="" /></div>
            </a>
            <ul class="dropdown-menu custdrop" aria-labelledby="settingopts">
                <li><a href="#">Option 1</a></li>
                <li><a href="#">Option 2</a></li>
                <li><a href="#">Option 3</a></li>
                <li><a href="#">Option 4</a></li>
            </ul>
        </div>
    </div>
    )
}
