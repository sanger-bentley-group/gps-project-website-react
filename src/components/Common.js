import { useMemo, useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from "react-router-dom"
import Papa from 'papaparse'
import { useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, flexRender } from '@tanstack/react-table'

const mdComponents = {
  a: ({ href, children })  =>  <Link to={href} className='link' { ...(/^(http|www)/.test(href) && {target: '_blank'}) }>{children}</Link>,
  ol: ({ start, children }) => <ol start={start} className='list-decimal list-outside ms-8'>{children}</ol>,
  ul: ({ children }) => <ul className='list-disc list-outside ms-8'>{children}</ul>,
  h3: ({children}) => <h3 className='text-xl font-bold'>{children}</h3>,
  h6: ({children}) => <h6 className='text-sm italic text-center'>{children}</h6>,
  img: ({src, alt, title}) => <img className='w-full' src={src} alt={alt} title={title}/>
}

const TitleText = ({text}) => (
  <h1 className="text-4xl font-bold">
    <ReactMarkdown components={mdComponents} children={text} />
  </h1>
)

const SubtitleText = ({text, logo, url, className}) => {
  const content = (
    <div className='flex gap-x-4'>
      <h2 className={`text-2xl font-bold ${className ? className : ''}`}>
        <ReactMarkdown components={mdComponents} children={text} />
      </h2>
      {logo ? <img className='h-10 self-center' src={logo.url} alt={logo.alt}/> : null }
    </div>
  )
  
  return (
    url
    ? <Link to={url} className='link' { ...(/^(http|www)/.test(url) && {target: '_blank'}) }>{content}</Link>
    : content
  )
}

const ContentMD = ({md}) => (
  <ReactMarkdown components={mdComponents} children={md} />
)

const ContentCode = ({code}) => (
  <div className="mockup-code w-full">
    {code.map((line, index) => 
      <pre data-prefix="$" key={index}><code>{line}</code></pre>
    )}
  </div>
)

const ContentNameCard = ({cards}) => (
  <div className='hero-content w-full flex flex-wrap justify-around gap-y-20 xl:justify-between'>
    {cards.map((card, index) => (
      <div className="card card-side w-[32rem] bg-base-100 shadow-md" key={index}>
        <div className="avatar">
          <div className="w-36 rounded">
            <img src={card.photo} alt={card.name} />
          </div>
        </div>
        <div className="card-body">
          <p className="card-title text-lg">{card.name}</p>
          <p>{card.position}</p>
        </div>
      </div>
    ))}
  </div>
)

const ContentArticleCard = ({cards}) => (
  <div className='hero-content w-full flex flex-col gap-y-10'>
    {cards.map((card, index) => (
      <div className="card card-side w-full bg-base-100 shadow-md" key={index}>
        <div className="card-body">
          <div className="card-title text-lg"><ContentMD md={card.title} /></div>
          <div className="text-sm"><ContentMD md={card.authors} /></div>
          <div className="text-sm italic"><ContentMD md={card.affiliations} /></div>
          <div className="text-md"><ContentMD md={card.details} /></div>
        </div>
      </div>
    ))}
  </div>
)

const ContentVideoEmbed = ({url, title, }) => (
  <iframe className="w-full aspect-video" src={url} title={title} allowFullScreen></iframe>
)

const ContentYoutubeEmbed = ({id, title}) => (
  <ContentVideoEmbed url={`https://www.youtube.com/embed/${id}?rel=0&amp;cc_load_policy=1`} title={title} />
)

const ContentVimeoEmbed = ({id, title}) => (
  <ContentVideoEmbed url={`https://player.vimeo.com/video/${id}`} title={title} />
)

const ContentButton = ({text, url}) => (
  <div className='place-self-center'>
    <a className="btn btn-primary text-lg font-bold normal-case" href={url} target='_blank' rel="noreferrer">{text}</a>
  </div>
)

const ContentLogo = ({logo, url, alt}) => (
  <div className='place-self-center xl:place-self-auto'>
    <a href={url} target='_blank' rel="noreferrer"><img src={logo} alt={alt} className='w-64'></img></a>
  </div>
)

const ContentQuoteCard = ({photo, name, quotes}) => (
  <div className="card xl:card-side w-full bg-base-100 shadow-md">
    { photo
      ?
        <div className="avatar place-self-center pt-8 pl-0 xl:pl-8 xl:pt-0">
          <div className="w-36 h-36 rounded-xl">
            <img src={photo} alt={`${name}`} />
          </div>
        </div>
      :
        ''
    }

    <div className="card-body">
      {quotes.map((quote, index) => (
        <div key={index}><ContentMD md={quote} /></div>
      ))}
      <p className="text-md italic">{name}</p>
    </div>
  </div>
)

const PublicationCard = ({cards}) => (
  <div className='grid grid-cols-1 w-full gap-10 xl:grid-cols-2'>
    {cards.map((card, index) => (
      <div className="card w-full bg-base-100 shadow-md" key={index}>
        <div className="card-body justify-between">
          <div className="card-title text-lg"><ContentMD md={card.title} /></div>
          <div className="text-md italic"><ContentMD md={card.platform} /></div>
          {card.youtube_id ? <ContentYoutubeEmbed id={card.youtube_id} title={card.title} /> : null}
          <div className="flex flex-wrap gap-4 place-self-end place-content-end">
            {card.buttons.map((button, index) => (
              <a className="btn btn-primary text-lg font-bold normal-case" href={button.url} target='_blank' rel="noreferrer" key={index}>↓ {button.text}</a>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
)

const SectionContent = ({type, content}) => {
  switch (type) {
    case 'md':
      return <div className='text-lg w-full'><ContentMD md={content} /></div>
    case 'code':
      return <ContentCode code={content} />
    case 'nameCard':
      return <ContentNameCard cards={content} />
    case 'articleCard':
      return <ContentArticleCard cards={content} />
    case 'youtube':
      return <ContentYoutubeEmbed id={content.id} title={content.title} />
    case 'vimeo':
      return <ContentVimeoEmbed id={content.id} title={content.title} />
    case 'button':
      return <ContentButton text={content.text} url={content.url} />
    case 'logo':
      return <ContentLogo logo={content.logo} url={content.url} alt={content.url} />
    case 'quoteCard':
      return <ContentQuoteCard photo={content.photo} name={content.name} quotes={content.quotes} />
    case 'publicationGrid':
      return <PublicationCard cards={content} />
    default:
      return
  }
}

const Section = ({subtitle, content}) => (
  <div className="hero-content flex-col w-full items-start" id={subtitle ? subtitle.content.replace(/\s+/g, '-').toLowerCase() : null}>
    {subtitle ? <SubtitleText text={subtitle.content} logo={subtitle.logo} url={subtitle.url} className="self-center xl:self-start"/> : ''}
    {
      content.map( (props, index) =>
        <SectionContent {...props} key={index} />)
    }
  </div>
)

const ParseTable = ({content}) => {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    Papa.parse(content, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: res => setTableData(res.data)
      }
    )
  }, [content])

  return tableData
}

const Table = ({columns, data}) => {
  const [columnFilters, setColumnFilters] = useState([])

  const defaultColumn = useMemo(() => ({enableColumnFilter: false}), [])

  const table = useReactTable({
    data,
    columns, 
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      columnFilters
    },
    onColumnFiltersChange: setColumnFilters,
    defaultColumn: defaultColumn
  })

  const pageIndex = table.getState().pagination.pageIndex
  const pageSize = table.getState().pagination.pageSize
  const startingRow = pageIndex * pageSize + 1
  const currentRows = table.getRowModel().rows
  const totalRowLength = table.getPrePaginationRowModel().rows.length

  return (
    <div className='hero-content flex-col w-full items-start'>
      <div className='w-full flex justify-around'>
        <div className="join">
          <button className="join-item btn btn-outline btn-xs" onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>«</button>
          <button className="join-item btn btn-outline btn-xs" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>‹</button>
          {
            table.getPageCount()
            ? 
              <select 
                className="join-item btn btn-outline btn-xs"
                value={pageIndex}
                onChange={ e => table.setPageIndex(Number(e.target.value)) }
              >
                {
                  [...Array(table.getPageCount()).keys()].map(page => (
                    <option key={page} value={page}>
                      Page {page + 1} of {table.getPageCount()}
                    </option>
                  ))
                }
              
              </select>
            :
              <select className="join-item btn btn-outline btn-xs btn-disabled"> <option>Page 0 of 0</option> </select>
          } 
          <button className="join-item btn btn-outline btn-xs" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>›</button>
          <button className="join-item btn btn-outline btn-xs" onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>»</button>
        </div>
        <div className='join'>
          <div className='join-item btn btn-outline btn-xs pointer-events-none'>
            {
              table.getPageCount()
              ?
                `Records ${startingRow} - ${startingRow + currentRows.length - 1} of ${ totalRowLength }`
              :
                "No Record"
            }
          </div>
          <select
            className={`join-item btn btn-outline btn-xs ${table.getPageCount() ? null : 'btn-disabled'}`}
            value={pageSize}
            onChange={ e => table.setPageSize(Number(e.target.value)) }
          >
            {
              [
                totalRowLength > 10 ? 10 : null, 
                totalRowLength > 20 ? 20 : null, 
                totalRowLength > 50 ? 50 : null, 
                totalRowLength > 100 ? 100 : null, 
                totalRowLength
              ]
              .filter(x => x)
              .map((pageSize, i, arr) => (
                  <option key={pageSize} value={pageSize}>
                    {
                      i + 1 === arr.length 
                      ?
                        'Show All'
                      :
                        `Show ${pageSize}`
                    }
                  </option>
              ))
            }
          </select>
        </div>
      </div>
      <table className='table table-zebra bg-base-300 table-sm table-fixed'>
        <thead className='bg-base-200'>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th className='align-top' key={header.id}>
                  <div>
                    {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </div>
                  {
                    header.column.getCanFilter()
                    ? 
                      <div className='pt-2.5'>
                          <input
                            className="input input-xs w-full max-w-xs"
                            type="text"
                            value={(header.column.getFilterValue() ?? '')}
                            onChange={event => header.column.setFilterValue(event.target.value)}
                            placeholder={'Search...'}
                          />
                      </div>
                    :
                      null
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td className='align-top' key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                )) 
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export { TitleText, SubtitleText, ContentMD, ContentYoutubeEmbed, Section, Table, ParseTable }
