import React from "react"

const images = [
  "https://www.icimod.org/wp-content/uploads/2019/12/Animal_Husbandry-1.jpg",
  "https://media.istockphoto.com/photos/various-types-of-fresh-meat-pork-beef-turkey-and-chicken-top-view-picture-id1200498592?k=20&m=1200498592&s=170667a&w=0&h=YhNxWola7UY8tpRDhQsp2TjD9Rr93uLxvmPQhKCQqVw=",
  "https://vetexplainspets.com/wp-content/uploads/2020/03/edited-can-chickens-eat-mushrooms-1-of-4.jpg.webp",
  "https://www.iof2020.eu/_default_upload_bucket/image-thumb__1970__use-case-gallery/barn_1.jpg",
]

const ourService = [
  {
    title: "Goat Head Cleaning",
    charge: "15$ / Head",
    src: "https://i.ytimg.com/vi/XP3tvIOjq74/maxresdefault.jpg",
  },
  {
    title: "Full burning",
    charge: "2$ each for gas",
    src: "https://ak.picdn.net/shutterstock/videos/22193251/thumb/1.jpg",
  },
]
const AboutUs = () => {
  return (
    <div className="flex justify-center">
      <div className="min-h-[60vh] max-w-[1440px]  flex flex-col items-center sm:px-16 sm:py-10 space-y-8">
        <div className="mt-4 sm:mt-0 grid sm:grid-cols-2 lg:gap-20 items-center">
          <div className="m-2 sm:m-0 sm:shadow rounded p-4 h-fit  bg-gray-100">
            <h1 className="text-4xl font-semibold text-orange-400 underline">
              Who we are{" "}
            </h1>
            <p className="text-gray-500 font-semibold mt-2">
              We are a Fresh Farm online store company. We provide flesh meats
              of different animals like hens, goat, lamb, pig, etc.
            </p>
            <p className="text-gray-500 font-semibold mt-2">
              We provide fresh meats and deliver the order in time.
            </p>
          </div>
          <div className="m-2 sm:m-0 sm:shadow rounded p-2 h-fit bg-white w-full grid grid-cols-2 gap-2">
            {images.map((image) => (
              <img src={image} alt="" className="h-40 w-full" />
            ))}
          </div>
        </div>

        <div className="sm:shadow rounded p-4 h-fit w-full  bg-gray-100">
          <h1 className="text-4xl font-semibold text-orange-400 underline">
            Our services
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-4 ">
            {ourService.map((data) => (
              <div className="bg-white rounded ">
                <img src={data.src} alt="" className="rounded-t w-full h-40" />
                <div className="flex flex-col p-2">
                  <span className="text-gray-800 text-xl capitalize font-semibold">
                    {data.title}
                  </span>
                  <span className="text-gray-400 font-semibold">
                    <strong className="text-gray-600 capitalize">
                      charge -
                    </strong>{" "}
                    {data.charge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
