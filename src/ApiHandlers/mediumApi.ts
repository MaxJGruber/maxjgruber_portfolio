import axios from "axios";

export async function getMediumFeed() {
  try {
    const mediumRssFeed = "https://medium.com/feed/web-enveloping";
    const rssToJsonApi = "https://api.rss2json.com/v1/api.json";
    const parameters = { params: { rss_url: mediumRssFeed } };
    const { data } = await axios.get(rssToJsonApi, parameters);
    return data;
  } catch (error) {
    console.error(error);
  }
}
