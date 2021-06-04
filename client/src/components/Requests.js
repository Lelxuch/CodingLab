import { React, useState } from 'react'
import { Link } from 'react-router-dom'

const Jobs = () => {
    const [requests, setRequests] = useState (
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
          }, {
            "id": 6,
            "title": "Quality Control Specialist",
            "description": "luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis"
          }, {
            "id": 7,
            "title": "Sales Representative",
            "description": "volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst"
          }, {
            "id": 8,
            "title": "VP Accounting",
            "description": "libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio"
          }, {
            "id": 9,
            "title": "Teacher",
            "description": "lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla"
          }, {
            "id": 10,
            "title": "Assistant Media Planner",
            "description": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam"
          }]
    )

    return (
        <div>
            {requests.map((request) => (
                <div key={ request.id } className="request-item">
                    <div className="request-left">
                        <Link className="request-title" to="/project/1">
                            {request.title}
                        </Link>
                        <div className="request-description">
                            {request.description}
                        </div>
                    </div>
                    <div className="request-right">
                        <button className="request-accept-btn">Accept</button>
                        <button className="request-decline-btn">Decline</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Jobs
