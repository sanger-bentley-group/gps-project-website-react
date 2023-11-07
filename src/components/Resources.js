import Overview from "./Overview"
import GPSCSTLookupTable from "./GPSCSTLookupTable"
import Serortypes from "./Serotypes"
import PMENClones from "./PMENClones"
import IsolateBankRequest from "./IsolateBankRequest"

const About = () => (
  <div className="h-full">
    <section id="overview"><Overview /></section>
    <section id="gpsc-st-lookup-table"><GPSCSTLookupTable /></section>
    <section id="serotypes"><Serortypes /></section>
    <section id="pmen-clones"><PMENClones /></section>
    <section id="isolate-bank-request"><IsolateBankRequest /></section>
  </div>
)

export default About
