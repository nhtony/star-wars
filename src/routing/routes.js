import ListCharacter from "../views/Characters/List";
import DetailCharacter from "../views/Characters/Detail";

export default {
  characters: {
    path: "/",
    Component: ListCharacter,
    exact: true,
  },
  charactersDetail: {
    path: "/:id",
    Component: DetailCharacter,
  },
};
