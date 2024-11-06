import {defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Dish Name',
      validation: rule => rule.required()
    },
    {
      name: 'description',
      type: 'string',
      title: 'Dish description',
      validation: rule => rule.required()
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of dish'
    },
    {
        name: 'price',
        type: 'number',
        title: 'Prices of the dish'
    },
    {
        name: 'rating',
        type: 'number',
        title: 'Dish rating'
    }
  ],
})
