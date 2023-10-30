import Papa from 'papaparse'
import { useEffect, useState, useMemo } from "react"

import { TitleText, Table } from "./Common"

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
      header: "Count",
      accessorKey: "count",
    },
    {
      header: "Serotype",
      accessorKey: "serotype",
      enableColumnFilter: true
    },
    {
      header: "Accession Number",
      accessorKey: "accessionNumber",
      enableColumnFilter: true
    },
    {
      header: "Comments",
      accessorKey: "comments",
    },
    {
      header: "Reference",
      accessorKey: "reference",
      cell: props => <a className="link" href={props.row.original.link} target='_blank' rel="noreferrer">{props.getValue()}</a>
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
