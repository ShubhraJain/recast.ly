class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
      //query: ''
    };
    //this.onClick = this.onClick.bind(this);
  }
  
  componentDidMount() {
    this.searchYouTube('kitten videos');
  }
  
  querySearch(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };
    
    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: vidoes,
        currentVideo: videos[0]
      });
    });
    
  }
  
  selectVideoEntry(val) {
    this.setState({
      currentVideo: val
    });
  }
  
  render() {
    //console.log(window.exampleVideoData)
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search querySearch={this.searchYouTube.bind(this)}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList 
          selectVideoEntry={this.selectVideoEntry.bind(this)}
          videos={this.state.videoList} 
          />
        </div>
      </div>
    </div>);
  }
}
  
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


// 