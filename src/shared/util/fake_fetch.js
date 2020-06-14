// A simple `fetch` mock so we can unit test via node without extra dependencies

export default async function fetch() {
  return Promise.resolve({ status: 200 });
}
