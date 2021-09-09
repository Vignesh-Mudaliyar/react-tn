import React from 'react'

export default function SearchBar({label}) {
    return (
        <div class="searchbar float-left">
        <form>
            <div class="seachfield">
                <input type="text" name="" class="form-control custfield" id="search1" />
                <label for="search1" class="animlable">{label}</label>
            </div>
        </form>
    </div>
    )
}
