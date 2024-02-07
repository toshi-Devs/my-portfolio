import React from 'react'

function Projects() {
  return (
    <div>
        <div className='grid grid-cols-2 gap-5'>
                        <div className='bg-slate-950 border-lime-200 border-2 rounded-lg p-5'>
                            <h3 className='text-xl font-semibold text-slate-100'>Frontend</h3>
                            <ul className='text-lg text-slate-400 font-medium'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Next.js</li>
                            </ul>
                        </div>
                        <div className='bg-slate-950 border-lime-200 border-2 rounded-lg p-5'>
                            <h3 className='text-xl font-semibold text-slate-100'>Backend</h3>
                            <ul className='text-lg text-slate-400 font-medium'>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>PostgreSQL</li>
                                <li>MongoDB</li>
                                <li>GraphQL</li>
                            </ul>
                        </div>
                    </div>
    </div>
  )
}

export default Projects