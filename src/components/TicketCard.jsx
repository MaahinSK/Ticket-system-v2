import "../styles/TicketCard.css";

export default function TicketCard({ ticket, onSelect }) {
  return (
    <div className="ticket-card" onClick={() => onSelect(ticket)}>
      <div className="ticket-header">
        <h4>{ticket.title}</h4>
        <span className={`status ${ticket.status}`}>{ticket.status}</span>
      </div>
      <p className="ticket-id">Ticket ID: #{ticket.id}</p> {/* Add this line */}
      <p className="ticket-desc">{ticket.description}</p>
      <div className="ticket-footer">
        <span className={`priority ${ticket.priority}`}>{ticket.priority.toUpperCase()} PRIORITY</span>
        <span>{ticket.name}</span>
        <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
}