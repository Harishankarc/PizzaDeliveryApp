export default function Profile() {
    return (
        <div className="h-[90vh] flex justify-center items-center">
            <div class="mx-auto p-6 pb-1 border bg-white rounded-md shadow-dashboard">
                <h1 className="font-bold text-2xl text-gray-700 mb-3">Account Details</h1>
                <p className="text-sm text-gray-500 mb-2">Name</p>
                <div className="bg-gray-100 px-4 py-2 rounded-md mb-2 w-96">
                    <p className="text-gray-800 text-md">Harishankar</p>
                </div>
                <p className="text-sm text-gray-500 mb-2">Email</p>
                <div className="bg-gray-100 px-4 py-2 rounded-md mb-2 w-96">
                    <p className="text-gray-800 text-md">charishankar30@gmail.com</p>
                </div>
                <div className="mt-10 flex justify-between items-center mb-10">
                    <button className="bg-red-600 px-4 py-2 rounded-md text-white">Delete Account</button>
                    <button className="bg-black px-4 py-2 rounded-md text-white">Log Out</button>
                </div>
            </div>
        </div>
    );
}