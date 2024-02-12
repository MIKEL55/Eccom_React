import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import AdminProductImportFrom from "../components/AdminProductImportForm";



const AdminProductImport = () => {
    return (
        <>
        <Banner/>
        <Navbar/>
        <AdminProductImportFrom/>
        <div className="flex justify-center mt-20 px-8">
        <section className='p-8 grid grid-cols-2  md:grid-cols-2 text-center'>
            <h2 className='font-bold text-2xl mb-4 tracking-wider'>Category</h2>
            <h2 className='font-bold text-2xl mb-4 tracking-wider'>Image</h2>
        </section>
        </div>
        <Footer/>
        </>
    );
};

export default AdminProductImport;