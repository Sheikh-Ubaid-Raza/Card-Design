import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">

      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-60 lg:max-w-md">

        <div className="flex justify-center items-center">
          <Image src="/my-pic.jpeg" width={300} height={300} alt="Card Image" className="w-48 h-auto rounded-full mt-5  object-cover lg:w-full lg:h-full lg:rounded-none lg:mt-0" />
        </div>

        <div className="p-4 flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold text-gray-800">Ubaid Raza</h2>
          <p className="text-sm text-gray-800 mt-2">
            I built my profile card for practicing Tailwind CSS predefined classes.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600">
            Know More
          </button>
        </div>
      </div>
    </div>
  )
}