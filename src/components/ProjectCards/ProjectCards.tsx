import classes from "../../Projects/index";
import { Year } from "../../Projects/index";

export default function Example() {
  const year = classes[2024];
  const yearArr = Object.entries(year);

  return (
    <div>
      {yearArr.map(semester => {
        console.log(semester);
        return (
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {semester[0] == "firstSemester" ? (
                    <h3 className="text-gray-500">1º semestre de 2024</h3>
                  ) : (
                    <h3 className="text-gray-500">2º semestre de 2024</h3>
                  )}
            {semester[1].map(project => (
              <article
                key={project.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  {semester[0] == "firstSemester" ? (
                    <p className="text-gray-500">1º semestre</p>
                  ) : (
                    <p className="text-gray-500">2º semestre</p>
                  )}
                  <a
                    href={project.link}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {project.name}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={project.link}>
                      <span className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {project.summary}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    {project.students.map(student => {
                      return (
                        <p className="font-semibold text-gray-900">
                          <span className="absolute inset-0" />| {student} |
                        </p>
                      );
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        );
      })}
    </div>
  );
}
