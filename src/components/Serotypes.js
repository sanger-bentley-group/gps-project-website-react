import { useMemo } from "react"

import { TitleText, Table, ParseTable } from "./Common"

import content from '../content/serotypeContent'
import tableContent from '../content/serotypeTableContent.tsv'

const Serortype = () => {
  const tableData = ParseTable({content: tableContent})

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
      enableColumnFilter: true,
      cell: props => {
        const cellValue = props.getValue()
        if (cellValue === '-'){
          return '-'
        } else if (cellValue.indexOf(",") === -1) {
          return (<a className="link" href={`https://www.ncbi.nlm.nih.gov/nuccore/${cellValue}`} target='_blank' rel="noreferrer">{cellValue}</a>)
        } else {
          return (
              <div className='flex flex-col items-start'>
                {cellValue.split(',').map(element => 
                  <a className="link" href={`https://www.ncbi.nlm.nih.gov/nuccore/${element}`} target='_blank' rel="noreferrer">{element}</a>
                )}
              </div>
          )
        }
      }
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
