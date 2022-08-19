import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { ButtonHTMLAttributes, ReactNode } from "react"
import { color, Size } from "src/styles/theme"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    label: string
    size?: Size | 'xs'
    variant: 'outlined' | 'contained' | 'danger'
    icon?: ReactNode
}

const getheight = (size: Size | 'xs') => {
    return {
        lg: 32,
        md: 28,
        sm: 26,
        xs: 24
    }[size]
}

type StyledProps = Omit<ButtonProps, 'label'>

const ButtonBase = styled.button<StyledProps>(props => ({
    appearance:'none',
    borderRadius: 6,
    '&:active': {
        boxShadow: 'inset -1px 2px 2px rgba(0, 0, 0, 0.25)'
    },
    height: getheight(props.size || 'lg')
}))

const Outlined = styled(ButtonBase)<StyledProps>(props => ({
    backgroundColor: color.white.main,
    border: `solid 1px ${color.blue.main}`,
    '&:hover': {
        backgroundColor: color.blue.lighter
    },
    '&:active': {
        backgroundColor: color.white.main
    },
    color: color.blue.main,
}))

const Contained = styled(ButtonBase)<StyledProps>({
    backgroundColor: color.blue.main,
    '&:hover': {
        backgroundColor: (`${color.blue.main}E6`)
    },
    '&:active': {
        backgroundColor: color.blue.dark
    },
    color: color.white.main,
})

const Danger = styled(ButtonBase)<StyledProps>({
    backgroundColor: color.red.main,
    '&:hover': {
        backgroundColor: `${color.red.main}E6`
    },
    '&:active': {
        backgroundColor: color.red.dark
    },
    color: color.white.main
})

const StyledButton = (props: StyledProps) => {
    switch(props.variant){
        case 'contained':
            return <Contained {...props}/>
        case 'outlined':
            return <Outlined {...props}/>
        case 'danger': 
            return <Danger {...props}/>
    }
}


export const Button = ({variant, label, ...rest}: ButtonProps) => {
    const somehandler = () => {
        console.log('yeah!')
    } 
    return <StyledButton variant={variant} onClick={somehandler} {...rest}>{label}</StyledButton>
}
