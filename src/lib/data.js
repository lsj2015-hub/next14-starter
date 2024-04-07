// TE<PORARY DATA
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

const posts = [
  { id: 1, title: 'Post 1', body: '111.......', userId: 1 },
  { id: 2, title: 'Post 2', body: '222.......', userId: 1 },
  { id: 3, title: 'Post 3', body: '333.......', userId: 2 },
  { id: 4, title: 'Post 4', body: '444.......', userId: 2 },
];

export const getPosts = async () => {
  return posts;
};

export const getPost = async (id) => {
  const post = posts.find((post) => post.id === parseInt(id));
  return post;
};

export const getUsers = async () => {
  return users;
};

export const getUser = async (userId) => {
  const user = users.find((user) => user.id === parseInt(userId));
  return user;
};
