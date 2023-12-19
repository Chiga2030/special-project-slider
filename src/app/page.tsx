import { END_POINTS } from "@/shared/constants/endPoints"


const getMaterials = () => {
  return fetch(END_POINTS.getMaterials).then((response) => {
    return response.json()
  })
}



export default async function Home () {
  const allMaterials = await getMaterials()

  return (
    <main>

    </main>
  )
}
