import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { Button, Text } from 'blockchain-info-components'

const Title = styled.div`
  text-align: center;
  margin-bottom: 24px;
`
const Content = styled.div`
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
`
const ButtonContainer = styled.div`
  margin-top: 30px;
`

const InstallMcu = props => {
  const { closeAll } = props

  return (
    <React.Fragment>
      <Title>
        <Text size='16px' weight={400}>
          <FormattedMessage
            id='modals.lockboxfirmware.installmcu.title'
            defaultMessage='Step 4. Update MCU'
          />
        </Text>
      </Title>
      <Content />
      <ButtonContainer>
        <Button fullwidth nature='success' onClick={closeAll}>
          <FormattedMessage
            id='modals.lockboxfirmware.installmcu.continue'
            defaultMessage='Continue'
          />
        </Button>
      </ButtonContainer>
    </React.Fragment>
  )
}

export default InstallMcu