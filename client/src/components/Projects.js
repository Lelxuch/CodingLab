import React from 'react'
import { useState } from 'react'
import Project_item from '../components/Project_item.js'

const Projects = () => {
    const [projects] = useState (
        [{
            "id": 1,
            "title": "Software Test Engineer IV",
            "description": "lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis"
          }, {
            "id": 2,
            "title": "Systems Administrator I",
            "description": "duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id"
          }, {
            "id": 3,
            "title": "General Manager",
            "description": "cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent"
          }, {
            "id": 4,
            "title": "Assistant Manager",
            "description": "elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat"
          }, {
            "id": 5,
            "title": "Biostatistician III",
            "description": "donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque"
          }]
    )
    
    return (
        <div>
            {projects.map((project) => (
                <Project_item key={ project.id } project={ project }/>
            ))}
        </div>
    )
}

export default Projects
