import PropTypes from 'prop-types';

const Project = ({ projectData }) => {

    return (
        <div className="flex flex-col border border-gray-500 rounded-xl mx-4 md:mx-12 lg:mx-48 p-5 space-y-6 bg-white shadow-lg">
            {/* Project Name */}
            <h4 className="text-2xl lg:text-3xl font-semibold text-center lg:text-left">
                {projectData.name.toUpperCase()}
            </h4>

            {/* Gambar yang bisa di-klik */}
            <div className="flex justify-center flex-col">
                {projectData.images.map((image, index) => (
                    <img
                        key={index}
                        src={`/public/images/mitra/${image.src}`}
                        alt={image.alt}
                        className="cursor-pointer max-w-full h-auto rounded-lg shadow-md"
                    />
                ))}
            </div>

            {/* Description */}
            <div>
                <p className="text-gray-500 uppercase text-sm">Tentang proyek/aplikasi</p>
                <p className="text-sm lg:text-base">{projectData.description}</p>
            </div>

            {/* Tech Stack */}
            <div>
                <p className="text-gray-500 uppercase text-sm">Tools/Library/Teknologi yang digunakan</p>
                <ul className="list-disc list-inside space-y-1 text-sm lg:text-base">
                    {projectData.techStack.map((tech, index) => (
                        <li key={index}>
                            <strong>{tech.label}:</strong> {tech.tech}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Features */}
            <div>
                <p className="text-gray-500 uppercase text-sm">Fitur Aplikasi (Secara keseluruhan)</p>
                {projectData.features.map((feature, index) => <div key={index}>
                    <h5 className='font-semibold mt-2'>{feature.title}</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm lg:text-base">
                        {feature.detail.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>)}
            </div>

            {/* Challenges & Solutions */}
            <div>
                <p className="text-gray-500 uppercase text-sm">Challenges & Solutions</p>
                <p className="text-sm lg:text-base">
                    <strong>Challenge:</strong> {projectData.challenges.challenge}
                    <br />
                    <strong>Solution:</strong> {projectData.challenges.solution}
                </p>
            </div>

            {/* Impact */}
            <div>
                <p className="text-gray-500 uppercase text-sm">Impact</p>
                <p className="text-sm lg:text-base">
                    {projectData.impact.map((impact, index) => (
                        <span key={index}>{impact}<br /></span>
                    ))}
                </p>
            </div>

            {/* Links */}
            <div>
                <p className="text-gray-500 uppercase text-sm">Links</p>
                <ul className="list-disc list-inside space-y-1 text-sm lg:text-base">
                    {projectData.links.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} className="text-blue-500 hover:underline">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

Project.propTypes = {
    projectData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        techStack: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                tech: PropTypes.string.isRequired
            })
        ).isRequired,
        features: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                detail: PropTypes.arrayOf(PropTypes.string).isRequired
            })
        ),
        challenges: PropTypes.shape({
            challenge: PropTypes.string.isRequired,
            solution: PropTypes.string.isRequired
        }).isRequired,
        impact: PropTypes.arrayOf(PropTypes.string).isRequired,
        links: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired
            })
        ).isRequired,
        images: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.string.isRequired,
                alt: PropTypes.string.isRequired
            })
        ),
    }).isRequired
};

export default Project;
