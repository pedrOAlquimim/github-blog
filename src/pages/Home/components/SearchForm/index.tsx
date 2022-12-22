import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

interface SearchFormProps {
  fetchPosts: (query?: string) => Promise<void>
}

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm({ fetchPosts }: SearchFormProps) {
  const { handleSubmit, register } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPost(data: SearchFormInputs) {
    await fetchPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPost)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
