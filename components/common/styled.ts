import styled from 'styled-components/native'
import { View, Text } from 'styled-native-kit'
import theme from '../../theme'

export const ScreenContainer = styled(View)`
  flex: 1;
  padding: 0 ${theme.screenContainerPadding}px;
  margin-top: ${theme.baseline * 2};
`

export const ScreenHorizontalContainer = styled(View)`
  padding: 0 ${theme.screenContainerPadding}px;
`

interface ThemeNameProps {
  primary?: boolean
  secondary?: boolean
  tertiary?: boolean
}

interface CustomTextProps extends ThemeNameProps {
  light?: boolean
}

interface CustomViewProps extends ThemeNameProps {}

export const CustomText = styled(Text)`
  color: ${(props: CustomTextProps) =>
    props.light ? theme.background.lightOnColor : theme.background.onColor};
  ${(props: CustomTextProps) =>
    props.primary && `color: ${theme.primary.onColor}`}
  ${(props: CustomTextProps) =>
    props.secondary && `color: ${theme.secondary.onColor}`}
  ${(props: CustomTextProps) =>
    props.tertiary && `color: ${theme.tertiary.onColor}`}
`

export const CustomView = styled(View)`
  ${(props: CustomViewProps) =>
    props.primary && `background-color: ${theme.primary.color}`}
  ${(props: CustomViewProps) =>
    props.secondary && `background-color: ${theme.secondary.color}`}
  ${(props: CustomViewProps) =>
    props.tertiary && `background-color: ${theme.tertiary.color}`}
`

type ParagraphProps = {
  bold?: boolean
  regular?: boolean
}

export const Paragraph = styled(CustomText)`
  font-family: ${(props: ParagraphProps) =>
    props.bold ? theme.fonts.MontserratBold : theme.fonts.MontserratMedium};
  ${props => props.regular && `font-family: ${theme.fonts.MontserratRegular}`}
  font-size: ${props => props.fontSize || 16};
`

const BaseHeading = styled(CustomText)``

export const Heading1 = styled(BaseHeading)``

export const Heading2 = styled(BaseHeading)``

export const Heading3 = styled(BaseHeading)``

export const Heading4 = styled(BaseHeading)``

export const Heading5 = styled(BaseHeading)``

export const Heading6 = styled(BaseHeading)``
