import Lineages from "./Lineages"
import GPSCSTLookupTable from "./GPSCSTLookupTable"
import PMENClones from "./PMENClones"
import GPSCTopTrumps from "./GPSCTopTrumps"

const GPSC = () => (
  <div className="h-full">
    <section id="lineages"><Lineages /></section>
    <section id="gpsc-st-lookup-table"><GPSCSTLookupTable /></section>
    <section id="pmen-clones"><PMENClones /></section>
    <section id="gpsc-top-trumps"><GPSCTopTrumps /></section>
  </div>
)

export default GPSC