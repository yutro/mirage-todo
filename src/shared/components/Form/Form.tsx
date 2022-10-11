import React, {PropsWithChildren} from "react";
import {useForm, UseFormReturn} from "react-hook-form";
import {UseFormProps} from "react-hook-form/dist/types";
import {FieldValues} from "react-hook-form/dist/types/fields";
import {UseFormHandleSubmit} from "react-hook-form/dist/types/form";

type FormProps<FormValues extends Object, FormContext extends Object = {}> = PropsWithChildren<UseFormProps<FormValues>> & {
    onSubmit: (formHandlers: UseFormReturn<FormValues, FormContext>) => UseFormHandleSubmit<FormValues>
    onError?: (formHandlers: UseFormReturn<FormValues, FormContext>) => (formValues: FormValues) => void
    context?: FormContext
}

const Form = <FormValues extends FieldValues, FormContext>({
  children,
  onSubmit,
  onError,
  ...formProps
}: FormProps<FormValues>): JSX.Element => {
    const formHandlers = useForm(formProps)

    return (
        <form onSubmit={(e) => {
            formHandlers.handleSubmit(onSubmit, )
        }} onError={onError?.(formHandlers)} className="p-">
            {children}
        </form>
    )
}