import Section1 from "./components/Section-1/Section1";
import Section2 from "./components/Section-2/Section2";
const App = () => {
const users = [
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "This platform exceeded my expectations. The service was fast, reliable, and incredibly easy to use.",
    tag: "Satisfied",
  },
  {
    img: "https://images.unsplash.com/photo-1618491558456-9147fe305c2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "I struggled to find a solution that met my needs. Many services simply overlooked important features.",
    tag: "Underserved",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro:
      "After trying several alternatives, I finally found a service that delivers quality, convenience, and value.",
    tag: "Loyal Customer",
  },
  {
  img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  intro:
    "The ordering process was seamless, and customer support was quick to help whenever I had questions.",
  tag: "Happy Customer",
},
{
  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop",
  intro:
    "Great variety, fair prices, and consistently excellent service. It's become my go-to choice.",
  tag: "Regular Customer",
},
];

  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  );
};

export default App;
