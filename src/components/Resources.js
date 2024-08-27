import Overview from "./Overview"
import Countries from "./Countries"
import Lineages from "./Lineages"
import GPSCSTLookupTable from "./GPSCSTLookupTable"
import Serortypes from "./Serotypes"
import PMENClones from "./PMENClones"
import IsolateBankRequest from "./IsolateBankRequest"
import GPSCTopTrumps from "./GPSCTopTrumps"

const About = () => (
  <div className="h-full">
    <section id="overview"><Overview /></section>
    <section id="countries"><Countries /></section>
    <section id="lineages"><Lineages /></section>
    <section id="gpsc-st-lookup-table"><GPSCSTLookupTable /></section>
    <section id="serotypes"><Serortypes /></section>
    <section id="pmen-clones"><PMENClones /></section>
    <section id="isolate-bank-request"><IsolateBankRequest /></section>
    <section id="gpsc-top-trumps"><GPSCTopTrumps /></section>
  </div>
)

export default About
