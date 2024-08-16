import z from 'zod'

const parameterSchema = z.object({
  name: z.string().min(1, { message: 'This field has to be filled.' }),
  description: z.string().min(1, { message: 'This field has to be filled.' }),
  indicator: z.string().min(1, { message: 'This field has to be filled.' }),
  unit: z.string().min(1, { message: 'This field has to be filled.' }),
  price: z.string().min(1, { message: 'This field has to be filled.' }).transform((id) => parseInt(id)),
  id_category: z.string().min(1, { message: 'This field has to be filled.' }).transform((id) => parseInt(id))
})

export function validateParameter (object) {
  return parameterSchema.safeParse(object)
}

export function validatePartialParameter (object) {
  return parameterSchema.partial().safeParse(object)
}
