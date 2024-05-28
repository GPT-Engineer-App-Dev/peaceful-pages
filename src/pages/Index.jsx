import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={8} direction={{ base: "column", md: "row" }}>
        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 4 }}>
          <VStack spacing={8} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="md">Blog Post Title 1</Heading>
              <Text fontSize="sm" color="gray.500">January 1, 2023</Text>
              <Text mt={2}>This is a short description of the blog post content...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="md">Blog Post Title 2</Heading>
              <Text fontSize="sm" color="gray.500">February 1, 2023</Text>
              <Text mt={2}>This is a short description of the blog post content...</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Link href="#" color="blue.500">Recent Post 1</Link>
            <Link href="#" color="blue.500">Recent Post 2</Link>
            <Link href="#" color="blue.500">Recent Post 3</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" mt={8} py={4} bg="gray.800" color="white">
        <Flex justifyContent="center" mb={4}>
          <HStack spacing={4}>
            <Link href="#" isExternal><FaTwitter /></Link>
            <Link href="#" isExternal><FaFacebook /></Link>
            <Link href="#" isExternal><FaInstagram /></Link>
          </HStack>
        </Flex>
        <Text textAlign="center">© 2023 My Blog. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;