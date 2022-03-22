export const fetchImagesByTag = async (tag, page) => {
  const axios = require('axios').default;
  const options = {
    method: 'get',
    url: 'https://pixabay.com/api/',
    params: {
      key: '25151398-d1679d24a13d5d70733aed927',
      q: tag,
      image_type: 'photo',
      per_page: 12,
      page: page,
      orientation: 'horizontal',
      safesearch: true,
    },
  };

  const serchResult = await axios(options);
  const { hits, totalHits } = serchResult.data;
  const totalPages = Math.ceil(totalHits / options.params.per_page);

  const resultHits = hits.map(hit => {
    return {
      id: hit.id,
      webformatURL: hit.webformatURL,
      largeImageURL: hit.largeImageURL,
      tags: hit.tags,
      likes: hit.likes,
      views: hit.views,
      comments: hit.comments,
      downloads: hit.downloads,
    };
  });

  return { hits: resultHits, totalPages, totalHits };
};
