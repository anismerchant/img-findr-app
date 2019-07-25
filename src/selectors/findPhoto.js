export const findPhoto = (photos, { descLookup }) => {
  return photos.filter( photo => {
      let alt_description;
      let description;
      if(!!photo.alt_description) {
        alt_description =  photo.alt_description.toLowerCase().includes(descLookup.toLowerCase())
      }
      if(!!photo.description) {
        description = photo.description.toLowerCase().includes(descLookup.toLowerCase())
      }
    return alt_description || description
  })
}  
