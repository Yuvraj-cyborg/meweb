export default function About() {
    return (
      <main>
        <h1 className="text-3xl mb-6">About</h1>
        
        <div className="space-y-4 text-sm leading-6">
          <p>
            I&apos;m a second-year Computer Science student at Silicon University with hands-on experience in full-stack web development. 
            I love building scalable applications using modern technologies like NextJs, Go, Rust and PostgresSQL.
          </p>
          
          <p>
            Beyond coding, I enjoy learning and researching on Astrophysics. 
          </p>
          
          <h2 className="text-xl mt-8 mb-4">Experience</h2>
          
          <div className="mb-6">
            <h3 className="font-medium">Freelance Web Developer</h3>
            <p className="text-gray-500 text-xs">Dec 2023 - Present</p>
            <p className="mt-1">
              Developed scalable business platforms for clients across industries. Built a full-stack voting platform handling 50K+ users/hour.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium">Web Dev Instructor at Shabzak Tech</h3>
            <p className="text-gray-500 text-xs">Jul 2024 - Oct 2024</p>
            <p className="mt-1">
              Designed and delivered Vue.js courses from beginner to advanced levels with project-based curriculum.
            </p>
          </div>
        </div>
      </main>
    )
  }