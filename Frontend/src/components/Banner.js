import { useNavigate } from "react-router-dom";




const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-sky-700 text-white text-center py-1 px-4 h-8' onClick={() => navigate('/admin')}>
      Super Deal! Free Shipping on Orders Over $50
    </div>
  );
};

export default Banner;