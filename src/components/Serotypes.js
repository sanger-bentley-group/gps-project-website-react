import { useMemo } from "react"

import { TitleText, Section, Table, ParseTable } from "./Common"

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
      enableColumnFilter: true,
      cell: props => {
        const cellValue = props.getValue()
        const commentvalue = props.row.original.comments

        if (commentvalue === '-') {
          return cellValue
        } else {
          return (
            <div 
              className="tooltip" 
              data-tooltip-id="react-tooltip"
              data-tooltip-html={commentvalue}
            >
              <span className="link whitespace-nowrap">{cellValue}</span>
            </div>
          )
        }
      }
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
          return <a className="link" href={`https://www.ncbi.nlm.nih.gov/nuccore/${cellValue}`} target='_blank' rel="noreferrer">{cellValue}</a>
        } else {
          return (
            <div className='flex flex-col items-start'>
              {cellValue.split(',').map(element => 
                <a className="link" href={`https://www.ncbi.nlm.nih.gov/nuccore/${element}`} target='_blank' rel="noreferrer" key={element}>{element}</a>
              )}
            </div>
          )
        }
      }
    },
    {
      header: "Reference",
      accessorKey: "reference",
      cell: props => {
        const cellValue = props.getValue()
        const referenceValue = props.row.original.referenceUrl
        if (cellValue.indexOf(",") === -1) {
          return <a className="link whitespace-nowrap" href={referenceValue} target='_blank' rel="noreferrer">{cellValue}</a>
        } else {
          return (
            <div className='flex flex-col items-start'>
              {cellValue.split(',').map((element, index) => 
                <a className="link whitespace-nowrap" href={referenceValue.split(',')[index]} target='_blank' rel="noreferrer" key={element}>{element}</a>
              )}
            </div>
          )
        }
      }
    },
    {
      header: 
        <div 
          className="tooltip" 
          data-tooltip-id="react-tooltip"
          data-tooltip-html='<img class="min-w-[48rem]" src="img/serotype_cps/cps_legend.svg" />'
          data-tooltip-place="top"
        >
          <span className="link"><i>cps</i> Gene Cluster</span>
        </div>,
      accessorKey: "cpsImage",
      cell: props => {
        const cellValue = props.getValue()
        const serotypeValue = props.row.original.serotype 
        const remarkValue = props.row.original.cpsRemark

        if (cellValue === '-'){
          return '-'
        } else if (remarkValue === '-') {
          return (
            <img
              className="min-w-96"
              src={cellValue}
              alt={`Chart of Serotype ${serotypeValue} cps region`}
            />
          )
        } else {
          return (
            <div className="flex flex-col gap-y-2 min-w-96">
              <img
                src={cellValue}
                alt={`Chart of Serotype ${serotypeValue} cps region`}
              />
              <span>{remarkValue}</span>
            </div>
          )
        }
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
      <Table columns={memoisedTableColumns} data={memoisedTableData}/>
    </div>
  )
}

export default Serortype
