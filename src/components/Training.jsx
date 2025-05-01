import GPSTools from "./GPSTools"
import BioinformaticsTraining from "./BioinformaticsTraining"
import DragAndDropTools from "./DragAndDropTools"
import CommandLine from "./CommandLine"

const Training = () => (
  <div className="h-full">
    <section id="gps-tools"><GPSTools /></section>
    <section id="bioinformatics-training"><BioinformaticsTraining /></section>
    <section id="drag-and-drop-tools"><DragAndDropTools /></section>
    <section id="command-line"><CommandLine /></section>
  </div>
)

export default Training