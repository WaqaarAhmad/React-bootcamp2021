import './App.css';




function MediaCard({title,body,imageURL}) {
  return (
    <div className="MediaCard">
     
      <h2>{title}</h2>
      <p>{body}</p>
      <img src={imageURL} alt="any image"/>
      
    </div>
  );
}

export default MediaCard;