const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjQ1OWZkMzlkODU0MWFhMDYwM2UyMTEzZTczZDUyZSIsIm5iZiI6MTc1NjQxMzMzNi43OTgsInN1YiI6IjY4YjBiZDk4NTZmYjdlM2MwYjBmOTEwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FUkrFsIGBqo13-1K0wr8vJbmwVsgHL64VG5lYFguKKE";
export async function getFilmes() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1`,
    {
      method: "GET",
      headers: {
        Authorization: API_KEY,
        "Content-Type": "application/json",
      },
    }
  );

  const { data } = await response.json();
  return data;
}

export async function getFilmeById(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: API_KEY,
        "Content-Type": "application/json",
      },
    }
  );

  const { data } = await response.json();
  return data;
}