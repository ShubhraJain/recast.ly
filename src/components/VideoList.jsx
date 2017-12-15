var VideoList = ({videos, selectVideoEntry}) => (
  <div className="video-list">
    {videos.map(video =>
    <VideoListEntry
      key={video.etag}
      video={video}
      //img={video.snippet.thumbnails.url}
      selectVideoEntry={selectVideoEntry}
    />
    )}
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
