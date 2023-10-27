import Papa from 'papaparse'
import { useEffect, useState, useMemo } from "react"

import { TitleText, Table } from "./Common"

import { TextSearchFilter } from '../utilities/filters'

import content from '../content/serotypeContent'
import tableContent from '../content/serotypeTableContent.tsv'

const Serortype = () => {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    Papa.parse(tableContent, {
      header: true,
      download: true,
      complete: res => setTableData(res.data)
      }
    )
  }, [])

  const memoisedTableData = useMemo(() => tableData, [tableData])

  const memoisedTableColumns = useMemo(() => [
    {
      Header: "Count",
      accessor: "count"
    },
    {
      Header: "Serotype",
      accessor: "serotype",
      Filter: TextSearchFilter,
    },
    {
      Header: "Accession Number",
      accessor: "accessionNumber",
      Filter: TextSearchFilter,
    },
    {
      Header: "Comments",
      accessor: "comments",
    },
    {
      Header: "Reference",
      accessor: "reference",
      Cell: props => <a className="link" href={props.row.original.link} target='_blank' rel="noreferrer">{props.value}</a>
    },
  ], [])

  return (
    <div className="hero flex flex-col justify-center space-y-10 py-20">
      <div className="hero-content w-full flex-col text-center">
        <TitleText text={content.title}/>
      </div>
        <Table columns={memoisedTableColumns} data={memoisedTableData}/>
    </div>
  )
}

export default Serortype
