import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import FormrunSubmitButton from './FormrunSubmitButton'

const CANCEL_PRIMARY_COLOR = '#555'
const CANCEL_SECONDARY_COLOR = '#fff'

const SEND_PRIMARY_COLOR = '#d24154'
const SEND_SECONDARY_COLOR = '#fff'

export function useFormrun(onLoad: () => void) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://sdk.form.run/js/v2/formrun.js'
    script.onload = () => {
      const formrun = (window as any).Formrun
      formrun?.init('.formrun')
      return onLoad()
    }
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
}

interface Props {
  onCancel(): void
  to: string
}

export default function FormrunForm({ onCancel, to }: Props) {
  const [ready, setReady] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useFormrun(() => {
    setReady(true)
  })

  return (
    // <!-- className, action, methodを変更しないでください -->
    <Form
      style={ready ? { visibility: 'visible' } : { visibility: 'hidden' }}
      target="_brank"
      className="formrun"
      action="https://form.run/api/v1/r/g1lxhcbdn3q5kikb1c487cku"
      method="post"
      ref={formRef}
    >
      {/* <!-- ↓自由に要素を追加・編集することができます --> */}
      <Header>
        <Title>ご意見・ご感想</Title>
        <Description>部員が精一杯作った作品に対してぜひご意見・ご感想をお寄せください！</Description>
      </Header>

      <HiddenData>
        <input type="text" name="送り先" data-formrun-required defaultValue={to} />
      </HiddenData>

      <InputWrapper>
        <TextArea name="ご意見・ご感想" data-formrun-required rows={5} />
      </InputWrapper>

      <InputWrapper>
        <Label>
          入力内容の公開に関する同意
          <input type="checkbox" name="入力内容の公開に関する同意" data-formrun-required />
        </Label>
        <Description>
          入力内容は応用数学研究部内で公開されます。個人情報や誹謗中傷などの入力はお控えください。
        </Description>
      </InputWrapper>

      {/* <!-- ボット投稿をブロックするためのタグ --> */}
      <HiddenData>
        <label htmlFor="_formrun_gotcha">If you are a human, ignore this field</label>
        <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabIndex={-1} />
      </HiddenData>

      <ButtonWrapper>
        <FormrunSubmitButton color={{ primary: SEND_PRIMARY_COLOR, secondary: SEND_SECONDARY_COLOR }}>
          送信
        </FormrunSubmitButton>
        <Button
          mode="button"
          color={{ primary: CANCEL_PRIMARY_COLOR, secondary: CANCEL_SECONDARY_COLOR }}
          onClick={() => onCancel()}
        >
          キャンセル
        </Button>
      </ButtonWrapper>
    </Form>
  )
}

const Form = styled.form`
  position: relative;
  z-index: 0;
  display: grid;
  gap: 24px;
  padding: 16px;
`

const HiddenData = styled.div`
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
`

const InputWrapper = styled.div`
  display: grid;
  gap: 8px;
`

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
`

const Description = styled.div`
  font-size: 14px;
`

const TextArea = styled.textarea`
  padding: 8px;
  font-size: 14px;
`

const ButtonWrapper = styled.div`
  display: grid;
  gap: 8px;
  justify-items: end;
`

const Header = styled.div`
  display: grid;
  gap: 8px;
  justify-items: center;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`
