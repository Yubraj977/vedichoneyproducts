import React from 'react'
import Card from './Card'
function Testimonials() {

  const userTestimonials = [
    {
      id: 1,
      name: "raudi rathod",
      review: "this is the best product"
    },
    {
      id: 2,
      name: "John Doe",
      review: "I've been using this product for a while now, and I must say, it has truly exceeded my expectations. The quality is top-notch, and it's incredibly user-friendly. I highly recommend it to anyone looking for a reliable solution."
    },
    {
      id: 3,
      name: "Emily Smith",
      review: "I'm extremely satisfied with this product. It has made my life so much easier. The features are fantastic, and the customer support is excellent. I couldn't ask for more!"
    },
    {
      id: 4,
      name: "Michael Johnson",
      review: "I can't express enough how much I love this product! From its sleek design to its outstanding performance, it's simply the best. If you're in the market for a new product, look no further."
    }
  ];
  return (
    <div className='flex flex-col lg:flex-row justify-between  items-between  w-full'>


      <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">What people <br />are saying.</h1>
              <h3 className="text-xl mb-5 font-light">मह को बारे | मह को स्वाद को बारे  | हर्म्रो बारे </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="-mx-3 md:flex items-start">
              <div className="px-3 md:w-1/3">

                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="data:image/jpeg;base64,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" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600 ">रामु काका.</h6>
                    </div>
                  </div>


                  <div className="w-full">
                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>  मैले यस उत्पादलाई हाम्रो कृषि उत्पादको रूपमा उपयोग गरेको छु। यसले हाम्रो उत्पादनको गुणस्तरलाई उत्कृष्ट बनाएको छ।.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                  </div>
                </div>



                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://www.borgenmagazine.com/wp-content/uploads/2020/11/Empowering-Women-of-Nepal-702x336.jpg" alt="" className='h-full w-full object-cover' />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">सबिता मगर .</h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>म यो उत्पादबाट अत्यन्त संतुष्ट छु। यो मेरो जीवनलाई धेरै सजिलो बनाएको छ। विशेषताहरू अद्भुत छन्, र ग्राहक समर्थन उत्कृष्ट छ। म अधिक माग गर्न चाहन्छुन्!.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                  </div>
                </div>


              </div>


              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://media.gettyimages.com/id/182489470/photo/asian-fabric-shop.jpg?s=612x612&w=0&k=20&c=ZHqcRRqNqH55uxbui-c4VcIoi1cP35f1KA_NGZVRuA4=" alt=""  className='h-full w-full object-cover'/>
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">लाल बहादुर डाँगी .</h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span> म यो उत्पादलाई कति माया गर्छु, यो थिच डिजाइनबाट लेकर गरी, यो अत्यन्त प्रदर्शन सान्दर्भिक छ। यदि तपाईं एक नयाँ उत्पादको बाजारमा हुनुहुन्छ भने, कहिल्यै पनि हेर्नुहोस्।.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                  </div>
                </div>

                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3JdREv5JLrdp8pIIv0bQLDamHhASExbQEIi97UMMRTQ&s" className='h-full w-full object-cover' alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">बिपना ओली .</h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span> यो उत्पाद उत्कृष्ट छ र म यसलाई अन्य सबैले सिफारिस गर्छु। यो अत्यन्त उपयोगी र अद्भुत छ।. <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                  </div>
                </div>
              </div>


              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://media.gettyimages.com/id/606672364/photo/rural-asian-serene-senior-peasant-man-thinking-and-looking-away.jpg?s=612x612&w=0&k=20&c=OGdoDldZQ332jL_x03Friuok5Dv5hrjSWZak7xknmXw=" alt="" className='h-full w-full object-cover'/>
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">मोहित बिशोव्कर्मा .</h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span> म यस उत्पादको सान्दर्भिक उपयोग गरिरहेको छु। यो मेरो कामको ब्यवस्थापनमा धेरै सहज बनाएको छ र म यसको सबै सुविधाहरूसँग खुशी छु।<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://media.gettyimages.com/id/861018428/photo/nepali-woman-carrying-her-baby-near-annapurna-range.jpg?s=612x612&w=0&k=20&c=2eDXlhyx-K6sTmuELmMH9FXXHvnfImqmUwwFMjMtehQ=" alt="" className='h-full w-full object-cover' />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">सीता कालु पाण्डे .</h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span> यो मिठो उत्पाद हो, उत्कृष्ट गुणस्तरमा र स्वादिलो। फेरी फेरी खरिद गर्दी खान सबै लाइ सुझाब दिन्क्षु .<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>


      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a title="Message Us in Whatsapp" href="https://wa.me/c/9779857820351" target="_blank" className="block w-8 h-8 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDclVtwkjULpQbQTAI26nMzRP-zAQ_w8Hdvt4pedKVcQ&s" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Testimonials