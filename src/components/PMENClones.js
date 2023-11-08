import { useMemo } from "react"
import { Tooltip } from "react-tooltip"

import { TitleText, Table, ParseTable } from "./Common"

import content from '../content/pmenContent'
import tableContent from '../content/pmenTableContent.tsv'

const PMENClones = () => {
  const tableData = ParseTable({content: tableContent})

  const memoisedTableData = useMemo(() => tableData, [tableData])

  const memoisedTableColumns = useMemo(() => [
    {
      id: "single-level-left",
      columns:[
        {
          header: "No.",
          accessorKey: "no",
        },
        {
          header: "Clone",
          accessorKey: "clone",
          enableColumnFilter: true,
          cell: props => <div dangerouslySetInnerHTML={{__html: props.getValue()}} />,
          filterFn: (row, id, filterValue) => row.getValue(id).replace(/<sup>|<\/sup>/g, "").toLowerCase().includes(filterValue.toLowerCase())
        },
        {
          header: "Reference no.",
          accessorKey: "referenceNo",
          enableColumnFilter: true
        },
        {
          header: "ATCC no.",
          accessorKey: "atccNo",
          enableColumnFilter: true
        },
        {
          header: "Serotype",
          accessorKey: "serotype",
          enableColumnFilter: true
        },
      ]
    },
    {
      header: "Antibiotic susceptibilities (Etests) (µg/ml)",
      columns: [
        {
          header: 
            <div 
              className="tooltip" 
              data-tooltip-id="pmen-header"
              data-tooltip-html="Penicillin"
            >
              <span className="link">PEN</span>
            </div>,
          accessorKey: "pen",
        },
        {
          header: 
            <div 
                className="tooltip" 
                data-tooltip-id="pmen-header"
                data-tooltip-html="Cefotaxime"
              >
                <span className="link">TAX</span>
            </div>,
            accessorKey: "tax",
        },
        {
          header:
            <div 
              className="tooltip" 
              data-tooltip-id="pmen-header"
              data-tooltip-html="Erythromycin"
            >
              <span className="link">ERY</span>
            </div>,
          accessorKey: "ery",
        },
        {
          header:
            <div 
              className="tooltip" 
              data-tooltip-id="pmen-header"
              data-tooltip-html="Clindamycin"
            >
              <span className="link">CLI</span>
            </div>,
          accessorKey: "cli",
        },
        {
          header:
            <div 
              className="tooltip" 
              data-tooltip-id="pmen-header"
              data-tooltip-html="Chloramphenicol"
            >
              <span className="link">CHL</span>
            </div>,
          accessorKey: "chl",
        },
        {
          header:
            <div 
              className="tooltip" 
              data-tooltip-id="pmen-header"
              data-tooltip-html="Tetracycline"
            >
              <span className="link">TET</span>
            </div>,
          accessorKey: "tet",
        },
        {
          header:
            <div 
              className="tooltip" 
              data-tooltip-id="pmen-header"
              data-tooltip-html="Sulfamethoxazole"
            >
              <span className="link">SXT</span>
            </div>,
          accessorKey: "sxt",
        },
      ]
    },
    {
      id: "single-level-right",
      columns:[
        {
          header: "Sequence Type",
          accessorKey: "sequenceType",
          enableColumnFilter: true
        },
        {
          header:
            <div 
              className="tooltip" 
              data-tooltip-id="pmen-header"
              data-tooltip-html="Global Pneumococcal Sequence Cluster"
            >
              <span className="link">GPSC</span>
            </div>,
          accessorKey: "gpsc",
          enableColumnFilter: true
        },
        {
          header:
            <div 
              className="tooltip" 
              data-tooltip-id="pmen-header"
              data-tooltip-html="
                  Multilocus Sequence Typing Profile:<br>
                  aroE (shikimate dehydrogenae)<br>
                  gdh (glucose-6-phosphate dehydrogenase)<br>
                  gki (glucose kinase)<br>recP (transketolase)<br>
                  spi (signal peptidase)<br>xpt (xanthine phosphoribosyltransferase)<br>
                  ddl (D-alanine-D-alanine ligase)
                "
            >
              <span className="link">MLST Profile</span>
            </div>,
          accessorKey: "mlstProfile",
        },
        {
          header:
            <div 
              className="tooltip" 
              data-tooltip-id="pmen-header"
              data-tooltip-html="
                  PBP (Penicillin-binding Protein) Profile:<br>
                  pbp1a - pbp2b - pbp2x
                "
            >
              <span className="link">PBP Profile</span>
            </div>,
          accessorKey: "pbpProfile",
        },
        {
          header:
            <div 
              className="tooltip" 
              data-tooltip-id="pmen-header"
              data-tooltip-html="
                  erm(B) gene<br>
                  mef(A) gene
                "
            >
              <span className="link"><i>erm/mef</i></span>
            </div>,
          accessorKey: "ermMef",
          enableColumnFilter: true
        },
        {
          header: "Reference",
          accessorKey: "reference",
          cell: props => {
            const cellValue = props.getValue()
            const referenceValue = props.row.original.referenceUrl
            if (cellValue.indexOf(",") === -1) {
              return (<a className="link whitespace-nowrap" href={referenceValue} target='_blank' rel="noreferrer">{cellValue}</a>)
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
      ]
    },
  ], [])

  return (
    <div className="hero flex flex-col justify-center space-y-10 py-20">
      <div className="hero-content w-full flex-col text-center">
        <TitleText text={content.title}/>
      </div>
        <Table columns={memoisedTableColumns} data={memoisedTableData}/>
        <Tooltip id="pmen-header" place="top" offset={50}/>
    </div>
  )
}

export default PMENClones
