import Container from "../components/container";
import TaskSummary from "../core-component/task-summery";
import TasksList from "../core-component/tasks-list";

export default function PageHome(){
    return(
    <Container as="article" className="space-y-3">
    <header className="flex items-center justify-between">
        <TaskSummary />
    </header>
    <TasksList />
    </Container>
    ) 
}