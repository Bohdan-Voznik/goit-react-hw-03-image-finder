export default class ImagesApiService {
  constructor() {
    this.searchTag = '';
    this.page = 1;
    this.hits = null;
  }

  async fetchImagesByTag() {
    const axios = require('axios').default;
    const options = {
      method: 'get',
      url: 'https://pixabay.com/api/',
      params: {
        key: '25151398-d1679d24a13d5d70733aed927',
        q: this.searchTag,
        image_type: 'photo',
        per_page: 14,
        page: this.page,
        orientation: 'horizontal',
        safesearch: true,
      },
    };

    const serchResult = await axios(options);
    this.incrementHits();
    this.incrementPage();
    return serchResult.data;
  }

  incrementHits() {
    this.hits = this.page * 14;
  }

  incrementPage() {
    this.page += 1;
  }

  resetSerch(tag) {
    this.page = 1;
    this.hits = null;
    this.searchTag = tag;
  }

  get imagesCounnt() {
    return this.hits;
  }
}
