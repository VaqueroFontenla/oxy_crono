import { DatePicker as aDatePicker } from 'antd'
import { transparentize } from 'polished'
import styled, { css } from 'styled-components'
import { colors, font } from 'ui/theme'

export const DatePicker = styled(aDatePicker)<{ disabled?: boolean; error?: boolean }>`
  && {
    color: ${colors.grayDarker};
    ${font.base};
    width: 100%;

    ${p =>
      p.disabled
        ? css`
            color: ${colors.grayDark};
            background: ${colors.blueLighter};
          `
        : css`
            &&:hover input {
              border-color: ${p.error ? colors.pink : colors.corporateBlue};
            }

            & input {
              border-color: ${p.error && colors.pink};
            }

            & input:focus {
              border-color: ${p.error ? colors.inputErrorFocus : colors.inputFocus};
              box-shadow: 0 0 0 2px ${transparentize(0.76)(p.error ? colors.inputErrorFocus : colors.inputFocus)};
            }
          `}
  }
`
