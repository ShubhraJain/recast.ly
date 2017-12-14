class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videoList: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
      
    };
    this.onClick = this.onClick.bind(this);
  }
  
  onClick(val) {
    console.log('this: ', this, 'val: ', val);
    this.setState({
      currentVideo: this.state.videoList[2]
    });
  }
  
  render() {
    //console.log(window.exampleVideoData)
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} click={this.onClick}/>
        </div>
      </div>
    </div>);
  }
}
  
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


