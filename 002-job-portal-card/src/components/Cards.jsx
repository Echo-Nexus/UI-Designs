import { Bookmark } from "lucide-react";

const Card = ({ job }) => {
  return (
    <div className="card">
      <div className="top">
        <img src={job.logo} alt={job.company} />
        <span>
          Save
          <Bookmark size={16} />
        </span>
      </div>

      <div className="middle">
        <p>
          <h3>{job.company}</h3>
          <span>{job.posted}</span>
        </p>

        <h2>{job.title}</h2>

        <span className="tag">{job.type}</span>
        <span className="tag">{job.level}</span>
      </div>

      <div className="bottom">
        <div>
          <h2>{job.salary}</h2>
          <span>{job.location}</span>
        </div>

        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
