import Overview from "./Overview"
import Serortypes from "./Serotypes"
import IsolateBankRequest from "./IsolateBankRequest"

const About = () => (
  <div className="h-full">
    <section id="overview"><Overview /></section>
    <section id="serotypes"><Serortypes /></section>
    <section id="isolate-bank-request"><IsolateBankRequest /></section>
  </div>
)

export default About
