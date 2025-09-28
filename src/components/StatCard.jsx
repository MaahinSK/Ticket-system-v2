import "../styles/StatCard.css";
import vectorImage from '../../public/vector1.png';

export default function StatCard({ title, count, gradient, img }) {
  return (
    <div className={`stat-card ${gradient}`}>
      <div className="stat-content">
                {img && <img src={vectorImage} alt="vector" className="stat-img" />}
        <div>
          <h3>{title}</h3>
          <p>{count}</p>
        </div>
        {/* {img && <img src={vectorImage} alt="vector" className="stat-img" />} */}
      </div>
    </div>
  );
}
