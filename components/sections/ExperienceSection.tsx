import { useState } from "react";
import Button from "../Button";
import { jobs } from "../../shared/data";
import JobItem from "../JobItem";

export default function ExperienceSection() {
  const [activeJob, setActiveJob] = useState<string | null>(jobs[0].company);
  const companies = jobs.map((job) => job.company);

  return (
    <div id="experience" className="relative w-full lg:max-w-[1200px] mx-auto">
      <div className="container mx-auto pt-24 pb-24 p-4 lg:px-8 w-full">
        <h1 className="flex items-center  font-extrabold lg:font-black text-4xl w-full h-full after:relative after:top-0 after:w-[775px] after:h-0.5 after:ml-8 after:bg-black">
          Experiences
        </h1>
        <div className="flex flex-col mt-12 lg:flex-row">
          <div className="flex items-start flex-1">
            {companies.map((company, idx) => (
              <Button
                type="button"
                key={idx}
                className={`py-4 px-8 cursor-pointer border-solid border-b-2 border-green-600 lg:border-l-4 lg:border-b-0 ${
                  activeJob == company ? "bg-gradient" : ""
                }`}
                onClick={() => setActiveJob(company)}
              >
                <span
                  className={`text-md font-semibold ${
                    activeJob == company ? "text-white" : "text-black"
                  }`}
                >
                  {company}
                </span>
              </Button>
            ))}
          </div>

          <div className="flex-1 flex flex-col">
            {jobs.map((job, idx) => (
              <div key={idx}>
                <JobItem job={job} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
