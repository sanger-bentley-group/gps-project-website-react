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
      meta: {
        className: "sticky left-0 glass z-10"
      },
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
      header: <TextWithToolTip text="Positive in <a class='link' href='https://ssidiagnostica.com/international/solutions/antisera/pneumococcus-antisera/' target='_blank' rel='noreferrer'>SSI Antisera</a>" tooltipHTML='
        <div class="flex flex-col gap-2 items-center">
          <div class="badge badge-primary">Pool Serum</div>
          <div class="badge badge-secondary">Type Serum</div>
          <div class="badge badge-accent">Group Serum</div>
          <div class="badge badge-neutral">Factor Serum</div>
          <div class="badge badge-outline">Non-SSI</div>
        </div>
      ' />,
      accessorKey: "otherSerum",
      meta: {
        className: "align-middle!"
      },
      cell: props => {
        const otherSerumValue = props.getValue()
        const otherSerumValueRemark = props.row.original.otherSerumRemark
        const poolSerumValue = props.row.original.poolSerum 
        const typeSerumValue = props.row.original.typeSerum
        const groupSerumValue = props.row.original.groupSerum
        const factorSerumValue = props.row.original.factorSerum
        const antiserumNote = props.row.original.antiserumNote

        if (otherSerumValue === '-' && poolSerumValue === '-'  && typeSerumValue === '-'  && groupSerumValue === '-' && factorSerumValue === '-' ){
          return <div className="text-center">No Serological Profile</div>
        }

        return (
          <div className="flex w-full gap-x-1 gap-y-2 justify-center flex-wrap">
            {
              antiserumNote === '-' ? null : <span className="badge badge-error basis-full"><TextWithToolTip text="Note" tooltipHTML={antiserumNote} /></span>
            }
            {
              poolSerumValue === '-' ? null : poolSerumValue.split(",").map((val) => <div className="badge badge-primary" data-tooltip-id="react-tooltip" data-tooltip-html="Pool Serum" key={val}>{val}</div>)
            }
            {
              typeSerumValue === '-' ? null : typeSerumValue.split(",").map((val) => <div className="badge badge-secondary" data-tooltip-id="react-tooltip" data-tooltip-html="Type Serum" key={val}>{val}</div>)
            }
            {
              groupSerumValue === '-' ? null : groupSerumValue.split(",").map((val) => <div className="badge badge-accent" data-tooltip-id="react-tooltip" data-tooltip-html="Group Serum" key={val}>{val}</div>)
            }
            {
              factorSerumValue === '-' ? null : factorSerumValue.split(",").map((val) => <div className="badge badge-neutral" data-tooltip-id="react-tooltip" data-tooltip-html="Factor Serum" key={val}>{val}</div>)
            }
            {
              otherSerumValue === '-' 
              ? 
                null 
              : 
              otherSerumValue.indexOf(",") === -1
                ?
                  <span className="badge badge-outline"><TextWithToolTip text={otherSerumValue} tooltipHTML={otherSerumValueRemark} /></span>
                : 
                  otherSerumValue.split(',').map((element, index) => 
                    <span className="badge badge-outline" key={element}><TextWithToolTip text={element} tooltipHTML={otherSerumValueRemark.split(',')[index]} /></span>
                  )
            }
          </div>
        )
      }
    },
    {
      header: <TextWithToolTip text="<i>cps</i> Gene Cluster" tooltipHTML='Click on figures to show gene colour legend' />,
      accessorKey: "cpsImage",
      meta: {
        className: "align-middle!"
      },
      cell: props => {
        const cellValue = props.getValue()
        const serotypeValue = props.row.original.serotype 
        const remarkValue = props.row.original.cpsRemark

        if (cellValue === '-'){
          return <div className="text-center">{remarkValue === '-' ? "No Sequence Available" : remarkValue}</div>
        } else {
          return (
            <div className="flex flex-col gap-y-2 w-full h-full justify-center" data-tooltip-id="react-tooltip-click" data-tooltip-html='<img class="min-w-[48rem]" src="img/serotype_cps/cps_legend.svg" alt="Legend of cps gene cluster"/>'>
              <img
                className="h-16 min-w-96"
                src={cellValue}
                alt={`Chart of Serotype ${serotypeValue} cps region`}
              />
              {remarkValue === "-" ? null : <div className="whitespace-nowrap text-center">{remarkValue}</div>}
            </div>
          )
        }
      }
    },
    {
      header: <TextWithToolTip text="Capsular Structure Compiled by Nahm's lab" tooltipHTML='Click on figures to show molecule legend' />,
      accessorKey: "capsularStructureImage",
      meta: {
        className: "align-middle!"
      },
      cell: props => {
        const cellValue = props.getValue()
        const serotypeValue = props.row.original.serotype 
        const remarkValue = props.row.original.capsularStructureRemark
        
        if (cellValue === '-'){
          return <div className="text-center">{remarkValue === '-' ? "No Structure Available" : remarkValue}</div>
        } else {
          return (
            <div className="flex flex-col gap-y-2 w-full h-full justify-center" data-tooltip-id="react-tooltip-click" data-tooltip-html='<img class="min-w-[36rem]" src="img/serotype_capsular_structure/capsular_structure_legend.svg" alt="Legend of capsular structure"/>'>
              <img
                className="min-w-[30rem]"
                src={cellValue}
                alt={`Chart of Serotype ${serotypeValue} capsular structure`}
              />
              {remarkValue === "-" ? null : <div className="whitespace-nowrap text-center">{remarkValue}</div>}
            </div>
          )
        }
      }
    },
    {
      header: "Annotation (.gb)",
      accessorKey: "genBankFile",
      meta: {
        className: "align-middle!"
      },
      cell: props => {
        const cellValue = props.getValue()
        if (cellValue === '-'){
          return <div className="h-full flex items-center justify-center"><span>-</span></div>
        } else {
          return (
            <div className="h-full flex items-center justify-center">
              <a className="btn btn-s btn-square btn-ghost" href={cellValue} target='_blank' rel="noreferrer">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z" fill="#1C274C"></path> <path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill="#1C274C"></path> </g></svg>
              </a>
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
