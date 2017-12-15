var searchYouTube = (options, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v4/search', {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max,
    type: options.video,
    videoEmbeddable: 'true'
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  }).fail(({responseJSON}) =>{
    responseJSON.error.errors.forEach((err) => console.error(err));
  });
};

window.searchYouTube = searchYouTube;
