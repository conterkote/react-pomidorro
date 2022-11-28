import TimeSelector from "./TimeSelector";
import TaskList from "./TaskList";
import TaskInterface from "./TaskInterface";

export default function Today() {
    return (
        <div className="Today">
            <TimeSelector />
            <TaskInterface />
        </div>
    )
}