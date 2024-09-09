'use client'
import { useEffect, useState } from 'react';


/*

const Testimonials = () => {
  const [newTestimonials, setTestimonials] = useState<Testimonial[]>([]);
  const t = useTranslations('testimonial')

  useEffect(() => {

    const fetchData = async () => {
      try {
        const testimonials = await fetchTestimonials();
        let formatedTestimonials = testimonials.map((testimonial: any) =>({
          id: testimonial.sys.id,
          name: testimonial.fields.name,
          credentials: testimonial.fields.credentials,
          slug: testimonial.fields.slug,
          quote: testimonial.fields.quote,
          logo: testimonial.fields.logo?.fields.file.fileName,
          email: testimonial.fields.email,
        }));
        setTestimonials(formatedTestimonials);
      } catch (error) {
        console.log("error något gick fel")
      }
    }
    fetchData();
  }, []);
  */


const API = () => {
  
  const [joke, setJoke] = useState<string>("");
  
  async function getData() {
    const url = "https://api.chucknorris.io/jokes/random";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      setJoke(json.value)
    } catch (e) {
      console.error(e);
    }
  }


  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center bg-gray-500 w-4/6 p-8 rounded gap-8">
         <p>{joke}</p>
          <button
          onClick={getData}
          className='bg-gray-200 w-1/6'
          >
            click for a joke.
          </button>
        </div>
    </div>
  );
}


export default API;
