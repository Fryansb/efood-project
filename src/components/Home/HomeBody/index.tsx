import { useGetRestaurantsQuery } from '../../../store/api/api'
import { Card } from '../../SubComponents/Card'
import { HomeBodyContainer, BodyContainer, Loading } from './styles'

export const Body = () => {
  const { data, isLoading } = useGetRestaurantsQuery()

  console.log('Restaurants data:', data)

  return (
    <BodyContainer>
      <div className="container">
        {isLoading ? <Loading>{<h1>Loading...</h1>}</Loading> : ''}
        <HomeBodyContainer>
          {data?.map((RestaurantItem) => {
            if (!RestaurantItem?.id) return null
            return (
              <Card
                key={RestaurantItem.id}
                image={RestaurantItem.capa}
                title={RestaurantItem.titulo}
                rating={RestaurantItem.avaliacao}
                desc={RestaurantItem.descricao}
                link={`/restaurant/${RestaurantItem.id}`}
              />
            )
          })}
        </HomeBodyContainer>
      </div>
    </BodyContainer>
  )
}
