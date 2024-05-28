import { useState } from "react";
import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider, Input, Textarea, Button, useColorMode, IconButton, useColorModeValue, useToast } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([
    { title: "Blog Post Title 1", date: "January 1, 2023", content: "This is a short description of the blog post content..." },
    { title: "Blog Post Title 2", date: "February 1, 2023", content: "This is a short description of the blog post content..." },
  ]);

  const [newPost, setNewPost] = useState({ title: "", date: "", content: "" });
  const [postToDelete, setPostToDelete] = useState(null);
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, newPost]);
    setNewPost({ title: "", date: "", content: "" });
  };

  const handleDelete = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
    toast({
      title: "Post deleted.",
      description: "The blog post has been deleted successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const confirmDelete = (index) => {
    setPostToDelete(index);
  };

  const cancelDelete = () => {
    setPostToDelete(null);
  };

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Container maxW="container.xl" p={4} bg={bg} color={color}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Contact</Link>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            variant="ghost"
            color="current"
          />
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={8} direction={{ base: "column", md: "row" }}>
        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 4 }}>
          <VStack spacing={8} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} p={4} shadow="md" borderWidth="1px">
                <Flex justifyContent="space-between" alignItems="center">
                  <Box>
                    <Heading as="h2" size="md">{post.title}</Heading>
                    <Text fontSize="sm" color="gray.500">{post.date}</Text>
                    <Text mt={2}>{post.content}</Text>
                  </Box>
                  <Button colorScheme="red" onClick={() => confirmDelete(index)}>Delete</Button>
                </Flex>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            {posts.slice(0, 3).map((post, index) => (
              <Link key={index} href="#" color="blue.500">{post.title}</Link>
            ))}
          </VStack>
        </Box>
      </Flex>

      {/* Add New Post Form */}
      <Box mt={8}>
        <Heading as="h3" size="md" mb={4}>Add New Post</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <Input
              placeholder="Title"
              name="title"
              value={newPost.title}
              onChange={handleInputChange}
            />
            <Input
              placeholder="Date"
              name="date"
              value={newPost.date}
              onChange={handleInputChange}
            />
            <Textarea
              placeholder="Content"
              name="content"
              value={newPost.content}
              onChange={handleInputChange}
            />
            <Button type="submit" colorScheme="blue">Add Post</Button>
          </VStack>
        </form>
      </Box>

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

      {/* Delete Confirmation Modal */}
      {postToDelete !== null && (
        <Box position="fixed" top="0" left="0" width="100vw" height="100vh" bg="rgba(0, 0, 0, 0.5)" display="flex" justifyContent="center" alignItems="center">
          <Box bg="white" p={6} rounded="md" shadow="md">
            <Text mb={4}>Are you sure you want to delete this post?</Text>
            <Flex justifyContent="space-between">
              <Button colorScheme="red" onClick={() => handleDelete(postToDelete)}>Yes</Button>
              <Button onClick={cancelDelete}>No</Button>
            </Flex>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Index;