
/* eslint-disable react/no-unescaped-entities */
import './Moments.scss';

function Moments() {

    const moments = [
        {
            id: 1,
            image: '/moments/masterthesis.png',
            title: "Master's Thesis",
            description: "Celebrating a major milestone surrounded by friends and family.",
            label: 'Graduation'
        },
        {
            id: 2,
            image: '/moments/dlrk.png',
            title: 'DLRK Conference',
            description: "Sharing research, exchanging ideas, and connecting with passionate minds in aerospace.",
            label: 'Conference'
        }
    ];

    return (
        <div className="moments-container">

            <div className="moments-carousel">
                <div className="moments-track">

                    {[...moments, ...moments].map((moment, index) => (
                        <div
                            className="single-moment"
                            key={`${moment.id}-${index}`}
                        >
                            <img
                                src={import.meta.env.BASE_URL + moment.image}
                                alt={moment.title}
                                className="moment-image"
                                loading="lazy"
                            />

                            <div className="moment-overlay">
                                <span className="moment-label">
                                    {moment.label}
                                </span>

                                <h3>{moment.title}</h3>

                                <p>{moment.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}

export default Moments;
