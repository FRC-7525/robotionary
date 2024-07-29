
interface MatchResultsProps {
  username: string;
  teamName: string;
  teamImageSource: string;
  drawingImage: any; // idk what type
}

function MatchResults({ username, teamName, teamImageSource, drawingImage }: MatchResultsProps) {
  return (
    <>
      <div>
        <h3> {username} won! </h3>
        <h3> The team was {teamName}! </h3>
      </div>

      <img src={teamImageSource} />

      <img src={drawingImage} />
    </>
  );
};

export default MatchResults;
