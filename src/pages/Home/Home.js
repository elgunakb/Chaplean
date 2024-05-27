import React from 'react';
import './Home.scss';
import Card from '../../components/Card/Card';

const Home = () => {
  const cardData = [
    {
      title: 'Join our Community',
      description:
        "If you have questions about anything related to Chaplean, you're always welcome to ask our community",
    },
    {
      title: 'Join our Community',
      description:
        "If you have questions about anything related to Chaplean, you're always welcome to ask our community",
    },
    {
      title: 'Title',
      description:
        "If you have questions about anything related to Chaplean, you're always welcome to ask our community",
    },
    {
      title: 'Join our Community',
      description:
        "If you have questions about anything related to Chaplean, you're always welcome to ask our community",
    },
    {
      title: 'Join our Community',
      description:
        "If you have questions about anything related to Chaplean, you're always welcome to ask our community",
    },
    {
      title: 'Join our Community',
      description:
        "If you have questions about anything related to Chaplean, you're always welcome to ask our community",
    },
  ];
  return (
    <>
      <div className="main_content">
        <div className="welcome-info">
          <h1>Introduction</h1>
          <p>Welcome to the Chaplean documentation</p>
        </div>
        <div className="info">
          <h4>What is Chaplean?</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
            <br />
            <br />
            lacus at sodales sodales. Quisque sagittis orci ut diam condimentum,
            vel euismod erat placerat. In iaculis arcu eros, eget tempus orci
            facilisis id. Praesent lorem orci, mattis non efficitur id,
            ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce
            (hover: Fusce ) vel tempor elit. Proin tempus, magna id scelerisque
            vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec
            felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas
            ullamcorper dui.
          </p>
          <h4>What is Chaplean?</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
            lacus at sodales sodales. Quisque sagittis orci ut diam condimentum,
            vel euismod erat placerat. In iaculis arcu eros, eget tempus orci
            facilisis id. Praesent lorem orci, mattis non efficitur id,
            ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce
            (hover: Fusce ) vel tempor elit. Proin tempus, magna id scelerisque
            vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec
            felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas
            ullamcorper dui.
          </p>{' '}
          <h4>What is Chaplean?</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
            lacus at sodales sodales. Quisque sagittis orci ut diam condimentum,
            vel euismod erat placerat. In iaculis arcu eros, eget tempus orci
            facilisis id. Praesent lorem orci, mattis non efficitur id,
            ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce
            (hover: Fusce ) vel tempor elit. Proin tempus, magna id scelerisque
            vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec
            felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas
            ullamcorper dui.
          </p>
        </div>
        <div className="card-grid">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
