import React, { useId } from 'react'
import './Checkbox.css'

interface Props {
    label?: React.ReactNode
    checked?: boolean
    disabled?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = ({ label, checked = false, disabled = false, onChange }: Props) => {
    const id = useId()

    return (
        <div className="checkbox">
            <input
                id={id}
                type="checkbox"
                className="checkbox__input"
                checked={checked}
                disabled={disabled}
                onChange={onChange}
            />
            <label htmlFor={id} className="checkbox__label">
                <span className="checkbox__check" />
                {label && <span className="checkbox__text">{label}</span>}
            </label>
        </div>
    )
}
