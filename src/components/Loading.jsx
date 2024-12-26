import loading from '../assets/images/loading.png';
export default function Loading() {
    return(
        <>
            <div className='flex justify-center items-center h-[90vh]'>
                <img src={loading} alt="loading image" className='w-40 animate-loading' />
            </div>
        </>
    );
}