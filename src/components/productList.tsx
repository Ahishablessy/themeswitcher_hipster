// // src/components/ProductList.tsx
// import React, { useEffect, useState } from 'react';
// import stylesTheme1 from '../styles/theme1.module.css';
// import stylesTheme2 from '../styles/theme2.module.css';
// import stylesTheme3 from '../styles/theme3.module.css';
// import { useTheme } from '../context/themeContext';

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
//   description: string;
// }

// const ProductList: React.FC = () => {
//   const { theme } = useTheme();
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   const themeStyles =
//     theme === 'theme1' ? stylesTheme1 :
//     theme === 'theme2' ? stylesTheme2 :
//     stylesTheme3;

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch('https://fakestoreapi.in/api/products');
//         const data = await res.json();
//         setProducts(data);
//       } catch (err) {
//         console.error('Error fetching products:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   if (loading) return <p className={themeStyles.description}>Loading...</p>;

//   return (
//     <div className={themeStyles.productGrid}>
//       {products.map((product) => (
//         <div key={product.id} className={themeStyles.card}>
//           <img src={product.image} alt={product.title} className={themeStyles.productImage} />
//           <h3 className={themeStyles.title}>{product.title}</h3>
//           <p className={themeStyles.description}>{product.description.slice(0, 100)}...</p>
//           <p className={themeStyles.price}>₹{product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;


// src/components/ProductList.tsx
import React, { useEffect, useState } from 'react';
import stylesTheme1 from '../styles/theme1.module.css';
import stylesTheme2 from '../styles/theme2.module.css';
import stylesTheme3 from '../styles/theme3.module.css';
import { useTheme } from '../context/themeContext';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const ProductList: React.FC = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const themeStyles =
    theme === 'theme1' ? stylesTheme1 :
    theme === 'theme2' ? stylesTheme2 :
    stylesTheme3;

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.in/api/products');
      const result = await res.json();

      console.log('API Response:', result);

      if (result?.status === 'SUCCESS' && Array.isArray(result.products)) {
        setProducts(result.products);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err: any) {
      console.error('Error fetching products:', err);
      setError('Failed to load products.');
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);



  if (loading) return <p className={themeStyles.description}>Loading...</p>;
  if (error) return <p className={themeStyles.description}>{error}</p>;

  return (
    <div className={themeStyles.productGrid}>
      {products.map((product) => (
        <div key={product.id} className={themeStyles.card}>
          <img src={product.image} alt={product.title} className={themeStyles.productImage} />
          <h6 className={themeStyles.title}>{product.title}</h6>
          <p className={themeStyles.description}>
            {product.description.slice(0, 100)}...
          </p>
          <p className={themeStyles.price}>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
