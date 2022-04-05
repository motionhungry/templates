import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Button } from 'react-native';

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    disabled: false,
    title: 'Press Me',
    color: '#841584'
  },
  argTypes: { onPress: { action: 'pressed' } },
};

export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>;

export const Default: ButtonStory = (args) => <Button {...args} />;
