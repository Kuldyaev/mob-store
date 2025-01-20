import { CheckBox } from "./index";

export default {
  title: "CheckBox",
  component: CheckBox,
};

interface CheckBoxProps {
  checked: boolean;
  changeValue: (x: boolean) => void;
}

const Template = (args: CheckBoxProps) => <CheckBox {...args} />;

export const Default = Template.bind({
  checked: false,
});
