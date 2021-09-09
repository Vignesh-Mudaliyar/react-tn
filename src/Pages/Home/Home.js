import React,{useState} from 'react'
import Sidebar from '../../Components/sidebar/Sidebar'
import ContentPart from './Contentpart'

export default function Home() {
    const [smallNav,setSmallNav] = useState('smallnav');
    return (
        
         <div className={`bgcolor ${smallNav}`}>
        <Sidebar setSmallNav={setSmallNav} />
        <ContentPart />
        </div>
           
    )
}
