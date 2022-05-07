import { Forms, Form_Errors, Input_Base } from "@interfaces"

export const buildFieldsErrors = <T extends Forms>(fieldsConfig: T): Form_Errors<T> => {
  const fieldsArr = Object.values(fieldsConfig) as [Input_Base]

  return fieldsArr.reduce<any>((acc, { id }) => {
    return {
      ...acc,
      [id]: { errorMessage: '' }
    }
  }, {})
}