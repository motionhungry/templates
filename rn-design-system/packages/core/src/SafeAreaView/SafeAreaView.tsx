import styled from 'styled-components/native';

import { BoxProps, boxStyles } from '../Box';

const SafeAreaView = styled.SafeAreaView<BoxProps>`
  ${boxStyles}
`;

SafeAreaView.displayName = 'SafeAreaView';

export { SafeAreaView };
