import Email from "./Email"

function Emails(props){
   
    const toggleStar = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id
              ? { ...email, starred: !email.starred }
              : email
          )
        props.setEmails(updatedEmails)
    }
    
    const toggleRead = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id ? { ...email, read: !email.read } : email
          )
        props.setEmails(updatedEmails)
    }  

  let filteredEmails = props.emails

  if (props.hideRead) filteredEmails = props.getReadEmails(filteredEmails)

  if (props.currentTab === 'starred')
    filteredEmails = props.getStarredEmails(filteredEmails)

  if(props.search !== '')
    filteredEmails = props.getSearchedEmails(filteredEmails)
    
    return (
        <main className="emails">
        <ul>
            <span className={`${props.search.length > 0 ? 'search-text' : ''}`}>{`${props.search.length > 0 ? `You are searching for: ${props.search}` : '' }`}</span>
          {filteredEmails.map((email, index) => (
            <Email email = {email} index = {index} toggleRead = {toggleRead} toggleStar = {toggleStar}/>
          ))}
        </ul>
      </main>
    )
}
export default Emails