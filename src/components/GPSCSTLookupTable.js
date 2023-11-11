import { useMemo } from "react"

import { TitleText, Table, ParseTable } from "./Common"

import content from '../content/gpscSTContent'
import tableContent from '../content/gpscSTTableContent.tsv'

const GPSCSTLookupTable = () => {
  const tableData = ParseTable({content: tableContent})

  const memoisedTableData = useMemo(() => tableData, [tableData])

  const memoisedTableColumns = useMemo(() => [
      {
        header: "GPSC",
        accessorKey: "gpsc",
        enableColumnFilter: true
      },
      {
        header: "Count of Known ST",
        accessorKey: "stCount",
      },
      {
        header:
          <div 
            className="tooltip" 
            data-tooltip-id="react-tooltip"
            data-tooltip-html="Unknown sequence types are excluded"
            data-tooltip-place="top"
          >
            <span className="link">Known Sequence Type(s)</span>
          </div>,
        accessorKey: "st",
        enableColumnFilter: true,
        filterFn: (row, id, filterValue) => row.getValue(id).split(", ").includes(filterValue),
        meta: {
          searchPlaceHolder: 'Search... (exact match)'
        }
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

export default GPSCSTLookupTable
