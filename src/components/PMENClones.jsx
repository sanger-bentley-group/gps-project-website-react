import { useMemo } from "react"

import { TitleText, Section, Table, TextWithToolTip } from "./Common"

import content from '../content/pmenContent'
import tableContent from '../content/pmenTableContent.tsv'

const PMENClones = () => {
  const memoisedTableData = useMemo(() => tableContent, [tableContent])

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
          meta: {
            className: "sticky left-0 glass z-10"
          },
          cell: props => {
            const value = props.getValue()

            if (value.startsWith("CSR")) {
              return <TextWithToolTip text={value} tooltipHTML="CSR: Czech Republic" />
            } else {
              return <div className="whitespace-nowrap" dangerouslySetInnerHTML={{__html: value}} />
            } 
          },
          filterFn: (row, id, filterValue) => row.getValue(id).replace(/<sup>|<\/sup>/g, "").toLowerCase().includes(filterValue.toLowerCase())
        },
        {
          header: "Reference no.",
          accessorKey: "referenceNo",
          enableColumnFilter: true,
          cell: props => <div className="whitespace-nowrap">{props.getValue()}</div>
        },
        {
          header: "ATCC no.",
          accessorKey: "atccNo",
          enableColumnFilter: true,
          cell: props => {
            const cellValue = props.getValue()
            if (cellValue === '-'){
              return '-'
            } else {
              return <a className="link whitespace-nowrap" href={`https://www.atcc.org/products/${cellValue}`} target='_blank' rel="noreferrer">{cellValue}</a>
            }
          }
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
          header: <TextWithToolTip text="PEN" tooltipHTML="Penicillin" />,
          accessorKey: "pen",
        },
        {
          header: <TextWithToolTip text="TAX" tooltipHTML="Cefotaxime" />,
            accessorKey: "tax",
        },
        {
          header: <TextWithToolTip text="ERY" tooltipHTML="Erythromycin" />,
          accessorKey: "ery",
        },
        {
          header: <TextWithToolTip text="CLI" tooltipHTML="Clindamycin" />,
          accessorKey: "cli",
        },
        {
          header: <TextWithToolTip text="CHL" tooltipHTML="Chloramphenicol" />,
          accessorKey: "chl",
        },
        {
          header: <TextWithToolTip text="TET" tooltipHTML="Tetracycline" />,
          accessorKey: "tet",
        },
        {
          header: <TextWithToolTip text="SXT" tooltipHTML="Sulfamethoxazole" />,
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
          header: <TextWithToolTip text="GPSC" tooltipHTML="Global Pneumococcal Sequence Cluster" />,
          accessorKey: "gpsc",
          enableColumnFilter: true
        },
        {
          header: <TextWithToolTip text="MLST Profile" tooltipHTML="
                  Multilocus Sequence Typing Profile:<br>
                  aroE (shikimate dehydrogenae)<br>
                  gdh (glucose-6-phosphate dehydrogenase)<br>
                  gki (glucose kinase)<br>recP (transketolase)<br>
                  spi (signal peptidase)<br>xpt (xanthine phosphoribosyltransferase)<br>
                  ddl (D-alanine-D-alanine ligase)
                " />,
          accessorKey: "mlstProfile",
          cell: props => <div className="whitespace-nowrap">{props.getValue()}</div>
        },
        {
          header: <TextWithToolTip text="PBP Profile" tooltipHTML="
                  PBP (Penicillin-binding Protein) Profile:<br>
                  pbp1a - pbp2b - pbp2x
                " />,
          accessorKey: "pbpProfile",
        },
        {
          header: <TextWithToolTip text="<i>erm/mef</i>" tooltipHTML="
                  erm(B) gene<br>
                  mef(A) gene
                " />,
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
      ]
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

export default PMENClones
