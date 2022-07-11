import USERS from './Users';

const POSTS = [
  {
    imageUrl:
      'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=',
    user: USERS[0].user,
    likes: 7870,
    caption: 'Munnar.',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'sai',
        comment: 'nice ',
      },
      {
        user: 'sasi',
        comment: 'Beautiful image',
      },
      {
        user: 'suresh',
        comment: 'nice capture ',
      },
    ],
  },
  {
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
    user: USERS[1].user,
    likes: 7870,
    caption: 'Ooty.',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'sai',
        comment: 'nice ',
      },
      {
        user: 'sasi',
        comment: 'Beautiful image',
      },
      {
        user: 'suresh',
        comment: 'nice capture ',
      },
    ],
  },
  {
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg',
    user: USERS[2].user,
    likes: 7870,
    caption: 'Kerala.',
    profile_picture: USERS[2].image,
    comments: [
      {
        user: 'sai',
        comment: 'nice ',
      },
      {
        user: 'sasi',
        comment: 'Beautiful image',
      },
      {
        user: 'suresh',
        comment: 'nice capture ',
      },
    ],
  },
];

export default POSTS;
