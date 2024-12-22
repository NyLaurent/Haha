import Footer from "../components/footer";
import Header from "../components/header";
import Services from "../components/categories/services";


const Person = (props) => {
  return (
    <>
      <div className='w-[300px]  mx-10  ' >
        <div className='h-80 border-2 w-full flex p-3 rounded-lg mb-4 bg-slate-100'>
          <img src="" alt="" />
        </div>
        <div className='mx-2'>
          <h3 className='text-xl font-medium'>{props.name}</h3>
          <p className='text-sm mb-2'>{props.title}</p>
          <div className='flex justify-between w-4/12'>
            <img src={'/images/twitter.svg'} alt="the twitter icon" className='w-5' />
            <img src={'/images/instagram.svg'} alt="the instagram icon" className='w-5' />
            <img src={'/images/linkedin.svg'} alt="the linkedin icon" className='w-5' />
          </div>
        </div>
      </div>
    </>
  );
}



function Results(props) {
  return (
    <>
      <div className=" h-48 border-2   rounded-lg flex flex-col items-center justify-center p-5 hover:bg-red-400   mx-10">
        <div className="w-14 h-14 bg-slate-400 flex justify-center items-center rounded-full mb-4">
          <div className=" w-8 h-8 flex justify-center items-center bg bg-white rounded-full">
            <img
              src={props.img}
              alt="the svg icon "
              className="w-6 h-8 bg-white rounded-full"
            />
          </div>
        </div>

        <h1 className="text-2xl font-semibold">{props.text} </h1>
        <p className="text-sm">{props.description}</p>
      </div>
    </>
  );
}

function AboutMain() {
  return (
    <>
      <div className=" flex  justify-between mt-6 ">
        <div className="w-4/12 mt-24 ml-20">
          <h1 className="text-3xl font-semibold my-8">Our Story</h1>
          <p className="text-gray-900">
            Launched in 2015 ,Haha is a Rwanda&apos;s premier online shopping
            marketplace with an active presence in Rwanda,. Supported by wide
            range of tailored marketing, data and service solution, Haha has
            10,500 sallers and 300 brands and serves 3 million customers across
            the region
          </p>
          <p>
            Haha has more than 1 million products to offer, growing at a very
            fastrate. Haha offers a diverse assostment in categories ranging
            from customer
          </p>
        </div>

        <div>
          <img
            src="/images/shopping.jpg"
            alt="image of people after shopping"
            className="h-[500px] "
          />
        </div>
      </div>
    </>
  );
}

const Aboutus = () => {
  return (
    <>
      <Header />
      <div>
        <div>
          <div className="ml-20 mt-10">
            <span className="opacity-50">Home</span> /about
          </div>
          <AboutMain />
        </div>
        <div className="flex justify-center items-center mb-20 mt-28">
          <Results
            img="/images/shop.svg"
            text="10.5 K"
            description="Sallers active our site"
          />
          <Results
            img="/images/usd-circle.svg"
            text="33 K"
            description="Monthly product Sale"
          />
          <Results
            img="/images/gift.svg"
            text="45.5 K"
            description="customer active site"
          />
          <Results
            img="/images/sack-dollar.svg"
            text="25 K"
            description="Annual gross sale in our site"
          />
        </div>
        <div className="flex my-28 justify-center items-center">
          <Person name='Tom cruise' title='Founder &amp; chairman' />
          <Person name='Emma watson' title='Managing Director' />
          <Person name='Will smith' title='Product designer' />
        </div>
      </div>
      <Services />
      <Footer />
    </>
  );
};

export default Aboutus;
