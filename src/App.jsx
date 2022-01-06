import { useState } from 'react'

import initialEmails from './data/emails'

import './App.css'
import Header from './components/Header'
import Emails from './components/Emails'
import LeftMenu from './components/LeftMenu'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)


 
function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [search, setSearch] = useState('')

  const getSearchedEmails = emails => emails.filter(email => email.title.toUpperCase().includes(search.toUpperCase()))
  
  return (
    <div className="app">
      
      <Header setSearch = {setSearch} search = {search}/>

      <LeftMenu emails = {emails} currentTab = {currentTab} setCurrentTab = {setCurrentTab} hideRead = {hideRead} setHideRead = {setHideRead}/>

      <Emails getSearchedEmails = {getSearchedEmails} emails = {emails} hideRead = {hideRead} getReadEmails = {getReadEmails} currentTab = {currentTab} getStarredEmails = {getStarredEmails} search = {search} setEmails = {setEmails}/>

    </div>
  )
}

export default App
