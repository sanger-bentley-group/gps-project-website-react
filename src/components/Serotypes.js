import { useMemo } from "react"

import { TitleText, Section, Table, ParseTable, TextWithToolTip } from "./Common"

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

        return (
          <div className="flex items-center">
            {
            commentvalue === '-'
              ? 
                <div className="whitespace-nowrap">{cellValue}</div>
              :
                <TextWithToolTip text={cellValue} tooltipHTML={commentvalue}/>
            }
          </div>
        )
      }
    },
    {
      header: "Accession Number",
      accessorKey: "accessionNumber",
      enableColumnFilter: true,
      cell: props => {
        const cellValue = props.getValue()

        const getLink= (value) => {
          let accessionURL

          if (value.startsWith('SAM')) {
            accessionURL = 'biosample'
          } else if (value.startsWith('ER')) {
            accessionURL = 'sra'
          } else {
            accessionURL = 'nuccore'
          }

          return <a className="link" href={`https://www.ncbi.nlm.nih.gov/${accessionURL}/${value}`} target='_blank' rel="noreferrer" key={value}>{value}</a>
        }

        if (cellValue === '-'){
          return '-'
        } else if (cellValue.indexOf(",") === -1) {
          return getLink(cellValue)
        } else {
          return (
            <div className='flex flex-col items-start'>
              {cellValue.split(',').map(element => getLink(element))}
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
      header: <TextWithToolTip text="<i>cps</i> Gene Cluster" tooltipHTML='<img class="min-w-[48rem]" src="img/serotype_cps/cps_legend.svg" alt="Legend of cps gene cluster"/>' />,
      accessorKey: "cpsImage",
      cell: props => {
        const cellValue = props.getValue()
        const serotypeValue = props.row.original.serotype 
        const remarkValue = props.row.original.cpsRemark

        if (cellValue === '-'){
          return <div className="text-center">-</div>
        } else if (remarkValue === '-') {
          return (
            <div className="flex flex-col w-full">
              <img
                className="h-16 min-w-96"
                src={cellValue}
                alt={`Chart of Serotype ${serotypeValue} cps region`}
              />
            </div>
          )
        } else {
          return (
            <div className="flex flex-col gap-y-2 w-full">
              <img
                src={cellValue}
                alt={`Chart of Serotype ${serotypeValue} cps region`}
                className="h-16 min-w-96"
              />
              <div className="whitespace-nowrap text-center">{remarkValue}</div>
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
      <Table columns={memoisedTableColumns} data={memoisedTableData} pageSizeOverride='50' />
    </div>
  )
}

export default Serortype
