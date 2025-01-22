import Header from "./components/Header"
import Project from "./components/Project"

import * as projects from './data/projects.json';

function App() {
  return (
    <div className="min-h-[100vh] w-full flex flex-col">
      <Header />
      <div className="flex flex-col gap-12 mb-5">
        {projects.data.map((project, key) => <Project projectData={project} key={key} />)}
      </div>
    </div>
  )
}

export default App
