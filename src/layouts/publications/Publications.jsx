
/* eslint-disable react/no-unescaped-entities */
import './Publications.scss';

function Publications() {

    const publications = [
        {
            id: 1,
            title: "Evaluation of a Reinforcement Learning-Based System for Mid-Term Conflict Resolution in the Upper Airspace",
            year: 2026,
            authors: "Wilfried Ngoune",
            institution: "German Aerospace Center (DLR)",
            conference: "Masterthesis, Hochschule Ostfalia",
            description: "A short description of the research and its main contributions.",
            link: "https://elib.dlr.de/226303/"
        },
        {
            id: 2,
            title: "VEHSI: A Fast-Time Simulation Digital Twin for Rapid En-Route COncept Validation using Open-Source ADS-B Data",
            year: 2026,
            authors: "Dagh Zeppenfeld, Wilfried Ngoune, Meilin Schaper",
            institution: "German Aerospace Center (DLR)",
            conference: "DASC",
            link: "#"
        }
    ]

    return(
        <div className="publications-container">
            <div className="publications-wrapper">
                {publications.map((publication, index) => (
                    <div
                        className="single-publication"
                        key={publication.id}
                        style={{animationDelay: `${index * 0.15}s`}}
                    >
                        <div className="publication-icon">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <polyline points="14 2 14 8 20 8"/>
                                <line x1="8" y1="13" x2="16" y2="13"/>
                                <line x1="8" y1="17" x2="16" y2="17"/>
                            </svg>
                        </div>

                        <div className="publication-content">

                            <div className="publication-top">
                                <span className="publication-year">
                                    {publication.year}
                                </span>
                            </div>

                            <h3 className="publication-title">
                                {publication.title}
                            </h3>

                            <p className="publication-authors">
                                {publication.authors}
                            </p>

                            <div className="publication-details">
                                <span>{publication.institution}</span>
                                <span className="separator">•</span>
                                <span>{publication.conference}</span>
                            </div>


                            <a
                                href={publication.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="publication-link"
                            >
                                View Publication ↗
                            </a>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Publications
