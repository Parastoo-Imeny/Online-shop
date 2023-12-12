import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

export const ProductCardSkeleton = () => {
  return (
    <Card width='16rem' margin='1rem'>
        <Skeleton height='20rem' />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}
