import React from 'react';

const ProductCard = () => {
  const products = [
    {
        id: 1,
        title: 'Camera',
        image: 'https://cdn.pixabay.com/photo/2014/08/29/14/53/camera-431119_640.jpg',
        price: 19.99,
        title1: 50.99,
      },
      {
        id: 2,
        title: 'Projetor',
        image: 'https://cdn.pixabay.com/photo/2012/03/01/01/10/business-20031_640.jpg',
        price: 24.99,
      },
      {
        id: 3,
        title: 'Tablet',
        image: 'https://cdn.pixabay.com/photo/2015/06/19/13/28/tablet-814839_640.jpg',
        price: 14.99,
      },
      {
        id: 4,
        title: 'Memory Port',
        image: 'https://cdn.pixabay.com/photo/2017/09/23/04/02/port-2777810_640.jpg',
        price: 29.99,
      },
      {
        id: 5,
        title: 'Smart Tv',
        image: 'https://cdn.pixabay.com/photo/2015/02/07/20/58/tv-627876_640.jpg',
        price: 29.99,
      },
      {
        id: 6,
        title: 'Smart Watch',
        image: 'https://cdn.pixabay.com/photo/2015/09/09/02/03/clock-931027_640.jpg',
        price: 29.99,
      },
      {
        id: 7,
        title: 'Lens',
        image: 'https://cdn.pixabay.com/photo/2022/09/24/00/17/lens-7475374_640.jpg',
        price: 29.99,
      },
      {
        id: 8,
        title: 'Game hand ',
        image: 'https://cdn.pixabay.com/photo/2020/05/23/13/01/xbox-5209485_640.jpg',
        price: 29.99,
      },
  ];

  return (
    <div>

      <div className="py-8">
        <h1 className='text-5xl font-bold flex justify-center text-orange-500 mb-24 border-b-4'>Featured Products</h1>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 ">
                <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                <p className="text-gray-600 text-base mb-3">
                  Price: ${product.price.toFixed(2)}
                </p>
                
                <div>
          
          <ul className="flex space-x-4  mb-6">
            <li className='w-4 h-3'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/432/432323.png?uid=R73052817&ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
            <li className='w-4 h-3'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/432/432323.png?uid=R73052817&ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
            <li className='w-4 h-3'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/432/432323.png?uid=R73052817&ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
            <li className='w-4 h-3'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/432/432323.png?uid=R73052817&ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
            <li className='w-4 h-3'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/432/432323.png?uid=R73052817&ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
           
            
          </ul>
          <a
                  href="/OrderForm"
                  className="bg-orange-500 hover:bg-gray-900 text-white px-4 py-2 rounded-md mt-4 mb-4 "
                >
                  Get Now
                </a>
        </div>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default ProductCard;