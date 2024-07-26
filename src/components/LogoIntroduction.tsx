import LogoImage from '../components/LogoImage';

interface LogoIntroProps {
  teamNumber: number;
  teamName: string;
  teamImageSource: string; 
}

function LogoIntroduction({ teamNumber, teamName, teamImageSource }: LogoIntroProps) {
  return (
    <>
      <h1 className="title center"> You'll be drawing... </h1>

      <div className="center">
        <LogoImage source={teamImageSource} />
      </div>

      <h2 className="teamText center"> Team {teamNumber}: {teamName} </h2>
    </>
  );
};

export default LogoIntroduction;
