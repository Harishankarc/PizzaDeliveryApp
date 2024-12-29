import backgroundImage from '../assets/images/background.jpg'
import emailPic from '../assets/images/emaillogo.png'
export default function ConfirmEmailPage() {
    return(
        <div className="min-h-screen flex flex-col justify-center items-center" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
        }}>
            <img src={emailPic} alt="" className='w-40'/>
            <h1 className='font-bold text-3xl py-5'>Email Confirmation</h1>
            <p className='text-center'>We have send email to <span className='text-red-500'>charishankar30@gmail</span> to confirm the <br /> validity of your email address.After receiving the email follow <br /> the link provided to complete your registeration.</p>
            <a href="https://gmail.com/"><button className='bg-red-600 px-4 py-2 rounded-md text-white my-10'>Verify now</button></a>
        </div>
    );
}