import axios from 'axios'
import Filters from 'core/components/Filters'
import { useEffect, useState } from 'react'
import Pagination from './components/Pagination'
import { formatDate } from './helpers'
import './styles.css'
import { BASE_URL, RecordsResponse } from './types'


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
      <Filters link="/charts" text="VER GRÁFICOS"/>
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
