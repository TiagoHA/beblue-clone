import React from 'react'
import { useForm, useField } from 'react-final-form-hooks'
import { Input } from '../../../shared/shared.styles'
import { Form, FormButton } from './styles'
import { Add } from '../../styles'

export function FavoriteForm({ onSubmit }) {
  const onSubmitAndReset = values => {
    onSubmit(values)
    setTimeout(form.reset)
    setTimeout(form.initialize)
  }

  const { form, handleSubmit, submitting } = useForm({
    onSubmit: onSubmitAndReset,
    validate,
    initialValues,
  })
  const title = useField('title', form)
  const link = useField('link', form)
  const tags = useField('tags', form)

  return (
    <Form id="favoriteForm" onSubmit={handleSubmit}>
      <Input
        {...title.input}
        placeholder="Title"
        name="title"
        error={tags.meta.touched && tags.meta.error}
      />

      <Input
        {...link.input}
        placeholder="Link"
        name="link"
        error={tags.meta.touched && tags.meta.error}
      />

      <Input
        {...tags.input}
        placeholder="Tags"
        name="tags"
        error={tags.meta.touched && tags.meta.error}
      />
    </Form>
  )
}

const initialValues = {
  title: '',
  link: '',
  tags: '',
}

const validate = ({ title, link, tags }) => {
  const errors = {}
  if (!title) {
    errors.title = 'Required'
  }
  if (!link) {
    errors.link = 'Required'
  }
  if (!tags) {
    errors.tags = 'Required'
  }
  return errors
}
