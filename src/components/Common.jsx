import { useMemo, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from "react-router-dom"
import { useReactTable, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, flexRender } from '@tanstack/react-table'

const assets = import.meta.glob("../assets/*.{jpg,png}", { query: {as: 'meta:src;height;width' }, eager: true }, );
const assetsHeadshot = import.meta.glob("../assets/headshots/*.jpg", { query: {as: 'meta:src;height;width' }, eager: true }, );

const mdComponents = {
  a: ({ href, children })  =>  <Link to={href} className='link' { ...(/^(http|www)/.test(href) && {target: '_blank'}) }>{children}</Link>,
  ol: ({ start, children }) => <ol start={start} className='list-decimal list-outside ms-8'>{children}</ol>,
  ul: ({ children }) => <ul className='list-disc list-outside ms-8'>{children}</ul>,
  h3: ({children}) => <h3 className='text-xl font-bold'>{children}</h3>,
  h6: ({children}) => <h6 className='text-sm italic text-center'>{children}</h6>,
  img: ({src, alt, title}) => {
    const asset = assets[`../assets/${src}`]
    return (
      <img className='skeleton w-full' src={asset.src} width={asset.width} height={asset.height} alt={alt} title={title} onLoad={(event) => event.target.classList.remove('skeleton')}/>
    )
  }
}

const TitleText = ({text}) => (
  <h1 className="text-4xl font-bold">
    <ReactMarkdown components={mdComponents} children={text} />
  </h1>
)

const SubtitleText = ({text, logo, url, className}) => {
  let asset
  if (logo) {
    asset = assets[`../assets/${logo.url}`]
  }

  const content = (
    <div className='flex gap-x-4'>
      <h2 className={`text-2xl font-bold ${className ? className : ''}`}>
        <ReactMarkdown components={mdComponents} children={text} />
      </h2>
      {logo 
        ? 
          <img 
            className='h-10 w-fit self-center skeleton' 
            src={asset.src} 
            width={asset.width} 
            height={asset.height} 
            alt={logo.alt}
            onLoad={(element) => element.target.classList.remove("skeleton")}
          /> 
        : 
          null 
        }
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
    {cards.map((card, index) => {
      const asset = assetsHeadshot[`../assets/headshots/${card.photo}`]
      return (
        <div className="card card-side w-[32rem] bg-base-100 shadow-md" key={index}>
          <div className="avatar">
            <div className="w-36 rounded-sm">
              <img src={asset.src} width={asset.width} height={asset.height} alt={card.name} className="skeleton" onLoad={(event) => event.target.classList.remove("skeleton")}/>
            </div>
          </div>
          <div className="card-body">
            <p className="card-title text-lg">{card.name}</p>
            <p>{card.position}</p>
          </div>
        </div>
      )
    })}
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
    <a className="btn btn-primary text-lg font-bold" href={url} target='_blank' rel="noreferrer">{text}</a>
  </div>
)

const ContentLogo = ({logo, url, alt}) => (
  <div className='place-self-center xl:place-self-auto'>
    <a href={url} target='_blank' rel="noreferrer"><img src={logo} alt={alt} className='w-64'></img></a>
  </div>
)

const ContentQuoteCard = ({photo, name, quotes}) => {
  let asset
  if (photo) {
    asset = assets[`../assets/${photo}`]
  }
  return (
    <div className="card xl:card-side w-full bg-base-100 shadow-md">
      { photo
        ?
          <div className="avatar place-self-center pt-8 pl-0 xl:pl-8 xl:pt-0">
            <div className="w-36 h-36 rounded-xl">
              <img 
                src={asset.src}
                alt={`${name}`}
                width={asset.width}
                height={asset.height}
                className='skeleton'
                onLoad={(element) => element.target.classList.remove("skeleton")}
              />
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
}

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
              <a className="btn btn-primary text-lg font-bold" href={button.url} target='_blank' rel="noreferrer" key={index}>{button.text}</a>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
)

const Carousel = ({photos}) => (
  <div className="carousel carousel-center rounded-box p-1 space-x-1 bg-neutral">
    {photos.map(({assetName, alt}, index) => {
      const asset = assets[`../assets/${assetName}`]
      return (
        <div className="carousel-item w-8/12" key={index}>
          <img 
            src={asset.src} 
            width={asset.width} 
            height={asset.height} 
            alt={alt} 
            className='rounded-box skeleton'
            onLoad={(element) => element.target.classList.remove("skeleton")}
          />
        </div> 
      )
    })}
  </div>
)

const Timeline = ({items}) => (
  <ul className="timeline max-xl:timeline-compact timeline-snap-icon timeline-vertical">
    {items.map(({time, content, reference}, index, array) => (
      <li key={index}>
        {index === 0 ? null : <hr />}
        <div className="timeline-middle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <circle cx="10" cy="10" r="10" />
          </svg>
        </div>
        <div className={`${index & 1 ? 'timeline-end' : 'timeline-start xl:text-end'} mb-10`}>
          <time className="font-mono font-black text-lg">{time}</time>
          <ContentMD md={content} />
          <a href={reference} className="link text-sm" target="_blank" rel="noreferrer">Reference</a>
        </div>
        {index === array.length - 1 ? null : <hr />}
      </li>
    ))}
  </ul>
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
    case 'carousel':
      return <Carousel photos={content} />
    case 'imageHalfWidth':
      const asset = assets[`../assets/${content.assetName}`]
      return <div className='w-full hero'><img src={asset.src} height={asset.height} width={asset.width} alt={content.alt} className='skeleton rounded-box w-full xl:w-1/2' onLoad={(event) => event.target.classList.remove('skeleton')}/></div> 
    case 'html':
        return <div className='w-full' dangerouslySetInnerHTML={{__html: content}} />
    case 'timeline':
      return <Timeline items={content} />
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

const Table = ({columns, data, pageSizeOverride, heroContent=false}) => {
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
    defaultColumn: defaultColumn,
    initialState: pageSizeOverride ? {
      pagination: {
        pageSize: parseInt(pageSizeOverride)
      }
    } : {}
  })

  const pageIndex = table.getState().pagination.pageIndex
  const pageSize = table.getState().pagination.pageSize
  const startingRow = pageIndex * pageSize + 1
  const currentRows = table.getRowModel().rows
  const totalRowLength = table.getPrePaginationRowModel().rows.length

  const pageSelector = (
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
  )

  const recordCountSelector = (
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
  )

  return (
    <div className={`${heroContent ? "hero-content" : "p-10"} flex flex-col w-full items-center`}>
      <div className='w-full flex justify-around'>
        {pageSelector}
        {recordCountSelector}
      </div>
        <div className='w-fit max-w-full overflow-visible overflow-x-auto'>
        <table className='table table-zebra bg-base-300 table-sm table-auto'>
          <thead className='bg-base-200'>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th className={`align-top border-x border-gray-500/30 first:border-l-transparent last:border-r-transparent ${header.column.columnDef.meta?.className ? header.column.columnDef.meta?.className : ''}`} key={header.id} colSpan={header.colSpan}>
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
                              placeholder={header.column.columnDef.meta?.searchPlaceHolder ? header.column.columnDef.meta.searchPlaceHolder : 'Search...' }
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
                <tr key={row.id} className='h-full border-x'>
                  {row.getVisibleCells().map(cell => (
                    <td className={`h-full align-top border-x border-gray-500/30 first:border-l-transparent last:border-r-transparent ${cell.column.columnDef.meta?.className ? cell.column.columnDef.meta?.className : ''}`} key={cell.id}>
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
      <div className='w-full flex justify-around'>
        {pageSelector}
      </div>
    </div>
  )
}

const TextWithToolTip = ({text, tooltipHTML}) => (
  <div className="flex items-center relative w-fit">
      <div className="whitespace-nowrap pr-6" dangerouslySetInnerHTML={{__html: text}} />
        <div className="btn btn-circle btn-ghost btn-xs absolute right-0 tooltip flex" data-tooltip-id="react-tooltip" data-tooltip-html={tooltipHTML}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-4 w-4 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
  </div>
)

export { TitleText, SubtitleText, ContentMD, ContentYoutubeEmbed, Section, Table, TextWithToolTip }
