import sanityClient from './sanity';
let sanityQuery = (query,params) => sanityClient.fetch(query, params);

export const getFeaturedRestanrants = () =>{
    return sanityQuery(`
        *[_type=='featured']{
            ...,
            restaurants[]->{
            ...,
            dishes[] ->{
                ...
            },
            type ->{
            name
            }
            }
        }
    `)
}

export const getCategories = () =>{
    return sanityQuery(`
        *[_type=='category']
    `);
}

export const getFeaturedRestanrantsById = id =>{
    return sanityQuery(`
        *[_type=='featured' && _id == $id]{
            ...,
            restaurants[]->{
                ...,
                dishes[] ->{
                    ...
                },
                type ->{
                name
                }
                }
        }[0]
    `,{id})
}

export const getAllDish = () => {
    return sanityQuery(`
    *[_type=='featured']{
        ...,
        dishes[] ->{
          ...
        },
        type ->{
          name
        }
      }
    `)
}

export const getRestaurantName = () => {
    return sanityQuery(`
    *[_type=='resturant']{
        name,
        description,
        type->{
          name
        }
      }
    `)
}

export const getAllFeaturedDishes = () => {
    return sanityQuery(`
    *[_type=='dish']
    `)
}