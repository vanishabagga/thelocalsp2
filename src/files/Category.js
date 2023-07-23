import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import img1 from './picsseg/foodc.webp';
import img2 from './picsseg/attractc.jpg';
import img3 from './picsseg/shopc.webp';
import img4 from './picsseg/nightc.jpg';
import Navbar from './Navbar';

const Category = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/${category}`);
  };

  const categories = [
    {
      id: 1,
      title: 'Food',
      imageUrl: img1,
      link: 'food',
    },
    {
      id: 2,
      title: 'Attractions',
      imageUrl: img2,
      link: 'attractions',
    },
    {
      id: 3,
      title: 'Shopping',
      imageUrl: img3,
      link: 'shopping',
    },
    {
      id: 4,
      title: 'Night life',
      imageUrl: img4,
      link: 'nl',
    },
  ];

  return (
    <div>
      <Navbar showMainLink={true} showDropdown={true} />
      <h1 className="my-5">Categories</h1>
      <div className="category-container" style={{ marginTop: '20px' }}>
        {categories.map((category) => (
          <div key={category.id} className="category-item" style={{ marginBottom: '20px' }}>
            <Link
              to={`/${category.link}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={() => handleCategoryClick(category.link)}
            >
              <img
                src={category.imageUrl}
                alt={category.title}
                className="category-image rounded"
                style={{ maxWidth: '50%', height: 'auto' }}
              />
              <div className="category-label" style={{ marginTop: '10px', fontSize: '20px' }}>
                {category.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;



