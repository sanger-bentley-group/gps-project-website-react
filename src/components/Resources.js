import Overview from "./Overview"
import Lineages from "./Lineages"
import GPSCSTLookupTable from "./GPSCSTLookupTable"
import Serortypes from "./Serotypes"
import PMENClones from "./PMENClones"
import IsolateBankRequest from "./IsolateBankRequest"

const About = () => (
  <div className="h-full">
    <section id="overview"><Overview /></section>
    <section id="countries"></section>
    <section id="lineages"><Lineages /></section>
    <section id="gpsc-st-lookup-table"><GPSCSTLookupTable /></section>
    <section id="serotypes"><Serortypes /></section>
    <section id="pmen-clones"><PMENClones /></section>
    <section id="isolate-bank-request"><IsolateBankRequest /></section>
  </div>
)

export default About
