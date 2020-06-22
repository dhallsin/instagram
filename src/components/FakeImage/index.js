import React from 'react';

import { Container, Card } from './styles';

function FakeImage() {
  return (
    <Container>
      <Card>
        <div id="blur">
          <h2>Conteúdo suspenso</h2>
          <span>Essa postagem foi suspensa após denúncia de violação dos termos da comunidade.</span>
        </div>
      </Card>
    </Container>
  );
}

export default FakeImage;