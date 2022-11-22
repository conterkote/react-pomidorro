import TimeSelector from "./TimeSelector";
import TaskList from "./TaskList";

export default function Today() {
    return (
        <div className="Today">
            <TimeSelector />
            <TaskList />
        </div>
    )
}