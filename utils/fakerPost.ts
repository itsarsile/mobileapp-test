import {faker} from '@faker-js/faker';
import * as fs from 'fs';

interface Post {
  id: string;
  author: string;
  avatar: string;
  postImage: string;
  content: string;
  date: Date;
  upvote: number;
  downvote: number;
}

const Posts: Post[] = [];

for (let i = 0; i < 50; i++) {
  const post: Post = {
    id: faker.string.nanoid(),
    author: faker.person.firstName(),
    avatar: faker.image.avatar(),
    postImage: faker.image.url(),
    date: faker.date.anytime(),
    content: faker.lorem.sentences({min: 30, max: 200}),
    upvote: faker.number.int({min: 0, max: 100}),
    downvote: faker.number.int({min: 0, max: 100}),
  };

  Posts.push(post);
}

fs.writeFile('utils/mock/posts.json', JSON.stringify(Posts, null, 2), err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Post has been written to posts.json');
  }
});
