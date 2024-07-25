import './LogoImage.css';

interface LogoImageProps {
  source: string
}

function LogoImage({ source }: LogoImageProps) {
  return (
    <img src={source}></img>
  );
}

export default LogoImage;
