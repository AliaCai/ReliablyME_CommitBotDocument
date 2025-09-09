import React from 'react'
import {useState, setState} from "react"
import { HashLink } from 'react-router-hash-link';
import '../style/Left_nav.css'
const Left_nav = () => {
    const [active, setActive]=useState('leftNav_intro')

    const items=[
        {name:'What is CommitBot',id:'intro',className:'leftNav_intro'},
        {name:'Installation & Configuration',id:'setup',className:'leftNav_setup'},
            {name:'Overview of CommitBot',id:'overview',className:'leftNav_overview'},
        {name:'Getting Started',id:'start',className:'leftNav_start'},
            {name:'Working with Commitments',id:'commitments',className:'leftNav_commitments'},
        {name:'Accepting, Declining & Clarifying',id:'action',className:'leftNav_action'},
        {name:'Completion & Badges',id:'completion',className:'leftNav_completion'},
        {name:'Where can I say “Done”?',id:'done',className:'leftNav_donw'},
            {name:'Reminders & Notifications',id:'notification',className:'leftNav_notification'},
        {name:'Managing Your Profile & Data',id:'data',className:'leftNav_data'},
            {name:'Slash Commands (Optional Tools',id:'commands',className:'leftNav_commands'},
        {name:'What Works Well',id:'work',className:'leftNav_work'},
            {name:'Known Limitations',id:'limitation',className:'leftNav_limitation'},
        {name:'Frequently Asked Questions (FAQ)',id:'faq',className:'leftNav_faq'},
            {name:'The Broader ReliablyME Platform',id:'borader',className:'leftNav_borader'}
    ]
  return (
    <div className='leftNav'>
        {items.map((e)=><HashLink to={`#${e.id}`} ><div onClick={()=>setActive(e.className)} className={`${e.className} ${active==e.className?'color':''}`}>{e.name}</div></HashLink>)}

    </div>
  )
}

export default Left_nav
