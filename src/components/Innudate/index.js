import './index.css'

const Innudate = props => {
  const {first, third} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = first

  const deleting = () => {
    third(id)
  }

  return (
    <li>
      <div className="lista">
        <p>{timeAccessed}</p>
        <p>{title}</p>
        <img src={logoUrl} />
        <button onClick={deleting}>Delete</button>
      </div>
    </li>
  )
}

export default Innudate
