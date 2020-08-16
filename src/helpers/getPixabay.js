export const getPixabay = async (name, page, per_page) => {
  const apiKey = '17879490-41740c2d1d6060e862bdbd387';
  const words = name.replace(' ', '+');

  const url = `https://pixabay.com/api/?key=${apiKey}&q=${words}&image_type=photo&page=${page}&per_page=${per_page}`;

  if (name.trim().length <= 2) {
    return [];
  }
  const retValueApi = await fetch(url);
  const { hits } = await retValueApi.json();
  return hits.map((item) => {
    return { ...item };
  });
};
