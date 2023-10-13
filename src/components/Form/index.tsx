import { ErrorMessage, FormContainer } from "./styles";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useContext } from 'react'
import { UserContext } from "../../contexts/User";

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .regex(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i, {
      message: 'Usuário inválido',
    })
})

type claimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function Form() {
  const { handleFetchUser } = useContext(UserContext)

  const { register, handleSubmit, formState: { errors } } = useForm<claimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema)
  })

  async function handleClaimUsername(data: claimUsernameFormData) {
    const { username } = data

    await handleFetchUser(username)
  }

  return (
    <>
      <FormContainer onSubmit={handleSubmit(handleClaimUsername)}>
        <input type="text" placeholder="Nome de usuário" {...register('username')} />
        <button type="submit">Buscar</button>
      </FormContainer>
      <ErrorMessage>
        {errors.username && errors.username.message}
      </ErrorMessage>
    </>
  )
}