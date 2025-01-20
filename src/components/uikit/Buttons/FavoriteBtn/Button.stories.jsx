import { FavoriteBtn } from "./index";

export default {
  title: "FavoriteBtn",
  component: FavoriteBtn,
};

const Template = (arg) => <FavoriteBtn {...arg} />;

export const Default = Template.bind({});

Default.args = {
  isfavorite: true,
};
