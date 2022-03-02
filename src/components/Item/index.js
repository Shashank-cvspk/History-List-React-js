import './index.css'

const Item = props => {
  const {resource, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = resource
  const deleteItem = () => {
    onDelete(id)
  }
  return (
    <li className="item">
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="logo" />
      <p className="title">{title}</p>
      <p className="domain">{domainUrl}</p>
      <button
        testid="delete"
        type="button"
        className="button"
        onClick={deleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default Item
