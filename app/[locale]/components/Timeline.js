import './Styles/Timeline.css'; 

function Timeline() {
  return (
    <div className="timeline">
      <div className="container">
        <div className="timelineItem">
          <div className="timelineContent">
             <h3>2017</h3>
             <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="timelineItem">
           <div className="timelineContent">
             <h3>2018</h3>
             <p>Proin eu velit ut arcu fermentum.</p>
           </div>
        </div>

        <div className="timelineItem">
           <div className="timelineContent">
             <h3>2019</h3>
             <p>Sed cursus dictum magna.</p>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;