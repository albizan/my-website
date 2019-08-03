import React from 'react'

/* Custom imports */

const Resume = () => {
  return (
    <section className="container section-container">
      <div className="mx-auto px-8 md:w-3/5">
        <h3 className="text-3xl sm:text-4xl font-bold text-center">Resume</h3>
        <div className="border-l-4 border-black mt-8">
          <div className="relative pb-10">
            <div className="absolute left-0 top-0 -ml-3 mt-2 w-5 h-5 bg-black rounded-full" />
            <div className="pl-10">
              <h4 className="text-2xl font-bold pb-2">High School Diploma</h4>
              <h6 className="font-thin">
                Scuola Internazionale Europea Statale Altiero Spinelli - 2015
              </h6>
            </div>
          </div>

          <div className="relative pb-1">
            <div className="absolute left-0 top-0 -ml-3 mt-2 w-5 h-5 bg-black rounded-full" />
            <div className="pl-10">
              <h4 className="text-2xl font-bold pb-2">Bachelor Degree</h4>
              <h6 className="font-thin">Politecnico di Torino - 2018</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
