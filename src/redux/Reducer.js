import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "./ActionType";

const init = {
  moviedata: [
    {
      id: Math.random(),
      posterUrl:
        "https://i.pinimg.com/originals/83/c9/34/83c9347d89f2418e4ac0e72bcfa95d25.jpg",
      rate: 2,
      title: "The CROODS 3",
      date: "December 2013",
      trailer: "https://www.youtube.com/embed/tlZaD3c9TeA",
      description:
        "The Croods is a popular movie series featuring the story of a caveman and his life. Although, the theme of the story seems quite outdated for the people and since we all are living in the hi-tech world and have access to everything, a caveman is something that most people are not used to. The Croods is one of the popular series by DreamWorks that features the story of the life and challenges faced by these people. ",
    },
    {
      id: Math.random(),
      posterUrl:
        "https://i.pinimg.com/564x/b4/21/c4/b421c462a3863ba0e02a8e73c97435d6.jpg",
      rate: 2,
      title: "BABY BOSS",
      date: "December 2017",
      trailer: "https://www.youtube.com/embed/k397HRbTtWI",
      description:
        "The first installment in The Boss Baby franchise, the plot follows a boy helping his baby brother who is a secret agent in the war for adults' love between babies and puppies. The Boss Baby premiered at the Miami International Film Festival on March 12, 2017, and was released in the United States on March 31.",
    },
    {
      id: Math.random(),
      posterUrl:
        "https://i.pinimg.com/564x/5e/f4/1e/5ef41eaf85e494cc3a66efbc2c155f8a.jpg",
      rate: 2,
      title: "Angry Birds",
      date: "November 2020",
      trailer: "https://www.youtube.com/embed/QRmKa7vvct4",
      description:
        "Angry Birds is a Finnish action-based media franchise created by Rovio Entertainment. The game series focuses on the eponymous flock of angry birds who try to save their eggs from green-colored pigs.",
    },
    {
      id: Math.random(),
      posterUrl:
        "https://i.pinimg.com/564x/6d/61/d0/6d61d0e22bbb368cb9c4a254b33d185e.jpg",
      rate: 2,
      title: "Tempête de boulettes géantes 2",
      date: "November 2016",
      trailer: "https://www.youtube.com/embed/C4MKKPAJ4dE",
      description:
        "Fantastic Beasts and Where to Find Them contains the history of magizoology and describes 85 magical species found around the world. Scamander says that he collected most of the information found in the book through observations made over years of travel across five continents",
    },
    {
      id: Math.random(),
      posterUrl:
        "https://i.pinimg.com/564x/39/50/57/395057a4dbf331addf26ab7b344a100f.jpg",
      rate: 2,
      title: "Bolt - Official",
      date: "November 2007",
      trailer: "https://www.youtube.com/embed/qgC3iNmZimY",
      description:
        "The Cat in the Hat is a tall anthropomorphic cat, who wears a red and white-striped hat and a red bow tie and sometimes has an umbrella with him mostly green, blue or red. He is a farm cat of Dr. Seuss's short story The Cat in the Hat",
    },
    {
      id: Math.random(),
      posterUrl:
        "https://i.pinimg.com/564x/6e/54/26/6e5426be1c6454ec15e5c3919f9907f1.jpg",
      rate: 2,
      title: "Turbo Official International",
      date: "November 2007",
      trailer: "https://www.youtube.com/embed/QULzGYRThH8",
      description:
        "Turbo is a 2013 American 3D computer-animated sports comedy film produced by DreamWorks Animation and distributed by 20th Century Fox. The film was directed by David Soren (in his feature directorial debut) from a screenplay he co-wrote with Darren Lemke and Robert Siegel.[8] It stars the voices of Ryan Reynolds, Paul Giamatti, Michael Peña, Snoop Dogg, Maya Rudolph, Bill Hader, Luis Guzmán, Ben Schwartz, Richard Jenkins, Ken Jeong, Michelle Rodriguez, and Samuel L. Jackson.[8",
    },
    {
      id: Math.random(),
      posterUrl:
        "https://i.pinimg.com/564x/7e/a0/55/7ea055b02549702c8cf50d528a2a520c.jpg",
      rate: 2,
      title: "Bug's Life",
      date: "November 2007",
      trailer: "https://www.youtube.com/embed/RnOXeOEMPHE",
      description:
        "Turbo is a 2013 American 3D computer-animated sports comedy film produced by DreamWorks Animation and distributed by 20th Century Fox. The film was directed by David Soren (in his feature directorial debut) from a screenplay he co-wrote with Darren Lemke and Robert Siegel.[8] It stars the voices of Ryan Reynolds, Paul Giamatti, Michael Peña, Snoop Dogg, Maya Rudolph, Bill Hader, Luis Guzmán, Ben Schwartz, Richard Jenkins, Ken Jeong, Michelle Rodriguez, and Samuel L. Jackson.[8",
    },
  ],
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case DELETE_MOVIE:
      return {
        ...state,
        moviedata: state.moviedata.filter((el) => el.id !== payload),
      };
    case ADD_MOVIE:
      return {
        ...state,
        moviedata: [...state.moviedata, payload],
      };
    case EDIT_MOVIE:
      return {
        ...state,
        moviedata: [
          ...state.moviedata.map((el) => (el.id === payload.id ? payload : el)),
        ],
      };

    default:
      return state;
  }
};
export default reducer;
