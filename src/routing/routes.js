import ListCharacter from "../views/Characters/List";

export default {
  characters: {
    path: "/",
    Component: ListCharacter,
    exact: true,
  },
  charactersDetail: {
    path: "/:id",
    Component: () => <h1>Detail Characters</h1>,
  },
};
