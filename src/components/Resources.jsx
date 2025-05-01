import Overview from "./Overview"
import Countries from "./Countries"
import GPSPipline from "./GPSPipeline"
import IsolateBankRequest from "./IsolateBankRequest"


const Resources = () => (
  <div className="h-full">
    <section id="overview"><Overview /></section>
    <section id="countries"><Countries /></section>
    <section id="gps-pipeline"><GPSPipline /></section>
    <section id="isolate-bank-request"><IsolateBankRequest /></section>
  </div>
)

export default Resources
