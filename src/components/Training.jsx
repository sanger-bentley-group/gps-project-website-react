import Tutorials from "./Tutorials"
import BioinformaticsTraining from "./BioinformaticsTraining"
import DragAndDropTools from "./DragAndDropTools"
import CommandLine from "./CommandLine"

const Training = () => (
  <div className="h-full">
    <section id="tutorials"><Tutorials /></section>
    <section id="command-line"><CommandLine /></section>
    <section id="drag-and-drop-tools"><DragAndDropTools /></section>
    <section id="bioinformatics-training"><BioinformaticsTraining /></section>
  </div>
)

export default Training