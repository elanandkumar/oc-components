import request from 'superagent';
import {giphy} from '../config';

export const data = (context, callback) => {
  const { name, topic: tag } = context.params;
  const { staticPath } = context;
  request
    .get(giphy.url)
    .query({tag})
    .end((err, res) => {
      callback(null, {
        imageUrl: res.body.data.image_url,
        name,
        staticPath
      });
    });
};
