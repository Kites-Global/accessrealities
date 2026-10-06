import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Access Towers | Access Realties",
    description: "Access Towers by Access Realties offers premium office, retail and parking spaces in the heart of Colombo, combining modern facilities, prime connectivity and trusted corporate standards."
}

function page() {

    const pages = [
        {
            title: "West Tower",
            imgSrc: "/img/west-tower-parent.jpg",
            imgAlt: "West Tower",
            link: "/access-towers/west-tower"
        },
        {
            title: "South Tower",
            imgSrc: "/img/south-tower-parent.jpg",
            imgAlt: "South Tower",
            link: "/access-towers/south-tower"
        },
        {
            title: "North Tower",
            imgSrc: "/img/north-tower-parent.jpg",
            imgAlt: "North Tower",
            link: "/access-towers/north-tower"
        }
    ]

    return (
        <section className='parent-page'>
            <div className="container">
                <div className='page-header'>
                    <div className="row">
                        {pages.map((page, index) => (
                            <div className="col-md-4" key={index}>
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

                    <div className="links-cont">
                        <Link href="/access-towers/experiences" className="link-itm">
                            Experiences
                        </Link>
                        <Link href="/access-towers/facilities" className="link-itm">
                            Facilities
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page