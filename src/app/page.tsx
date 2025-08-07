import FlipCard from "@/components/flipcard/flipcard";

export default function Home() {
  const front="Welcome to Flash Cards! Click to flip over and learn more.";
   const back="Browse and search, community created, fully interactive flash card sets. Register and login to create custom sets and start learning! ";
  return (
    <div className="text-center flex-1  pt-12">
      <div></div>
        
      <FlipCard front={front} back={back}/>
      <div></div>
    
    </div>
  );
}
