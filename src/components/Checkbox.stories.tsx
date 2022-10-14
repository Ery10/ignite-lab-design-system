import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
            <div className='flex itens-center gap-2'>
                {Story()}
                <text size="sm">Lembrar-me de mim por 30 dias</text>
            </div>
            )
        }
    ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}