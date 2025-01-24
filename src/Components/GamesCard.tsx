
import { Game } from '../hooks/useGames'
import { Card, Heading, Image, CardBody, Text, HStack } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageurl from '../services/image-url'

interface Props{
  game: Game
}

const GamesCard = ({game}: Props) => {
  return (
    <Card width = '300px' borderRadius={10} overflow='hidden'>
      <Image src={getCroppedImageurl(game.background_image)} />
      <CardBody>
        <Heading fontSize='2xl' >{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>  
          <CriticScore score={game.metacritic}/>
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GamesCard