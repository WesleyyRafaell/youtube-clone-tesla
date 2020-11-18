import React from 'react';

import { ModelsWrapper, ModelSection} from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container } from './styles';

const Page: React.FC = () => {
  const models = ['Model One', 'Model Two', 'Model Three', 'Model Four', 'Model Five', 'Model Six', 'Model Seven'] 
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {models.map(modelName => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={<DefaultOverlayContent label="Model One" description="Order List for Delivery"/>}
            />
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
