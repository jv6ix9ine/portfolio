import { Card, Stack, HStack, Box, Avatar } from "@chakra-ui/react"
import { IoStar } from "react-icons/io5"

export default function Testimonials() {
  return (
    <div>Testimonials</div>
  )
}

const TestimonialCard = ({ item }: { item: Testimonial }) => {
  return (
    <Card.Root maxW="sm" h="full">
      <Card.Body>
        <Stack gap="3">
          <HStack gap="1">
            {[...Array(5)].map((_, i) => (
              <Box as={IoStar} key={i} color="orange.solid" />
            ))}
          </HStack>

          <Card.Description color="fg.muted" textStyle="md" minH="16">
            {item.content}
          </Card.Description>

          <HStack gap="3" mt="1">
            <Avatar.Root size="sm">
              <Avatar.Image src={item.avatar} />
              <Avatar.Fallback name={item.name} />
            </Avatar.Root>
            <Box textStyle="sm">
              <Box fontWeight="medium" color="fg">
                {item.name}
              </Box>
              <Box color="fg.muted">{item.role}</Box>
            </Box>
          </HStack>
        </Stack>
      </Card.Body>
    </Card.Root>
  )
}

interface Testimonial {
  name: string
  role: string
  rating: number
  avatar: string
  content: string
}

