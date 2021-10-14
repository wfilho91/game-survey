import { Link } from 'react-router-dom'

type Props = {
  link: string
  text: string
}

const Filters = ({ link, text }: Props) => {
  return (
    <div className="filters-container records-actions">
      <Link to={link}>
        <button className="action-filters">{text}</button>
      </Link>
    </div>
  )
}

export default Filters
