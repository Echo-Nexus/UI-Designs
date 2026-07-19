import "./App.css";
import Card from "./components/Cards";
const App = () => {
  const jobs = [
    {
      id: 1,
      company: "Amazon",
      logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      posted: "5 days ago",
      title: "Senior UI/UX Designer",
      type: "Part-Time",
      level: "Senior Level",
      salary: "$120/hr",
      location: "Mumbai, India",
    },
    {
      id: 2,
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png",
      posted: "2 days ago",
      title: "Frontend Developer",
      type: "Full-Time",
      level: "Mid Level",
      salary: "$100/hr",
      location: "Bangalore, India",
    },
    {
      id: 3,
      company: "Microsoft",
      logo: "https://toppng.com/uploads/preview/microsoft-logo-png-hd-11660471230b6nd5n6huh.png",
      posted: "1 week ago",
      title: "React Developer",
      type: "Remote",
      level: "Junior Level",
      salary: "$80/hr",
      location: "Hyderabad, India",
    },
    {
      id: 4,
      company: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png",
      posted: "3 days ago",
      title: "Product Designer",
      type: "Full-Time",
      level: "Senior Level",
      salary: "$150/hr",
      location: "Delhi, India",
    },
    {
      id: 5,
      company: "Spotify",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdvYiApQJofXpIjkMrJgetTXWz5wKapxKeg&s",
      posted: "6 days ago",
      title: "Backend Developer",
      type: "Remote",
      level: "Mid Level",
      salary: "$110/hr",
      location: "Pune, India",
    },
  ];
  return (
    <div className="parent">
      {jobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  );
};

export default App;
