import React from 'react'
import { FieldError, useController, useFormContext } from 'react-hook-form'

import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import { TInputBaseProps } from './types'

type TCheckboxFieldOwnProps = {
  config?: RegisterOptions
}

type TCheckboxFieldProps<TData> = TInputBaseProps<TData> &
  TCheckboxFieldOwnProps

export const CheckboxField = <TData,>({
  name,
  children,
  ...props
}: TCheckboxFieldProps<TData>): JSX.Element => {
  const { control } = useFormContext()
  const { field, fieldState } = useController({
    control,
    // @ts-expect-error library broken type
    defaultValue: false,
    name: name as never
  })

  const fieldError = fieldState.error as unknown as FieldError | undefined

  return (
   <div>
     <input type="checkbox"
            {...props}
            {...field}
            checked={field.value}
     >
       {children}
     </input>
     {fieldError?.message && <span>
        {fieldError.message}
      </span>}</div>
  )
}
