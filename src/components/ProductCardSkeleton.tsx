import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

export const ProductCardSkeleton = () => {
  return (
    <Card>
        <Skeleton height='20rem' />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}
