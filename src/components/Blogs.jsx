import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const headerStyle = {
    backgroundImage: `url("https://via.placeholder.com/1200x400")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    textAlign: 'center',
    paddingTop: '8rem',
    paddingBottom: '8rem',
    height: '50vh'
  };

const blogPosts = [
  {
    id: 1,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imageUrl: 'https://via.placeholder.com/500x350?text=Blog+Post+1',
  },
  {
    id: 2,
    title: 'Consectetur Adipisicing Elit',
    content: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    imageUrl: 'https://via.placeholder.com/500x350?text=Blog+Post+2',
  },
  {
    id: 3,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imageUrl: 'https://via.placeholder.com/500x350?text=Blog+Post+1',
  },
  {
    id: 4,
    title: 'Consectetur Adipisicing Elit',
    content: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    imageUrl: 'https://via.placeholder.com/500x350?text=Blog+Post+2',
  },
  {
    id: 5,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imageUrl: 'https://via.placeholder.com/500x350?text=Blog+Post+1',
  },
];

function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(blogPosts);
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <header style={headerStyle}>
        <h1>Blog</h1>
      </header>

      {/* Main Content */}
      <Container className="py-5">
        {posts.map(post => (
          <Row key={post.id} className="mt-5">
            <Col md={6}>
              <img src={post.imageUrl} alt={post.title} className="img-fluid mb-3" />
            </Col>
            <Col md={6}>
              <div className='mt-5'>
                <h2>{post.title}</h2>
                <p>{post.content.slice(0, 150)}...</p>
                <Link to={`/blog/${post.id}`} className="btn btn-primary rounded-pill">Read More</Link>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}


export default BlogPage;
