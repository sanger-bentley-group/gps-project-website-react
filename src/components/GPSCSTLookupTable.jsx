import { useMemo } from "react"

import { TitleText, Section, Table, TextWithToolTip } from "./Common"

import content from '../content/gpscSTContent'
import tableContent from '../content/gpscSTTableContent.tsv'

const GPSCSTLookupTable = () => {
  const memoisedTableData = useMemo(() => tableContent, [tableContent])

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
        header: <TextWithToolTip text="Known Sequence Type(s)" tooltipHTML="Unknown sequence types are excluded" />,
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
      {content.sections.map( (props, index) => 
        <Section {...props} key={index} />
      )}
      <Table columns={memoisedTableColumns} data={memoisedTableData} heroContent={true}/>
    </div>
  )
}

export default GPSCSTLookupTable
