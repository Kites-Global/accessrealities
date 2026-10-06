import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Our Journey | Access Realties",
    description: "Discover the journey of Access Realties, shaping modern business environments in Colombo through premium workplaces, property expertise and trusted service."
}

function page() {
    const pages = [
        {
            title: "Access Realties",
            imgSrc: "/img/about-us-parent.jpg",
            imgAlt: "Access Realties",
            link: "/access-towers/west-tower"
        },
        {
            title: "Careers",
            imgSrc: "/img/careers-parent.jpg",
            imgAlt: "Careers",
            link: "/access-towers/south-tower"
        },
        
    ]

    return (
        <section className='parent-page'>
            <div className="container">
                <div className='page-header'>
                    <div className="row">
                        {pages.map((page, index) => (
                            <div className="col-md-6" key={index}>
                                <Link href={page.link} className="page-card">
                                    <div className='img-cont'>
                                        <Image src={page.imgSrc} alt={page.imgAlt} className='img-fluid' width={300} height={200} />
                                    </div>
                                    <h5 className="card-title">
                                        {page.title}
                                    </h5>
                                </Link>
                            </div>
                        ))}
                    </div>

                  
                </div>
            </div>
        </section>
    )
}

export default page