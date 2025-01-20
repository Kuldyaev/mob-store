import { Button } from "./index";

export default {
  title: "Button",
  component: Button,
};

const Template = (arg) => <Button {...arg} />;

export const Default = Template.bind({});

Default.args = {};
