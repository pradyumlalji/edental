import "./BlogLeftContainer.css";

function BlogLeftContainer() {
  return (
    <div className="LeftContainer">
      {/* <h2>Learn more about your Health</h2> */}
      <div className="box1">
        <div className="ImgContainer">
          <img src="./BoxImg.jpg" alt="" className="BoxImg" />
        </div>
        <div className="BoxContent">
          <h3>Beating bad breadth-cause</h3>
          <div className="paragragh">
            <p>
              Bad breath or halitosis, is a very common oral health problem..
            </p>
          </div>
          <p className="date">01 Feb 2021</p>
        </div>
      </div>
      <div className="box1">
        <div className="ImgContainer">
          <img src="./BoxImg.jpg" alt="" className="BoxImg" />
        </div>
        <div className="BoxContent">
          <h3>How bad is using a toothpi..</h3>
          <div className="paragragh">
            <p>Wooden toothpicks have been around for thousands of years ..</p>
          </div>
          <p className="date">01 Feb 2021</p>
        </div>
      </div>
      <div className="box1">
        <div className="ImgContainer">
          <img src="./BoxImg.jpg" alt="" className="BoxImg" />
        </div>
        <div className="BoxContent">
          <h3>Maintaing Good Oral Hyg..</h3>
          <div className="paragragh">
            <p>It's important for you to know to of braces throughtout..</p>
          </div>
          <p className="date">01 Feb 2021</p>
        </div>
      </div>
    </div>
  );
}

export default BlogLeftContainer;
