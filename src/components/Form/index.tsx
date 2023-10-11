import { ErrorMessage, FormContainer } from "./style";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .regex(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i, {
      message: 'Usuário inválido',
    })
})

type claimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<claimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema)
  })

  function handleClaimUsername(data: claimUsernameFormData) {
    console.log(data)
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit(handleClaimUsername)}>
        <input type="text" placeholder="Enter a github username" {...register('username')} />
        <button type="submit">Buscar</button>
      </FormContainer>
      <ErrorMessage>
        {errors.username && errors.username.message}
      </ErrorMessage>
    </>
  )
}