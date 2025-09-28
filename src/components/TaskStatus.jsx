import "../styles/TaskStatus.css";

export default function TaskStatus({ tasks, onComplete }) {
  if (!tasks || tasks.length === 0) return (
    <div className="task-box">
      <h4>Task Status</h4>
      <p className="no-task">No in-progress tasks</p>
    </div>
  );

  return (
    <div className="task-box">
      <h4>Task Status</h4>
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <h5>{task.title}</h5>
          {/* Removed the description paragraph */}
          <button onClick={() => onComplete(task)}>Complete</button>
        </div>
      ))}
    </div>
  );
}