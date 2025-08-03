
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
//   const [error, setError] = useState<string | null>(null);

//   const themeStyles =
//     theme === 'theme1' ? stylesTheme1 :
//     theme === 'theme2' ? stylesTheme2 :
//     stylesTheme3;

// useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       const res = await fetch('https://fakestoreapi.in/api/products');
//       const result = await res.json();

//       console.log('API Response:', result);

//       if (result?.status === 'SUCCESS' && Array.isArray(result.products)) {
//         setProducts(result.products);
//       } else {
//         throw new Error('Invalid response format');
//       }
//     } catch (err: any) {
//       console.error('Error fetching products:', err);
//       setError('Failed to load products.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchProducts();
// }, []);



//   if (loading) {
//   return (
//     <div className={themeStyles.loaderContainer}>
//       <div className={themeStyles.loader}></div>
//     </div>
//   );
// }

//   if (error) return <p className={themeStyles.description}>{error}</p>;

//   return (
//     <div className={themeStyles.productGrid}>
//       {products.map((product) => (
//         <div key={product.id} className={themeStyles.card}>
//           <img src={product.image} alt={product.title} className={themeStyles.productImage} />
//           <h6 className={themeStyles.titleproduct}>{product.title}</h6>
//           <p className={themeStyles.descriptionproduct}>
//             {product.description.slice(0, 100)}...
//           </p>
//           <p className={themeStyles.price}>₹{product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;


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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const themeStyles =
    theme === 'theme1' ? stylesTheme1 :
    theme === 'theme2' ? stylesTheme2 :
    stylesTheme3;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.in/api/products');
        const result = await res.json();

        if (result?.status === 'SUCCESS' && Array.isArray(result.products)) {
          setProducts(result.products);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err: any) {
        setError('Failed to load products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className={themeStyles.loaderContainer}>
        <div className={themeStyles.loader}></div>
      </div>
    );
  }

  if (error) return <p className={themeStyles.description}>{error}</p>;

  return (
    <>
      <div className={themeStyles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={themeStyles.card}>
            <img src={product.image} alt={product.title} className={themeStyles.productImage} />
            <h6 className={themeStyles.titleproduct}> {product.title.slice(0, 50)}...</h6>
            {/* <p className={themeStyles.descriptionproduct}>
              {product.description.slice(0, 100)}...
            </p> */}
            <p className={themeStyles.price}>₹{product.price}</p>
            <div style={{display:"flex" , justifyContent:"end"}}>
            <a onClick={() => setSelectedProduct(product)} className={themeStyles.viewmore}>View more</a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className={themeStyles.modalOverlay}>
          <div className={themeStyles.modalContent}>
            <button onClick={() => setSelectedProduct(null)} className={themeStyles.closeButton}>X</button>
            <img src={selectedProduct.image} alt={selectedProduct.title} className={themeStyles.modalImage} />
            <h4>{selectedProduct.title}</h4>
            <p>{selectedProduct.description}</p>
              <p><b>Brand: </b>{selectedProduct.brand}</p>
                <p><b>Model: </b>{selectedProduct.model}</p>
                  <p><b>Color: </b>{selectedProduct.color}</p>
                    <p><b>Category: </b>{selectedProduct.category}</p>
                                        <p><b>Discount: </b>{selectedProduct.discount}</p>
            <p className={themeStyles.price}>₹{selectedProduct.price}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
