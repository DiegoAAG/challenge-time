import React from 'react';
import styled from 'styled-components';
import MovieGridList from '../container/MovieGridList';


const PageContainer = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: black;
  position: absolute;
  text-decoration: none;
`; 

const Index = () => (
  <PageContainer>
    <MovieGridList />
  </PageContainer>
);

export default Index;