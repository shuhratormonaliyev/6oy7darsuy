
import React, { useEffect, useState } from 'react';
import imageName from '../../assets/images/cats.png';
const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=3')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
    <span className="loading loading-spinner text-primary"></span>
  </div>
  }
  return (
    <div className="bg-gray-100 p-6 min-w-full">
       <div className='flex gap-3 items-center justify-center'>
       <div class="lg:grid-cols-2 gap-24 items-center">
        <h1 class="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl text-blue-950">We are changing the way people shop</h1>
         <p class="mt-8 max-w-xl text-lg leading-8 text-blue-950">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta
        temporibus asperiores aut obcaecati perferendis porro nobis.
      </p>
        </div>
        <div>
        <img src={imageName} className='rounded-lg' alt="Images" />
        </div>
       </div>
      <div className='flex p-4'>
      <button className="bg-blue-500 text-white px-4 py-2 rounded font-sans ml-[230px] btn btn-primary">OUR PRODUCTS</button>
      </div>
     <div className='pt-24'>
     <h2 className="text-2xl font-bold mt-8 text-blue-950 border-b border-base-300 pb-5 ml-[230px] mr-[230px]">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 m-auto w-[1000px]">
        {products.map((product) => (
          <div key={product.id} className=" cursor-pointer bg-sky-100 hover:bg-sky-300 border rounded-lg overflow-hidden shadow-lg gap-4 md:grid-cols-2 lg:grid-cols-3">
            <img src={product.url} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-950">{product.title}</h3>
            </div>
          </div>
        ))}
      </div>
     </div>
    </div>
  );
};

export default App;