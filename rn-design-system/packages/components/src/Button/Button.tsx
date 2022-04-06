import { TouchableOpacity, Text } from '@rn-design-system/core';
import { MarginProps } from 'styled-system';

type ButtonProps = {
  label: string;
  onPress: () => void;
} & MarginProps;

export const Button = ({
  label,
  onPress,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      backgroundColor="gray"
      onPress={onPress}
      padding={2}
      {...props}
    >
      <Text color="white" textAlign="center">
        {label}
      </Text>
    </TouchableOpacity>
  );
};
