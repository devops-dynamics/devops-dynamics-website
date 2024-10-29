import { Separator } from "@/components/ui/separator";

interface Project {
    title: string;
    description?: string;
    feedback?: string | null;
    technologiesUsed: string[];
    startDate: string;
    endDate?: string;
    projectDuration: string;
    projectOutcome?: string;
    deliverables?: string[];
    status?: string;
    hoursWorked?: string;
    technicalApproach?: string[];
    paymentType?: string;
    deliveryDue?: string;
}

// Combine all projects into one array
const allProjects: Project[] = [
    // Adding ongoing projects
    {
        title: "Automated Fleet Management with Docker, VPN, and Configuration via Puppet & Ansible on ARM64 Devices",
        startDate: "2024-05-08",
        status: "Job in progress",
        hoursWorked: "180 hours",
        technologiesUsed: ["Puppet", "Terraform", "GitHub Actions", "GCP", "Ubuntu", "Docker", "BASH"],
        projectDuration: "Ongoing",
        projectOutcome: "Streamlined management solution for autonomous devices, supporting installation, updates, and execution of a Java application via Docker and configuration management. Optimized for Raspberry Pi with ARM64 architecture and includes integration with VPN, Puppet, and Ansible for efficient control and deployment.",
        deliverables:[
            "Dockerized solution for Java application with automated install, update, and execution capabilities",
            "Puppet and Ansible setup for consistent configuration across devices",
            "Idempotent deployment scripts for agents on ARM64 devices",
            "Tested and documented setup for VPN-enabled management servers",
            "Detailed documentation and troubleshooting guidelines for device setup"
]

    },
    {
        title: "Convert Docker-Compose Deployment to Scalable System",
        startDate: "2024-10-09",
        status: "Job in progress",
        paymentType: "Fixed price",
        deliveryDue: "2024-10-10",
        technologiesUsed: ["Kubernetes", "Docker-Swarm", "Docker Compose", "Terraform", "Cloud Infrastructure Management", "DigitalOcean"],
        projectDuration: "Ongoing",
        projectOutcome: "Scalable system using Kubernetes or Docker-Swarm by converting existing Docker Compose deployment, improving scalability and performance.",
        deliverables: [
            "Detailed implementation plan",
            "Nomad servers setup and plugins configuration",
            "Service migration to Nomad job specifications",
            "Stateful service migration with RocksDB",
            "Networking setup with Consul-based service discovery",
            "Security optimization and resource allocation",
            "Comprehensive testing and validation"
        ]
    },
    {
        title: "Custom Ubuntu Image Creation for Intel-Based Devices",
        startDate: "2024-09-25",
        status: "Job in progress",
        hoursWorked: "8:10 hours",
        technologiesUsed: ["Ubuntu", "Intel-based hardware", "Bash", "Python", "Disk imaging tools", "dd"],
        projectDuration: "Ongoing",
        projectOutcome: "Built a custom Ubuntu image for Intel-based devices, with Docker services and kiosk-mode Chromium for front-end access on boot, tested for reliable deployment and configuration persistence.",
        deliverables:
           [ "Custom Ubuntu image with pre-configured drivers, software, and settings specific to Intel-based hardware",
            "Automated setup scripts in Bash and Python to facilitate image flashing to eMMC and ensure immediate functionality",
            "Configuration for Docker containers and Chromium in kiosk mode to run at boot, providing seamless access to the application",
            "Comprehensive documentation and deployment guidelines for OEMs",
            "Tested deployment strategy validated on both virtual environments and target devices",
            "Support for additional configuration (e.g., screen orientation, boot screen customization)"
            ]

    },
    {
        title: "Create Dockerfile for Undetected Chromedriver/Selenium in Headful Mode",
        startDate: "2024-09-29",
        status: "Job in progress",
        paymentType: "Fixed price",
        technologiesUsed: ["Docker", "Chromedriver", "Selenium"],
        projectDuration: "Ongoing",
        projectOutcome:"Created a Dockerfile for undetected Chromedriver with Selenium in headful mode, supporting GUI rendering for token generation in a Flask environment, deployable on platforms like GCP and AWS.",
        deliverables:
            ["Dockerfile for Undetected Chromedriver supporting headful mode and anti-detection configuration",
            "Deployment instructions for both local and server environments, including Flask setup and port configuration",
            "Testing and troubleshooting support, with guidance on deployment across services like Railway and GCP",
            "Alternative deployment options for enhanced stability, including setup recommendations for GCP VM and AWS"
            ]
    },
    {
        title: "Dockerize Laravel Application",
        status: "Job in progress",
        startDate: "2024-09-01",
        technologiesUsed: ["Docker", "Docker Compose", "Laravel", "PHP", "Nginx", "NPM"],
        projectDuration: "Ongoing",
        projectOutcome:"Successfully dockerized a Laravel application in three scenarios: combined Laravel and MySQL container, multi-container with Laravel and MySQL, and Laravel container with external MySQL credentials. Ensured compatibility and seamless deployment across various environments.",
        deliverables: [
            "Dockerfile and Docker Compose setup for single-container deployment (Laravel and MySQL)",
            "Multi-container Docker Compose configuration for separate Laravel and MySQL containers",
            "Dockerfile for Laravel application with environment variables for external MySQL connection",
            "Documentation for setup and deployment with environment variable integration"
            ]
    },
    // Adding completed projects
    {
        title: "Shell Scripting Linux Administrator",
        description: "Comprehensive Linux system administration using shell scripts",
        technologiesUsed: ["Preseed", "Docker", "Ansible", "BASH Scripting", "Linux"],
        startDate: "2023-04-26",
        endDate: "2024-05-08",
        projectDuration: "378 days",
        projectOutcome: "Created a custom ISO using Preseed to streamline setup of Linux-based systems, integrated Docker for efficient application deployment and environment consistency.",
        deliverables: ["Custom Linux ISO with automated Preseed configurations",
"Dockerized application environment for simplified deployments",
"Automated scripts for ISO deployment and system setup",
"Preseed configuration files for customized system installations",
"Comprehensive deployment documentation and user guides"]
    },
    {
        title: "Dotfiles Management and SSH Key Automation",
        description: "Developed a comprehensive system for managing dotfiles and SSH keys using Ansible, improving both security and efficiency in development environments across macOS and Linux.",
        feedback: "Suyash was nothing short of excellent in gathering the requirements and asking the right questions, staying proactive on solutioning for the problem, and going through extra iterations to refine things at the end. He also wrote excellent documentation to wrap it up. Highly recommend!",
        technologiesUsed: ["Ansible", "BASH", "GitHub", "MacOS", "Ubuntu", "Docker", "zsh", "tmux", "neovim"],
        startDate: "2024-04-08",
        endDate: "2024-07-28",
        projectDuration: "111 days",
        projectOutcome: "Successfully created an Ansible-based dotfiles setup for both macOS and Linux.",
        deliverables: ["Ansible-based dotfiles setup", "Configuration for zsh, tmux, neovim, Git"],
        technicalApproach: [
            "Credentials Management: Ansible Vault for secure key storage",
            "SSH Key Generation: Automated setup and verification",
            "GitHub Integration: Automated SSH key deployment",
            "Environment Setup: Cross-platform configuration",
            "Docker Integration: Containerized environment"
        ]
    },
    {
        title: "Ubuntu Snap Package Creation",
        feedback: "Very cooperative and resourceful individual. Has my full recommendation.",
        technologiesUsed: ["Ubuntu", "Snapcraft", "Nginx", "Docker"],
        startDate: "2024-01-25",
        endDate: "2024-05-13",
        projectDuration: "109 days",
        projectOutcome: "Successfully created Ubuntu Snap package.",
        deliverables: ["Ubuntu Snap package"]
    },
    {
        title: "NVIDIA Drivers Update in Ubuntu",
        feedback: "Suyash solved my problem and communicated well. I recommend him!",
        technologiesUsed: ["Ubuntu", "NVIDIA"],
        startDate: "2022-04-17",
        endDate: "2022-04-20",
        projectDuration: "3 days",
        projectOutcome: "NVIDIA drivers updated successfully.",
        deliverables: ["Updated NVIDIA drivers"]
    },
    {
        title: "Setup SSL Certificate on Nginx",
        feedback: "Thanks for your quick help, Suyash did a great job.",
        technologiesUsed: ["SSL", "Nginx"],
        startDate: "2022-12-09",
        endDate: "2022-12-09",
        projectDuration: "1 day",
        projectOutcome: "SSL certificate set up successfully.",
        deliverables: ["Set up SSL certificate"]
    },
    {
        title: "RTMP Container Setup",
        technologiesUsed: ["RTMP", "Docker"],
        startDate: "2022-06-23",
        endDate: "2022-07-10",
        projectDuration: "17 days",
        projectOutcome: "RTMP container set up successfully.",
        deliverables: ["Set up RTMP container"]
    }
];

const ProjectCard = ({
    project
}: {
    project: Project;
}) => {
    const isOngoing = project.status?.toLowerCase().includes('progress');

    return (
        <div className="space-y-16">
            <div className="h-px w-full bg-border" />

            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-[250px_1fr]">
                {/* Left Column */}
                <div className="space-y-6">
                    <div className="space-y-1">
                        <div className="flex items-center gap-3">
                            <div className="h-11 w-11 rounded-full bg-purple-600" />
                            {isOngoing && (
                                <span className="rounded-full bg-green-600/10 px-3 py-1 text-sm font-medium text-green-600">
                                    Active
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">Duration</p>
                            <p className="font-medium">{project.projectDuration}</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">Technologies</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologiesUsed.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium dark:bg-slate-800"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-medium">{project.title}</h3>
                        {project.description && (
                            <p className="max-w-2xl text-muted-foreground">
                                {project.description}
                            </p>
                        )}
                        {project.projectOutcome && (
                            <p className="max-w-2xl text-muted-foreground">
                                {project.projectOutcome}
                            </p>
                        )}
                    </div>

                    {project.deliverables && project.deliverables.length > 0 && (
                        <div className="space-y-2">
                            <p className="font-medium">Deliverables:</p>
                            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                                {project.deliverables.map((deliverable, index) => (
                                    <li key={index}>{deliverable}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.technicalApproach && project.technicalApproach.length > 0 && (
                        <div className="space-y-2">
                            <p className="font-medium">Technical Approach:</p>
                            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                                {project.technicalApproach.map((approach, index) => (
                                    <li key={index}>{approach}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.feedback && (
                        <blockquote className="space-y-4 border-l-2 border-purple-600 pl-6">
                            <p className="italic text-muted-foreground">
                                &ldquo;{project.feedback}&rdquo;
                            </p>
                            <footer className="text-sm font-medium">
                                Client Feedback
                            </footer>
                        </blockquote>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function Page() {
    return (
        <div className="space-y-32 px-4 py-16 md:px-6 lg:px-8">
            {/* Hero Section */}
            <section className="space-y-8">
                <span className="text-lg font-medium">Our Portfolio</span>
                <h1 className="max-w-4xl text-6xl font-semibold tracking-tight">
                    DevOps Solutions & System Administration
                </h1>
                <p className="max-w-2xl text-lg text-muted-foreground">
                    Specializing in Linux systems, containerization, and infrastructure automation.
                    Delivering robust solutions for real-world technical challenges.
                </p>
            </section>

            {/* All Projects Section */}
            <section className="space-y-16">
                <h2 className="text-4xl font-semibold">Case Studies</h2>
                <div className="space-y-32">
                    {allProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
