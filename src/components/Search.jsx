// var Search = () => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div> 
// );

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    
  }
    
  searchQuery(query) {
    console.log('query-ed');
    this.setState({
      query: query
    });
  }
  
  
  render() {
    console.log(this.searchQuery);
    return (<div className="search-bar form-inline">
          <input className="form-control" type="text" 
                  query = {this.state.query} 
                  onClick={(query) => this.searchQuery}
          />
          <button className="btn hidden-sm-down"
            >
            <span className="glyphicon glyphicon-search"
            ></span>
          </button>
        </div>); 
  }
  
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
