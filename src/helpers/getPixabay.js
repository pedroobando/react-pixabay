export const getPixabay = async (name, page, per_page) => {
  const apiKey = '17879490-41740c2d1d6060e862bdbd387';
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${name}&image_type=photo&page=${page}&per_page=${per_page}`;

  const retValueApi = await fetch(url);
  const { hits } = await retValueApi.json();
  return hits.map((item) => {
    return item;
  });
};
