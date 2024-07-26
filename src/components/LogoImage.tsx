// this is in case we want to expand upon it later, i would have just done <img> otherwise

interface LogoImageProps {
  source: string
}

function LogoImage({ source }: LogoImageProps) {
  return (
    <img src={source}></img>
  );
}

export default LogoImage;
