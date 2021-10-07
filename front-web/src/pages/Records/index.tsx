import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from './components/Pagination'
import { formatDate } from './helpers'
import './styles.css'
import { RecordsResponse } from './types'

const BASE_URL = 'http://localhost:8080'

const Records = () => {
  const [recordsResponse, setRecordsResponse] = useState<RecordsResponse>()
  const [activePage, setActivePage] = useState(0)

  const handlePageChange = (index: number) => {
    setActivePage(index)
  }

  useEffect(() => {
    axios
      .get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`)
      .then((response) => setRecordsResponse(response.data))
  }, [activePage])

  return (
    <div className="page-container">
      <div className="filters-container records-actions">
        <Link to="/charts">
          <button className="action-filters">VER GRÁFICO</button>
        </Link>
      </div>
      <table className="records-table" cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>INSTANTE</th>
            <th>NOME</th>
            <th>IDADE</th>
            <th>PLATAFORMA</th>
            <th>GÊNERO</th>
            <th>TITULO DO GAME</th>
          </tr>
        </thead>
        <tbody>
          {recordsResponse?.content.map((record) => (
            <tr key={record.id}>
              <td>{formatDate(record.moment)}</td>
              <td>{record.name}</td>
              <td>{record.age}</td>
              <td className="text-secondary">{record.platform}</td>
              <td>{record.genreName}</td>
              <td className="text-primary">{record.gameTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        activePage={activePage}
        totalPages={recordsResponse?.totalPages}
        goToPage={handlePageChange}
      />
    </div>
  )
}

export default Records
