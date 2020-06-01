import fetch from 'node-fetch';

import Config from '../../config/environment/config';

/* import data1 from '../../test/data/videos.json';
import data2 from '../../test/data/video.json'; */

const videos = {

  fetchData: (url) => new Promise((resolve) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        resolve(json.items);
      })
      .catch((error) => {
        console.log(error);
        resolve({ error: 'problemas obteniendo los datos' });
      });
  }),

  getVideos: async ({ params: { maxResults } }, res) => {
    let url = 'https://www.googleapis.com/youtube/v3/search?order=date&part=snippet';
    url = `${url}&maxResults=${maxResults || 6}`;
    url = `${url}&channelId=${Config.get('youtubeV3.channelId')}`;
    url = `${url}&key=${Config.get('youtubeV3.apiKey')}`;
    const data = await videos.fetchData(url);
    res.json(data);
    // res.json(data1);
  },

  getVideoById: async ({ params: { videoId } }, res) => {
    let url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet';
    url = `${url}&id=${videoId}`;
    url = `${url}&key=${Config.get('youtubeV3.apiKey')}`;
    const data = await videos.fetchData(url);
    res.json(data);
    // res.json(data2);
  },
};

export default videos;
