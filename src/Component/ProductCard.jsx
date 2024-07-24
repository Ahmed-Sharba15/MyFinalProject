import React from 'react';

const ProductCard = () => {
  const products = [
    {
        id: 1,
        title: 'Suit',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMrlHAV9SdsxzDVpY8Vx0lr3bZjNyEcjJbQ&s',
        price: 5.99,
        title1: 50.99,
      },
      
      {
        id: 2,
        title: 'Shirt',
        image: 'data:image/jpeg;base64,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',
        price: 8.99,
      },
      
      {
        id: 3,
        title: 'Jens',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGKEbsyNim24f82vYAGG8_lbknIftXgmpCQ&s',
        price: 9.99,
      },
      {
        id: 4,
        title: 'shirt fasion',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtaJVGTrDpJM4Ai_jhZWV7LAmfmhRP63BqA&s',
        price: 14.99,
      },
      {
        id: 5,
        title: 'Suit',
        image: 'https://i.pinimg.com/236x/0b/e6/dc/0be6dc570209b87fe502a3dcb38ea449.jpg',
        price: 29.99,
      },
      {
        id: 6,
        title: 'Shirt',
        image: 'https://i.pinimg.com/236x/c5/0c/4d/c50c4df37fbe8b62b0bfe5f60e365d96.jpg',
        price: 29.99,
      },
      {
        id: 7,
        title: 'Lens',
        image: 'https://i.pinimg.com/236x/cd/d2/5d/cdd25d95362af1625cabeeb3f1a4f666.jpg',
        price: 29.99,
      },
      {
        id: 8,
        title: 'Game hand ',
        image: 'https://i.pinimg.com/236x/ae/5f/24/ae5f2402f2f451cff4691e9a4d7c600b.jpg',
        price: 29.99,
      },
  ];

  return (
    <div>

      <div className="py-8">
        <h1 className='text-5xl font-bold flex justify-center text-cyan-500 mb-24 border-b-4'>Man Dresses</h1>

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
          
          {/* <ul className="flex space-x-4  mb-6">
            <li className='w-4 h-3'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/432/432323.png?uid=R73052817&ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
            <li className='w-4 h-3'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/432/432323.png?uid=R73052817&ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
            <li className='w-4 h-3'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/432/432323.png?uid=R73052817&ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
            <li className='w-4 h-3'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/432/432323.png?uid=R73052817&ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
            <li className='w-4 h-3'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/432/432323.png?uid=R73052817&ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
            <li className='w-4 h-3'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/432/432323.png?uid=R73052817&ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
           
            
          </ul> */}
          <a
                  href="/OrderForm"
                  className="bg-cyan-500 hover:bg-orange-900 text-white px-4 py-2 rounded-md mt-4 mb-4 "
                >
                  Buy Now
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