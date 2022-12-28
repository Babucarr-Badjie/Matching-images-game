import "./SingleImage.css";

export default function SingleImage({image}) {
  return (
    <div className="image" >
      <div>
        <img className="front" src={image.src} alt="card front" />
        <img className="backside" src="/images/cover.png" alt="back" />
      </div>
    </div>
  );
}
